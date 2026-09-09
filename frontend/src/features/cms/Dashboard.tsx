import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, NavLink, Route, Routes, useBlocker, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock3, ExternalLink, Eye, FileText, Home, Image, LayoutDashboard, Layers3, LogOut, Menu, Pencil, Search, ShieldCheck, Upload, Users, X } from "lucide-react";
import { LoadingState, ErrorState } from "@/components/ui/AsyncState";
import { ApiError } from "@/services/api/apiError";
import type { CollectionResponse } from "@/types/api";
import { HomeSections } from "@/pages/home/page";
import { ContentFields } from "./ContentFields";
import { homeContract, fieldValidator, parseHomeDocument } from "./schema";
import { cmsRequest, getAdminSession, saveEntry, signIn, signOut, type AdminSession, type ContentAction, type ContentCollection, type ContentEntry, type ContentRevision } from "./api";
import "./dashboard.css";
import { pageRegistry } from "./pageRegistry";
import { notifyPublishedContent } from "./liveUpdates";

const dateLabel = (value: string) => new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
const message = (error: unknown) => error instanceof Error ? error.message : "The request could not be completed.";
function Badge({ entry }: { entry: ContentEntry }) {
  return <span className={`cms-badge cms-badge--${entry.status}`}><i />{entry.status === "draft" && entry.publishedContent && entry.isActive ? "Live · draft changes" : entry.status}</span>;
}
function useCollections() { return useQuery({ queryKey: ["cms", "collections"], queryFn: () => cmsRequest<{ items: ContentCollection[] }>("/collections/") }); }

function Login({ onLogin }: { onLogin: (session: AdminSession) => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const mutation = useMutation({ mutationFn: () => signIn(username, password), onSuccess: session => { setPassword(""); onLogin(session); } });
  return <div className="cms-login"><div className="cms-login-brand"><img src="/assets/logos/kbc-logo-figma.png" alt="Kent Business College" /><p>One college.<br />Every story, in your hands.</p><span>CONTENT MANAGEMENT</span></div>
    <form className="cms-login-form" onSubmit={event => { event.preventDefault(); mutation.mutate(); }}><ShieldCheck size={32} /><p className="cms-eyebrow">KBC administration</p><h1>Welcome back</h1><p>Sign in to manage your website content.</p>
      <label htmlFor="cms-username">Username</label><input id="cms-username" autoComplete="username" required maxLength={150} value={username} onChange={event => setUsername(event.target.value)} />
      <label htmlFor="cms-password">Password</label><input id="cms-password" type="password" autoComplete="current-password" required value={password} onChange={event => setPassword(event.target.value)} />
      {mutation.error && <p className="cms-notice cms-notice--error" role="alert">{message(mutation.error)}</p>}
      <button className="cms-button cms-button--primary" disabled={mutation.isPending}>{mutation.isPending ? "Signing in…" : "Sign in"}<ArrowRight size={18} /></button><Link to="/">Return to the website</Link>
    </form></div>;
}

function Overview() {
  const query = useCollections();
  if (query.isPending) return <LoadingState />;
  if (query.error) return <ErrorState message={message(query.error)} />;
  const totals = query.data!.items.reduce((sum, item) => ({ total: sum.total + item.total, live: sum.live + item.live, drafts: sum.drafts + item.drafts }), { total: 0, live: 0, drafts: 0 });
  return <><div className="cms-page-heading"><div><p className="cms-eyebrow">Your website, up to date</p><h1>Content dashboard</h1><p>Manage the stories and information that bring KBC to life.</p></div><Link className="cms-button cms-button--primary" to="/dashboard/content">Manage content<ArrowRight size={17} /></Link></div>
    <div className="cms-stats">{[[FileText, totals.total, "Content sections"], [CheckCircle2, totals.live, "Live on your website"], [Clock3, totals.drafts, "Drafts to review"]].map(([Icon, count, label]) => { const StatIcon = Icon as typeof FileText; return <div className="cms-stat" key={String(label)}><StatIcon size={22} /><strong>{String(count)}</strong><span>{String(label)}</span></div>; })}</div>
    <div className="cms-section-title"><h2>Your collections</h2><Link to="/dashboard/content">View all content <ArrowRight size={16} /></Link></div>
    <div className="cms-collections">{query.data!.items.map(collection => <Link key={collection.key} to={`/dashboard/content?collection=${collection.key}`} className="cms-collection"><div className="cms-collection-art"><Home size={52} /><span>KBC</span></div><div><p className="cms-eyebrow">Website collection</p><h2>{collection.title}</h2><p>{collection.total} sections · {collection.live} live · {collection.drafts} with drafts</p><span className="cms-text-link">Open collection <ArrowRight size={17} /></span></div></Link>)}</div>
    <aside className="cms-help"><ShieldCheck size={24} /><div><h3>Space to get it right</h3><p>Save a draft as you work. Your live website keeps its published version until you choose Publish.</p></div></aside>
  </>;
}

function SectionList() {
  const collections = useCollections();
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState(params.get("search") || "");
  const page = Number(params.get("page") || 1);
  const queryString = new URLSearchParams(params); queryString.set("perPage", "9");
  const query = useQuery({ queryKey: ["cms", "entries", queryString.toString()], queryFn: () => cmsRequest<CollectionResponse<ContentEntry>>(`/entries/?${queryString}`) });
  const updateFilter = (name: string, value: string) => { const next = new URLSearchParams(params); value ? next.set(name, value) : next.delete(name); next.delete("page"); setParams(next); };
  return <><div className="cms-page-heading"><div><p className="cms-eyebrow">Content library</p><h1>{collections.data?.items.find(item => item.key === params.get("collection"))?.title || "Content sections"}</h1><p>Find a section, refine your content, and publish when it’s ready.</p></div><a className="cms-button" href="/" target="_blank" rel="noreferrer">View website <ExternalLink size={16} /></a></div>
    <div className="cms-filters"><form onSubmit={event => { event.preventDefault(); updateFilter("search", search); }} className="cms-search"><Search size={18} /><input aria-label="Search content" placeholder="Search titles or content…" value={search} onChange={event => setSearch(event.target.value)} /><button type="submit">Search</button></form>
      <select aria-label="Filter by status" value={params.get("status") || ""} onChange={event => updateFilter("status", event.target.value)}><option value="">All statuses</option><option value="published">Live</option><option value="draft">Has draft</option><option value="inactive">Inactive</option></select>
      <select aria-label="Filter by collection" value={params.get("collection") || ""} onChange={event => updateFilter("collection", event.target.value)}><option value="">All collections</option>{collections.data?.items.map(item => <option key={item.key} value={item.key}>{item.title}</option>)}</select>
    </div>
    {query.isPending ? <LoadingState /> : query.error ? <ErrorState message={message(query.error)} /> : <>
      <p className="cms-result-count">{query.data!.pagination.totalItems} content sections</p>
      <div className="cms-content-grid">{query.data!.items.map(entry => <article className="cms-content-card" key={entry.key}><div className="cms-card-top"><span className="cms-section-icon">{entry.section === "hero" ? <Home /> : entry.section === "metadata" ? <Search /> : <Layers3 />}</span><Badge entry={entry} /></div><p className="cms-eyebrow">{entry.page} · Section {entry.sortOrder + 1}</p><h2>{entry.title}</h2><p className="cms-card-meta">Updated {dateLabel(entry.updatedAt)}<br />{entry.updatedByName || "Initial content import"} · Version {entry.version}</p><div className="cms-card-actions"><Link to={`/dashboard/content/${entry.key}?view=1`}><Eye size={16} />View</Link>{!params.has("view") && <Link to={`/dashboard/content/${entry.key}`}><Pencil size={16} />Edit content <ArrowRight size={15} /></Link>}</div></article>)}</div>
      {!query.data!.items.length && <div className="cms-empty"><Search size={32} /><h2>No matching content</h2><p>Try another search or clear the filters.</p><button className="cms-button" onClick={() => { setSearch(""); setParams({}); }}>Clear filters</button></div>}
      <div className="cms-pagination"><span>Page {page} of {query.data!.pagination.totalPages}</span><button className="cms-button" disabled={page <= 1} onClick={() => { const next = new URLSearchParams(params); next.set("page", String(page - 1)); setParams(next); }}>Previous</button><button className="cms-button" disabled={page >= query.data!.pagination.totalPages} onClick={() => { const next = new URLSearchParams(params); next.set("page", String(page + 1)); setParams(next); }}>Next <ArrowRight size={15} /></button></div>
    </>}
  </>;
}

function EntryEditor({ entry }: { entry: ContentEntry }) {
  const [saved, setSaved] = useState(entry);
  const [content, setContent] = useState(entry.content);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState("");
  const [params, setParams] = useSearchParams();
  const readOnly = params.has("view");
  const cache = useQueryClient();
  const dirty = JSON.stringify(content) !== JSON.stringify(saved.content);
  const blocker = useBlocker(dirty);
  const history = useQuery({ queryKey: ["cms", "history", entry.key, saved.version], queryFn: () => cmsRequest<CollectionResponse<ContentRevision>>(`/entries/${entry.key}/revisions/?perPage=10`) });
  useEffect(() => {
    if (!dirty) return;
    const onUnload = (event: BeforeUnloadEvent) => { event.preventDefault(); };
    window.addEventListener("beforeunload", onUnload);
    return () => window.removeEventListener("beforeunload", onUnload);
  }, [dirty]);
  const mutation = useMutation({
    mutationFn: (action: ContentAction) => saveEntry(saved, action, action === "draft" || action === "publish" ? content : undefined),
    onSuccess: (result, action) => { setSaved(result); setContent(result.content); setErrors({}); setNotice(action === "draft" ? "Draft saved. The published version is unchanged." : action === "publish" ? "Published. Your website will refresh with this content." : action === "activate" ? "Published section activated." : "Section deactivated and removed from the public page."); void cache.invalidateQueries({ queryKey: ["cms"] }); notifyPublishedContent(cache, action); },
    onError: error => { setNotice(""); if (error instanceof ApiError) setErrors(Object.fromEntries(Object.entries(error.details || {}).filter((pair): pair is [string, string] => typeof pair[1] === "string"))); },
  });
  const submit = (action: ContentAction) => {
    setNotice("");
    if (action === "draft" || action === "publish") {
      const result = fieldValidator(schema).safeParse(content);
      if (!result.success) { setErrors(Object.fromEntries(result.error.issues.map(issue => [`content.${issue.path.join(".")}`, issue.message]))); return; }
    }
    setErrors({}); mutation.mutate(action);
  };
  const schema = entry.schema || homeContract[entry.section as keyof typeof homeContract];
  const pageTitle = entry.page === "home" ? "Home Content" : pageRegistry[entry.page as keyof typeof pageRegistry]?.title || entry.page;
  return <>
    <Link className="cms-back" to={`/dashboard/content?collection=${entry.page}`}><ArrowLeft size={16} />{pageTitle}</Link>
    <div className="cms-page-heading"><div><p className="cms-eyebrow">{pageTitle} / {readOnly ? "View section" : "Edit section"}</p><h1>{entry.title}</h1><p>Version {saved.version} · Last saved {dateLabel(saved.updatedAt)}</p></div><Badge entry={saved} /></div>
    <div className="cms-editor-actions">{readOnly ? <button className="cms-button cms-button--primary" onClick={() => setParams({})}><Pencil size={16} />Edit content</button> : <><button className="cms-button" disabled={mutation.isPending || !dirty} onClick={() => { setContent(saved.content); setErrors({}); setNotice(""); }}>Discard changes</button><button className="cms-button" disabled={mutation.isPending} onClick={() => submit("draft")}><FileText size={16} />{mutation.isPending && mutation.variables === "draft" ? "Saving…" : "Save draft"}</button><button className="cms-button cms-button--primary" disabled={mutation.isPending} onClick={() => submit("publish")}><Upload size={16} />{mutation.isPending && mutation.variables === "publish" ? "Publishing…" : saved.isActive ? "Publish" : "Publish & activate"}</button></>}
      <Link className="cms-button" to={`/dashboard/preview/${entry.key}`} target="_blank" rel="noreferrer"><Eye size={16} />Preview saved draft</Link><span className="cms-save-state">{dirty ? "Unsaved changes" : "All changes saved"}</span>
    </div>
    {dirty && <p className="cms-hint">Save your draft before opening a preview.</p>}
    {notice && <p className="cms-notice" role="status"><CheckCircle2 size={18} />{notice}</p>}
    {mutation.error && <div className="cms-notice cms-notice--error" role="alert"><p>{message(mutation.error)}</p>{mutation.error instanceof ApiError && mutation.error.status === 409 && <button className="cms-button" onClick={async () => { if (dirty && !window.confirm("Replace your unsaved edits with the latest saved version?")) return; const latest = await cmsRequest<ContentEntry>(`/entries/${entry.key}/`); setSaved(latest); setContent(latest.content); mutation.reset(); }}>Reload latest version</button>}</div>}
    {Object.keys(errors).length > 0 && <div className="cms-notice cms-notice--error" role="alert"><p>Correct the following fields before saving:</p><ul>{Object.entries(errors).map(([path, error]) => <li key={path}>{path.replace(/^content\./, "")}: {error}</li>)}</ul></div>}
    {blocker.state === "blocked" && <div className="cms-notice cms-notice--error" role="alert"><p>You have unsaved changes. Leave this editor?</p><button className="cms-button" onClick={() => blocker.reset()}>Keep editing</button><button className="cms-button" onClick={() => blocker.proceed()}>Discard and leave</button></div>}
    <div className="cms-editor-grid"><div className="cms-editor-panel"><ContentFields schema={schema} value={content} onChange={next => setContent(next as Record<string, unknown>)} label="Section content" errors={errors} disabled={readOnly || mutation.isPending} /></div>
      <aside className="cms-editor-aside"><div className="cms-aside-card"><h2>Publication</h2><p>{saved.publishedContent && saved.isActive ? "The published version is live on this page." : "This section is not visible on this page."}</p>{saved.hasDraft && <p className="cms-hint">There are saved draft changes.</p>}{saved.publishedAt && <p>Last published<br /><strong>{dateLabel(saved.publishedAt)}</strong></p>}{entry.section !== "metadata" && !readOnly && <button className="cms-button" disabled={mutation.isPending || dirty || (!saved.isActive && !saved.publishedContent)} onClick={() => submit(saved.isActive ? "deactivate" : "activate")}>{saved.isActive ? "Deactivate section" : "Activate published version"}</button>}</div>
        <div className="cms-aside-card"><h2>Version history</h2>{history.isPending ? <p>Loading history…</p> : history.error ? <p role="alert">Unable to load history.</p> : <ol className="cms-history">{history.data!.items.map(revision => <li key={revision.version}><span className="cms-history-dot" /><strong>v{revision.version} · {revision.action}</strong><p>{revision.actorName || "Content import"}</p><time>{dateLabel(revision.createdAt)}</time></li>)}</ol>}<p className="cms-hint">Showing the latest 10 saved versions.</p></div>
      </aside></div>
  </>;
}

function EditorRoute() {
  const { key = "" } = useParams();
  const query = useQuery({ queryKey: ["cms", "entry", key], queryFn: () => cmsRequest<ContentEntry>(`/entries/${encodeURIComponent(key)}/`), refetchOnWindowFocus: false });
  if (query.isPending) return <LoadingState />;
  if (query.error) return <ErrorState message={message(query.error)} />;
  return <EntryEditor entry={query.data!} key={key} />;
}
function HomePreview() {
  const { key = "" } = useParams();
  const query = useQuery({ queryKey: ["cms", "preview", key], queryFn: async () => parseHomeDocument(await cmsRequest(key === "home" ? "/pages/home/preview/" : `/entries/${encodeURIComponent(key)}/preview/`)), staleTime: 0 });
  return <><div className="cms-preview-bar"><Eye size={18} /><strong>Saved draft preview</strong><span>{key} · Other sections show published content</span><Link to={key === "home" ? "/dashboard/content?collection=home" : `/dashboard/content/${key}`}>Back to editor</Link></div>{query.isPending ? <LoadingState /> : query.error ? <ErrorState message={message(query.error)} /> : <HomeSections content={query.data!} preview />}</>;
}

export default function Dashboard() {
  const cache = useQueryClient();
  const navigate = useNavigate();
  const session = useQuery({ queryKey: ["cms-session"], queryFn: getAdminSession, retry: false, staleTime: 30_000 });
  const [menuOpen, setMenuOpen] = useState(false);
  const logout = useMutation({ mutationFn: signOut, onSuccess: () => { cache.removeQueries({ queryKey: ["cms"] }); cache.setQueryData(["cms-session"], { csrfToken: "", user: null }); navigate("/dashboard"); } });
  const meta = <Helmet><title>KBC Content Dashboard</title><meta name="robots" content="noindex,nofollow" /></Helmet>;
  if (session.isPending) return <>{meta}<LoadingState label="Checking administrator session" /></>;
  if (session.error) return <>{meta}<ErrorState message="The administration service is unavailable." /><button className="cms-button" onClick={() => void session.refetch()}>Try again</button></>;
  if (!session.data?.user) return <div className="cms-root">{meta}<Login onLogin={data => cache.setQueryData(["cms-session"], data)} /></div>;
  if (!session.data.user.isAdmin) return <div className="cms-root">{meta}<ErrorState message="This account does not have KBC administrator access." /><button className="cms-button" onClick={() => logout.mutate()}>Sign out</button></div>;
  return <div className="cms-root">{meta}<Routes><Route path="preview/:key" element={<Preview />} /><Route path="*" element={<div className="cms-layout">
    <aside className={`cms-sidebar ${menuOpen ? "is-open" : ""}`}><Link className="cms-brand" to="/dashboard"><img src="/assets/logos/kbc-logo-figma.png" alt="Kent Business College" /><span>CONTENT STUDIO</span></Link><button className="cms-mobile-close cms-icon-button" aria-label="Close navigation" onClick={() => setMenuOpen(false)}><X /></button><p className="cms-nav-label">Workspace</p><nav onClick={event => { if ((event.target as HTMLElement).closest("a")) setMenuOpen(false); }}><NavLink to="/dashboard" end><LayoutDashboard size={19} />Dashboard</NavLink><NavLink to="/dashboard/content"><Layers3 size={19} />All content</NavLink><ContentNavigation /><p className="cms-nav-label">Administration</p>{session.data.user.canManageMedia && <a href="/admin/media_library/mediaasset/" target="_blank" rel="noreferrer"><Image size={19} />Media library<ExternalLink size={13} /></a>}<a href="/admin/" target="_blank" rel="noreferrer"><BookOpen size={19} />Django administration<ExternalLink size={13} /></a>{session.data.user.canManageUsers && <a href="/admin/users/user/" target="_blank" rel="noreferrer"><Users size={19} />Users & admins<ExternalLink size={13} /></a>}</nav><div className="cms-sidebar-footer"><ShieldCheck size={19} /><span>Kent Business College<br /><small>Website administration</small></span></div></aside>
    <div className="cms-workspace"><header className="cms-topbar"><button className="cms-mobile-menu cms-icon-button" aria-label="Open navigation" onClick={() => setMenuOpen(true)}><Menu /></button><span className="cms-topbar-label">Kent Business College <span>/ Content management</span></span><a className="cms-website-link" href="/" target="_blank" rel="noreferrer">View website<ExternalLink size={15} /></a><div className="cms-profile"><span>{session.data.user.name.charAt(0).toUpperCase()}</span><div><strong>{session.data.user.name}</strong><small>Administrator · <a href="/admin/password_change/" target="_blank" rel="noreferrer">Change password</a></small></div></div><button className="cms-icon-button" aria-label="Sign out" disabled={logout.isPending} onClick={() => logout.mutate()}><LogOut size={18} /></button></header>
      <main className="cms-main" id="main-content">{logout.error && <p className="cms-notice cms-notice--error" role="alert">{message(logout.error)}</p>}<Routes><Route index element={<Overview />} /><Route path="content" element={<ContentList />} /><Route path="content/:key" element={<EditorRoute />} /><Route path="*" element={<ErrorState message="This dashboard page could not be found." />} /></Routes></main><footer className="cms-footer">Kent Business College <span>Content management</span></footer>
    </div></div>} /></Routes></div>;
}

function ContentNavigation() {
  const query = useCollections();
  const groups = [...new Set(query.data?.items.map(item => item.group || "Home"))];
  return <><Link to="/dashboard/content?collection=home"><Home size={19} />Home</Link>{groups.filter(group => group !== "Home").map(group => <details className="cms-nav-group" key={group}><summary>{group}</summary>{query.data?.items.filter(item => item.group === group).map(item => <Link key={item.key} to={`/dashboard/content?collection=${item.key}`}>{item.title}</Link>)}</details>)}</>;
}

function ContentList() {
  const [params, setParams] = useSearchParams();
  const query = useCollections();
  const [search, setSearch] = useState(params.get("search") || "");
  if (params.get("collection")) return <SectionList />;
  const filter = (key: string, value: string) => { const next = new URLSearchParams(params); value ? next.set(key, value) : next.delete(key); setParams(next); };
  const items = query.data?.items.filter(item => (!params.get("group") || item.group === params.get("group")) && (!params.get("status") || item.status === params.get("status")) && [item.title, item.key, item.route, ...(item.sectionNames || [])].join(" ").toLowerCase().includes(search.toLowerCase())) || [];
  const groups = [...new Set(query.data?.items.map(item => item.group || "Home"))];
  return <><div className="cms-page-heading"><div><p className="cms-eyebrow">Content library</p><h1>All content</h1><p>Find a page, manage its sections, and preview saved changes.</p></div></div>
    <div className="cms-filters"><div className="cms-search"><Search size={18} /><input aria-label="Search content" placeholder="Search pages, keys, routes or section names" value={search} onChange={event => { setSearch(event.target.value); filter("search", event.target.value); }} /></div>
      <select aria-label="Filter by group" value={params.get("group") || ""} onChange={event => filter("group", event.target.value)}><option value="">All groups</option>{groups.map(group => <option key={group}>{group}</option>)}</select>
      <select aria-label="Filter by status" value={params.get("status") || ""} onChange={event => filter("status", event.target.value)}><option value="">All statuses</option><option value="published">Published</option><option value="draft">Draft</option><option value="inactive">Inactive</option></select>
    </div>
    {query.isPending ? <LoadingState /> : query.error ? <ErrorState message={message(query.error)} /> : <><p className="cms-result-count">{items.length} managed pages</p><div className="cms-content-grid">{items.map(item => <article className="cms-content-card" key={item.key}>
      <div className="cms-card-top"><span className="cms-eyebrow">{item.group || "Home"}</span><span className={`cms-badge cms-badge--${item.status || "published"}`}>{item.status || "published"}</span></div>
      <h2>{item.title}</h2><p className="cms-page-key">{item.key}</p><p><a href={item.route || "/"} target="_blank" rel="noreferrer">{item.route || "/"}</a></p><p>{item.total} sections · {item.live} live · {item.drafts} with drafts</p><p>{item.publishState || "Published"}</p>
      <p className="cms-card-meta">{item.updatedAt ? `Updated ${dateLabel(item.updatedAt)}` : "Initial content import"}<br />{item.updatedByName || "Initial content import"}</p>
      <div className="cms-card-actions"><Link to={`/dashboard/content?collection=${item.key}`}><Pencil size={16} />Manage</Link><Link to={`/dashboard/content?collection=${item.key}&view=1`}><Eye size={16} />View</Link><Link to={`/dashboard/preview/${item.key}`} target="_blank" rel="noreferrer">Preview<ExternalLink size={15} /></Link></div>
    </article>)}</div>{!items.length && <p className="cms-empty">No pages match your search and filters.</p>}</>}
  </>;
}

function Preview() {
  const { key = "" } = useParams();
  const page = key.split(".")[0];
  if (page === "home") return <HomePreview />;

  const identity = pageRegistry[page as keyof typeof pageRegistry];
  if (!identity) return <ErrorState message="This page does not have a content preview." />;
  return <><div className="cms-preview-bar"><Eye size={18} /><strong>Saved draft preview</strong><span>{identity.title}{key.includes(".") ? " · Other sections show published content" : " · All saved sections"}</span><Link to={`/dashboard/content?collection=${page}`}>Back to sections</Link></div><iframe className="cms-preview-frame" title={`${identity.title} draft preview`} src={`${identity.route}?cmsPreview=${encodeURIComponent(key.includes(".") ? key : "all")}`} /></>;
}
