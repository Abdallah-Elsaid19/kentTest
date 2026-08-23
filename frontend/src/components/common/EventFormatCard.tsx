import { ArrowLink } from "@/components/navigation";

export interface EventFormatCardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
  actionLabel: string;
  actionTo: string;
}

export function EventFormatCard({
  imageSrc,
  imageAlt = "",
  title,
  description,
  actionLabel,
  actionTo,
}: EventFormatCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e5e0e8] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(36,16,45,.11)] motion-reduce:transition-none">
      <div className="h-[200px] shrink-0 overflow-hidden bg-slate-100">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none" src={imageSrc} alt={imageAlt} loading="lazy" />
      </div>
      <div className="grid min-h-[320px] flex-1 grid-rows-[76px_1fr_auto] p-6">
        <h3 className="font-heading text-[26px] font-semibold leading-[1.12] text-kbc-purple-950">{title}</h3>
        <p className="pt-4 text-base leading-relaxed text-slate-600">{description}</p>
        <ArrowLink className="!min-h-12 !w-full !justify-center !border-t !border-[#e7e1e8] !pt-4 !text-sm !text-[#4B176D] hover:!text-[#371050]" to={actionTo}>{actionLabel}</ArrowLink>
      </div>
    </article>
  );
}
