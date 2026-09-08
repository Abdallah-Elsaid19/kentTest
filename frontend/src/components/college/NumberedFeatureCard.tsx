type NumberedFeatureCardProps = {
  number?: string;
  title: string;
  description: string;
};

export function NumberedFeatureCard({ number, title, description }: NumberedFeatureCardProps) {
  return (
    <li className="group flex min-h-[290px] flex-col overflow-hidden rounded-xl border border-primary/30 bg-white p-7 shadow-[0_10px_30px_rgba(64,27,140,0.05)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_20px_45px_rgba(64,27,140,0.14)] motion-reduce:transform-none motion-reduce:transition-none">
      {number && <span className="text-4xl font-semibold leading-none tracking-tight text-primary" aria-hidden="true">{number}</span>}
      <h3 className={`${number ? "mt-8" : "mt-1"} text-xl font-semibold leading-snug tracking-tight text-kbc-purple-950`}>{title}</h3>
      <span className="mt-7 block h-0.5 w-14 bg-kbc-gold-500 transition-[width] duration-500 ease-out group-hover:w-full motion-reduce:transition-none" aria-hidden="true" />
      <p className="mt-6 text-sm leading-7 text-kbc-dark-500">{description}</p>
    </li>
  );
}
