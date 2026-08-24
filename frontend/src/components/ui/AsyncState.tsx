export function LoadingState({ label = "Loading content" }: { label?: string }) {
  return (
    <div className="mx-auto max-w-[1240px] px-5 py-20" role="status" aria-live="polite">
      <div className="h-9 w-2/5 animate-pulse rounded-lg bg-kbc-purple-100" />
      <div className="mt-5 h-4 w-4/5 animate-pulse rounded bg-kbc-purple-50" />
      <span className="sr-only">{label}</span>
    </div>
  );
}

export function ErrorState({ message = "We could not load this content. Please try again." }: { message?: string }) {
  return <div className="mx-auto my-16 max-w-3xl rounded-2xl border border-red-200 bg-red-50 p-7 text-red-900 shadow-sm" role="alert">{message}</div>;
}

export function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="mx-auto my-16 max-w-3xl rounded-2xl border border-dashed border-kbc-purple-200 bg-kbc-purple-50/50 p-10 text-center">
      <h2 className="font-heading text-3xl font-semibold text-kbc-purple-950">{title}</h2>
      <p className="mt-3 text-kbc-purple-700">{body}</p>
    </div>
  );
}
