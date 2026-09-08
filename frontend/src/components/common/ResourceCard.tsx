import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { NavigationButton } from "@/components/navigation";

export function ResourceCard({ title, eyebrow, description, image, imageAlt, imageWidth, imageHeight, actionLabel, onDetails, href, metadata, imageFit = "contain", featured = false }: {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  actionLabel: string;
  metadata?: ReactNode;
  imageFit?: "contain" | "cover";
  featured?: boolean;
} & ({ href: string; onDetails?: never } | { href?: never; onDetails: () => void })) {
  const Heading = featured ? "h2" : "h3";
  return (
    <article className={`group min-w-0 overflow-hidden rounded-2xl border border-kbc-purple-100 bg-white transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(39,14,73,0.1)] motion-reduce:transition-none ${featured ? "grid lg:grid-cols-2" : "flex flex-col"}`}>
      <div className={imageFit === "cover" ? `relative overflow-hidden bg-kbc-purple-50 ${featured ? "aspect-[16/10] lg:aspect-auto" : "aspect-[16/10]"}` : "flex h-72 items-center justify-center border-b border-kbc-purple-100 bg-[#f7f4fa] p-6 sm:h-80"}>
        <img src={image} alt={imageAlt} width={imageWidth} height={imageHeight} loading="lazy" decoding="async" className={imageFit === "cover" ? "absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none" : "h-full w-full object-contain"} />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-xs font-bold uppercase leading-6 tracking-widest text-primary">{eyebrow}</p>
        <Heading className={`mt-4 !font-semibold !leading-tight tracking-tight text-primary-dark ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{title}</Heading>
        <p className="mt-4 text-sm leading-7 text-[#756F79]">{description}</p>
        {metadata && <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-kbc-purple-100 pt-4 text-xs leading-6 text-kbc-dark-600">{metadata}</div>}
        <div className="mt-auto pt-7">
          <NavigationButton to={href} onClick={onDetails} ariaLabel={`${actionLabel}: ${title}`} className="w-full gap-2" >{actionLabel}<ArrowUpRight size={17} aria-hidden="true" /></NavigationButton>
        </div>
      </div>
    </article>
  );
}
