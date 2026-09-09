import { NavigationButton } from '@/components/navigation';
import { ProgrammeChecklist } from './ProgrammeGrids';

export type ProgrammeCopyBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'list'; items: readonly string[] }
  | { kind: 'action'; label: string; to: string };

/** Structured paragraphs, lists and links for content-rich programme answers. */
export function ProgrammeCopy({ blocks }: { blocks: readonly ProgrammeCopyBlock[] }) {
  return <div className="space-y-4">{blocks.map((block, index) => {
    if (block.kind === 'list') return <ProgrammeChecklist key={index} items={block.items} />;
    if (block.kind === 'action') return <NavigationButton key={index} to={block.to} variant="secondary" className="!whitespace-normal text-center">{block.label}</NavigationButton>;
    return <p key={index}>{block.text}</p>;
  })}</div>;
}

export function ProgrammeSectionFooter({ notes = [], actions = [], inverse = false }: {
  notes?: readonly string[];
  actions?: readonly { label: string; to: string }[];
  inverse?: boolean;
}) {
  return <div className="mt-8 space-y-5">
    {notes.map(note => <p key={note} className={`text-sm leading-7 ${inverse ? 'text-white/80' : 'text-[var(--color-muted)]'}`}>{note}</p>)}
    {actions.length > 0 && <div className="flex flex-col flex-wrap justify-center gap-3 sm:flex-row">{actions.map((action, index) => <NavigationButton key={`${action.label}-${action.to}`} to={action.to} variant={inverse ? (index === 0 ? 'accent' : 'inverse') : (index === 0 ? 'primary' : 'secondary')} className="min-h-12 !whitespace-normal py-3">{action.label}</NavigationButton>)}</div>}
  </div>;
}
