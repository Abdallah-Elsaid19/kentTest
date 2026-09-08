import { useRef, useState, type FormEvent } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { NavigationButton } from '@/components/navigation';
import { checkerData, eligibilityData } from '../data';
import { meetsInitialIndicators, type EligibilityAnswers } from '../eligibility';

export function EligibilityChecker() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<EligibilityAnswers>({});
  const heading = useRef<HTMLHeadingElement>(null);
  const complete = step === checkerData.steps.length;
  const current = checkerData.steps[step];
  const ready = complete || current.questions.every(question => Boolean(answers[question.id]));
  const result = meetsInitialIndicators(answers) ? checkerData.positive : checkerData.alternative;
  const changeStep = (next: number) => {
    setStep(next);
    requestAnimationFrame(() => heading.current?.focus());
  };
  const next = (event: FormEvent) => {
    event.preventDefault();
    if (ready && !complete) changeStep(step + 1);
  };

  return <div id="kbc-eligibility-form" className="mt-10 scroll-mt-24 rounded-2xl border border-kbc-purple-200 bg-white p-5 sm:scroll-mt-64 sm:p-8 lg:p-10">
    <h3 className="text-2xl font-semibold tracking-tight">{eligibilityData.checkerTitle}</h3>
    <p className="mt-4 flex items-start gap-3 rounded-xl bg-kbc-purple-50 p-4 text-sm leading-7 text-primary-dark"><ShieldCheck aria-hidden="true" className="mt-1 size-5 shrink-0" />{eligibilityData.note}</p>
    <ol aria-label={checkerData.progressLabel} className="my-7 grid grid-cols-4 gap-2">
      {[...checkerData.steps, checkerData.resultStep].map((item, index) => <li key={item.title} aria-current={step === index ? 'step' : undefined} className={`border-t-4 pt-3 text-xs leading-5 ${index <= step ? 'border-primary text-primary' : 'border-kbc-purple-100 text-[var(--color-muted)]'}`}><span className="font-semibold">{index + 1}</span><span className="ml-2 hidden sm:inline">{item.title}</span></li>)}
    </ol>
    <p className="text-xs font-semibold text-primary">{checkerData.stepLabel} {step + 1} {checkerData.ofLabel} 4</p>
    <h4 ref={heading} tabIndex={-1} className="mt-3 text-xl font-semibold focus-visible:rounded focus-visible:outline-primary">{complete ? checkerData.resultStep.title : current.title}</h4>
    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{complete ? checkerData.resultStep.description : current.description}</p>
    <form onSubmit={next} className="mt-7">
      {!complete ? <div className="space-y-7">{current.questions.map(question => <fieldset key={question.id}>
        <legend className="mb-3 text-sm font-semibold leading-6">{question.label}</legend>
        <div className="flex flex-wrap gap-3">{question.options.map(option => <label key={option.value} className="relative cursor-pointer">
          <input className="peer sr-only" type="radio" name={question.id} value={option.value} checked={answers[question.id] === option.value} onChange={() => setAnswers(previous => ({...previous, [question.id]:option.value}))} required />
          <span className="flex min-h-12 min-w-20 items-center justify-center rounded-xl border border-kbc-purple-200 px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-kbc-purple-50 peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2">{option.label}</span>
        </label>)}</div>
      </fieldset>)}</div> : <div className="rounded-2xl border border-kbc-purple-100 bg-kbc-purple-50 p-5 sm:p-7" role="status">
        <p className="text-xl font-semibold leading-8 text-primary-dark">{result.title}</p>
        <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{result.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">{result.actions.map((action, index) => <NavigationButton key={action.to} to={action.to} variant={index === 0 ? 'primary' : 'secondary'} className="w-full !whitespace-normal text-center sm:w-auto">{action.label}</NavigationButton>)}</div>
      </div>}
      <div className="mt-8 flex flex-wrap gap-3">
        {step > 0 && <button type="button" onClick={() => changeStep(step - 1)} className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-kbc-purple-200 px-5 py-3 text-sm font-semibold text-primary focus-visible:outline-primary"><ArrowLeft aria-hidden="true" className="size-4" />{checkerData.backLabel}</button>}
        {!complete && <button type="submit" disabled={!ready} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark focus-visible:outline-primary focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-40">{checkerData.continueLabel}<ArrowRight aria-hidden="true" className="size-4" /></button>}
      </div>
    </form>
  </div>;
}
