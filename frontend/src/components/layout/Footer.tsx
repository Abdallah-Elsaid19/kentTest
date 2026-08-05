import { Link } from "react-router-dom";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { useNavigation, useSite } from "@/features/content/queries";

export function Footer() {
  const { data: site } = useSite();
  const { data: navigation } = useNavigation();
  const name = site?.organisationName || "Kent Business College";
  return <footer className="bg-slate-950 text-white"><div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8"><div><p className="font-heading text-xl font-semibold">{name}</p>{site?.tagline && <p className="mt-3 max-w-sm text-sm text-white/65">{site.tagline}</p>}</div><nav className="grid gap-3" aria-label="Footer navigation">{(navigation?.footer || []).map((item) => item.external ? <a key={item.id} href={item.path} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-kbc-gold-400">{item.label}</a> : <Link key={item.id} to={item.path} className="text-sm text-white/70 hover:text-kbc-gold-400">{item.label}</Link>)}</nav><NewsletterForm /></div><div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50">© {new Date().getFullYear()} {name}</div></footer>;
}
