export function LoadingState({ label = "Loading content" }: { label?: string }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16" role="status" aria-live="polite">
      <div className="h-8 w-2/5 animate-pulse rounded bg-slate-200" />
      <div className="mt-5 h-4 w-4/5 animate-pulse rounded bg-slate-100" />
      <span className="sr-only">{label}</span>
    </div>
  );
}

export function ErrorState({ message = "We could not load this content. Please try again." }: { message?: string }) {
  return <div className="mx-auto my-12 max-w-3xl rounded-2xl border border-red-200 bg-red-50 p-6 text-red-900" role="alert">{message}</div>;
}

export function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="mx-auto my-12 max-w-3xl rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
      <h2 className="font-heading text-2xl font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 text-slate-600">{body}</p>
    </div>
  );
}
