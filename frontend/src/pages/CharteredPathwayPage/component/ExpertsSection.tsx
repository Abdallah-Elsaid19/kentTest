import { useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, ChevronDown, UserRoundCheck, Video } from 'lucide-react';
import { section, shell } from '@/components/college/layout';
import { CollegeFeatureCard } from '@/components/college/CollegeFeatureCard';
import { ProgrammeSectionFooter } from '@/components/programme/ProgrammeCopy';
import { FigmaSectionHeading } from '@/components/ui/FigmaSectionHeading';
import { expertData } from '../data';

const supportIcons = [Video, UserRoundCheck, BriefcaseBusiness];

export function ExpertsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExpert = expertData.people[activeIndex];

  return <section id={expertData.id} aria-labelledby={`${expertData.id}-title`} className={`${section} bg-white sm:!scroll-mt-64`}>
    <div className={shell}>
      <div className="mx-auto max-w-4xl text-center">
        <FigmaSectionHeading
          id={`${expertData.id}-title`}
          eyebrow={expertData.eyebrow}
          title={expertData.title}
          description={expertData.description}
          align="center"
        />
        <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-[var(--color-muted)]">{expertData.introduction}</p>
      </div>

      <div id="pathway-experts" className="mt-12 scroll-mt-64">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">{expertData.profilesEyebrow}</p>
        <h3 className="mt-3 text-2xl font-semibold text-primary-dark">{expertData.profilesTitle}</h3>
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <figure className="relative isolate overflow-hidden rounded-[2rem] rounded-br-[4rem] bg-primary-dark shadow-[0_20px_60px_rgba(64,27,140,0.14)] lg:order-2">
            <img src={activeExpert.image} alt={activeExpert.name} loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover object-top" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-kbc-gold-300">{activeExpert.tags[1]}</p>
              <p className="mt-3 text-3xl font-semibold text-white">{activeExpert.name}</p>
            </figcaption>
          </figure>

          <div className="min-w-0 lg:order-1">
            <ul aria-label="Choose a pathway expert" className="border-b border-kbc-purple-100">
              {expertData.people.map((person, index) => {
                const selected = activeIndex === index;
                return <li key={person.name}>
                  <button type="button" aria-pressed={selected} aria-controls="pathway-expert-details" onClick={() => setActiveIndex(index)} className={`group grid w-full grid-cols-[44px_minmax(0,1fr)] gap-4 border-l-[3px] border-t border-t-kbc-purple-100 px-4 py-6 text-left transition-colors focus-visible:relative focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-5 sm:px-6 sm:py-7 ${selected ? 'border-l-primary bg-kbc-purple-50' : 'border-l-transparent hover:bg-kbc-purple-50/60'}`}>
                    <span className={`grid size-11 place-items-center rounded-full border text-xs font-bold sm:size-12 ${selected ? 'border-primary bg-primary text-kbc-gold-300' : 'border-kbc-purple-200 text-primary'}`}>{person.name.split(' ').map(part => part[0]).join('')}</span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase leading-5 tracking-[0.12em] text-primary sm:text-xs">{person.tags[0]}</span>
                      <span className="mt-2 flex items-center justify-between gap-3 text-xl font-semibold text-primary-dark">{person.name}<ArrowUpRight className={`size-5 shrink-0 text-primary ${selected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} aria-hidden="true" /></span>
                      <span className="mt-3 block text-sm leading-7 text-[var(--color-muted)]">{person.short}</span>
                    </span>
                  </button>
                </li>;
              })}
            </ul>

            <div id="pathway-expert-details" className="mt-6 rounded-2xl bg-primary-dark text-white">
              {expertData.people.map((person, index) => <div key={person.name} hidden={activeIndex !== index}>
                <details className="group p-5 sm:p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded text-sm font-semibold text-kbc-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kbc-gold-300 [&::-webkit-details-marker]:hidden">
                    About {person.name}<ChevronDown className="size-5 shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
                  </summary>
                  <p className="mt-5 text-sm leading-7 text-white/90">{person.bio}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">{person.tags.slice(1).map(tag => <li key={tag} className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs leading-5 text-white/90">{tag}</li>)}</ul>
                </details>
              </div>)}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-kbc-purple-100 pt-10 sm:mt-16">
        <h3 className="border-l-[3px] border-kbc-gold-500 pl-3 text-2xl font-semibold text-primary-dark">{expertData.supportTitle}</h3>
        <div className="mt-8 grid gap-x-8 md:grid-cols-3">
          {expertData.support.map((item, index) => {
            const Icon = supportIcons[index];
            return <CollegeFeatureCard key={item.title} marker={<Icon className="size-5" aria-hidden="true" />} title={item.title} titleAs="h4">
              <p>{item.description}</p>
            </CollegeFeatureCard>;
          })}
        </div>
        <div className="mt-8 rounded-2xl bg-primary-dark p-6 text-white sm:p-8 [&>div]:mt-0">
          <ProgrammeSectionFooter notes={expertData.notes} actions={expertData.actions} inverse />
        </div>
      </div>
    </div>
  </section>;
}
