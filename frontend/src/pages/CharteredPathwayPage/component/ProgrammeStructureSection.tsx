import { CollegeFeatureCard } from '@/components/college/CollegeFeatureCard';
import { ProgrammeCardGrid } from '@/components/programme/ProgrammeGrids';
import { ProgrammeSection } from '@/components/programme/ProgrammeSection';
import { ProgrammeSectionFooter } from '@/components/programme/ProgrammeCopy';
import { certifiedPmoModules, programmeStructure as data, specialistDevelopment } from '../data';

/** The source's 4 + 1 + 1 curriculum, including its mutually exclusive elective. */
export function ProgrammeStructureSection() {
  return <ProgrammeSection {...data} tone="soft">
    <div className="mt-12 rounded-2xl bg-primary-dark p-6 text-white sm:p-8">
      <p className="text-xs font-bold uppercase tracking-widest text-kbc-gold-300">{data.core.eyebrow} · {data.core.credits}</p>
      <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{data.core.title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/80">{data.core.description}</p>
      <ProgrammeCardGrid items={certifiedPmoModules} columns={2} editorial inverse titleAs="h4" />
    </div>
    <div className="mt-6 rounded-2xl border border-kbc-purple-100 bg-white p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-widest text-primary">{data.ai.eyebrow} · {data.ai.credits}</p>
      <h3 className="mt-4 text-2xl font-semibold">{data.ai.title}</h3>
      <p className="mt-4 font-semibold text-primary">{data.ai.lead}</p>
      <p className="mt-3 max-w-4xl text-sm leading-7 text-[var(--color-muted)]">{data.ai.description}</p>
    </div>
    <div className="mt-10 min-w-0 rounded-2xl border border-kbc-purple-100 bg-white p-6 shadow-[0_12px_35px_rgba(39,14,73,0.05)] sm:p-8">
      <p className="text-xs font-bold uppercase tracking-widest text-primary">{data.specialist.eyebrow} · {data.specialist.credits}</p>
      <h3 className="mt-4 text-2xl font-semibold">{data.specialist.title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{data.specialist.description}</p>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">{specialistDevelopment.map(item => <div key={item.id} className="flex min-w-0 flex-col rounded-2xl border-2 border-kbc-purple-100 bg-white p-2">
        <CollegeFeatureCard marker={data.specialist.label} markerWide title={item.title} titleAs="h4">
          <p className="font-semibold text-primary">{item.lead}</p>
          <p className="mt-3">{item.description}</p>
          <p className="mt-5 font-semibold text-primary">{data.specialist.suitedLabel}</p>
          <p className="mt-2">{item.suited}</p>
        </CollegeFeatureCard>
      </div>)}</div>
    </div>
    <div className="mt-10 overflow-hidden rounded-2xl bg-primary-dark p-6 text-white sm:p-8 lg:p-10">
      <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-kbc-gold-300">{data.summaryTitle}</h3>
      <div className="mt-7 grid gap-5 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-center" aria-label="Four credits plus one credit plus one credit equals six credits">
        {data.stats.map((item, index) => <div className="contents" key={item.title}>
          {index > 0 && <span className="hidden text-2xl font-semibold text-kbc-gold-300 sm:block" aria-hidden="true">{index === data.stats.length - 1 ? '=' : '+'}</span>}
          <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 sm:grid-cols-[auto_1fr]">
            <strong className="text-4xl font-semibold leading-none text-kbc-gold-300">{item.title.split(' ')[0]}</strong>
            <span>
              <span className="block text-sm font-semibold text-white">{item.title.split(' ').slice(1).join(' ')}</span>
              <span className="mt-1 block text-xs leading-5 text-white/75">{item.description}</span>
            </span>
          </div>
        </div>)}
      </div>
      <p className="mt-7 border-t border-white/15 pt-6 text-sm leading-7 text-white/80">{data.notes[0]}</p>
    </div>
    <ProgrammeSectionFooter notes={data.notes.slice(1)} actions={data.actions} />
  </ProgrammeSection>;
}
