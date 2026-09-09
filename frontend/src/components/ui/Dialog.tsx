import { useEffect, useRef, type ReactNode, type RefObject } from "react";

export function Dialog({ children, titleId, descriptionId, onClose, dialogRef: suppliedRef, wide = false }: {
  children: ReactNode;
  titleId: string;
  descriptionId?: string;
  onClose: () => void;
  dialogRef?: RefObject<HTMLDialogElement | null>;
  wide?: boolean;
}) {
  const internalRef = useRef<HTMLDialogElement>(null);
  const dialogRef = suppliedRef ?? internalRef;

  useEffect(() => {
    const dialog = dialogRef.current;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const hadScrollLock = document.documentElement.classList.contains("overflow-hidden");
    document.documentElement.classList.add("overflow-hidden");
    dialog?.showModal();
    return () => {
      dialog?.close();
      if (!hadScrollLock) document.documentElement.classList.remove("overflow-hidden");
      if (trigger?.isConnected) trigger.focus();
    };
  }, [dialogRef]);

  return (
    <dialog ref={dialogRef} aria-labelledby={titleId} aria-describedby={descriptionId} onClose={(event) => {
      // Ignore a queued cleanup close event if StrictMode has already reopened the dialog.
      if (!event.currentTarget.open) onClose();
    }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
      }}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), a[href], [tabindex="0"]')).filter((element) => element.tabIndex >= 0 && element.getClientRects().length > 0);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }}
      className={`m-auto max-h-[90svh] w-[calc(100%-2rem)] overflow-y-auto overscroll-contain rounded-2xl border-0 bg-white p-6 font-body text-[var(--color-ink)] shadow-2xl backdrop:bg-primary-dark/70 sm:p-8 ${wide ? "max-w-5xl" : "max-w-2xl"}`}
    >{children}</dialog>
  );
}
