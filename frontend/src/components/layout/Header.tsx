import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setMobileNavigationOpen } from "@/app/store";
import { useNavigation, useSite } from "@/features/content/queries";
import type { NavigationItem } from "@/types/site";

function NavigationLink({ item, onClick }: { item: NavigationItem; onClick?: () => void }) {
  const style = "rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-300";
  return item.external ? <a href={item.path} target="_blank" rel="noopener noreferrer" aria-label={item.accessibleLabel || item.label} className={style} onClick={onClick}>{item.label}</a> : <Link to={item.path} aria-label={item.accessibleLabel || item.label} className={style} onClick={onClick}>{item.label}</Link>;
}

export function Header() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.ui.mobileNavigationOpen);
  const { data: site } = useSite();
  const { data: navigation } = useNavigation();
  const items = navigation?.header || [];
  const name = site?.organisationName || "Kent Business College";
  return <header className="sticky top-0 z-50 bg-kbc-purple-700 shadow-lg"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"><Link to="/" className="flex items-center gap-3 text-white" aria-label={`${name} home`}>{site?.logo?.url ? <img src={site.logo.url} alt={site.logo.altText || name} className="h-11 w-auto" /> : <span className="grid h-11 w-11 place-items-center rounded-xl bg-kbc-gold-500 font-heading font-bold text-kbc-purple-950">KBC</span>}<span className="hidden font-heading text-lg font-semibold sm:block">{name}</span></Link><nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">{items.map((item) => <NavigationLink key={item.id} item={item} />)}</nav><button className="rounded-lg p-2 text-white hover:bg-white/10 lg:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => dispatch(setMobileNavigationOpen(!open))}>{open ? <X /> : <Menu />}</button></div>{open && <nav id="mobile-navigation" className="border-t border-white/10 bg-kbc-purple-800 px-4 py-4 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto flex max-w-7xl flex-col gap-1">{items.map((item) => <NavigationLink key={item.id} item={item} onClick={() => dispatch(setMobileNavigationOpen(false))} />)}</div></nav>}</header>;
}
