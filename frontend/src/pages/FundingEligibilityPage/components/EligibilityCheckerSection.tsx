import { useState } from "react";
import { BadgeCheck, ChevronLeft, Compass, RotateCcw } from "lucide-react";

import { checkerQuestions } from "../data";
import { actionsClass, ArrowLink, eyebrowClass, narrowContainerClass, softSectionClass, SectionIntro } from "./shared";

function getCheckerResult(answers: string[]) {
  if (answers[0] === "No") {
    return ["DfE funding requires paid employment", "A commercial professional-development route may be more suitable for your current circumstances."];
  }
  if (answers[1] === "No") {
    return ["UK residency is a core requirement", "The IPC-supported Project Controls commercial route may provide another option for specialist development."];
  }
  if (answers[2] === "Self-employed") {
    return ["Explore a commercial development route", "Self-employed professionals are not eligible for DfE-funded apprenticeships, but specialist commercial development may be available."];
  }
  if (answers[5] === "Yes") {
    return ["Your current training may affect eligibility", "Speak to KBC about your circumstances and the best timing for a funded programme."];
  }
  return ["A funded route may be worth exploring", "Your answers indicate that a government-funded programme could be relevant. KBC will confirm eligibility through its formal assessment."];
}

export function EligibilityCheckerSection() {
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [checkerComplete, setCheckerComplete] = useState(false);
  const checkerResult = getCheckerResult(answers);

  const chooseAnswer = (answer: string) => {
    const next = [...answers];
    next[question] = answer;
    setAnswers(next);
    if (question === checkerQuestions.length - 1) setCheckerComplete(true);
    else setQuestion((value) => value + 1);
  };

  const resetChecker = () => {
    setQuestion(0);
    setAnswers([]);
    setCheckerComplete(false);
  };

  return (
    <section className={softSectionClass} id="eligibility-checker">
      <div className={narrowContainerClass}>
        <SectionIntro eyebrow="Check your route" title="A few questions can help identify your next step" copy="Use this short check to understand whether a government-funded programme may be worth exploring." align="center" />
        <div className="rounded-[38px_11px] border border-[#e8e0ef] bg-white p-[clamp(28px,5vw,52px)] shadow-[0_28px_80px_rgba(47,20,104,.08)]">
          {!checkerComplete ? (
            <>
              <div className="flex items-center gap-[7px]">{checkerQuestions.map((_, index) => <span key={index} className={`h-[5px] flex-1 rounded-full ${index <= question ? "bg-[#401b8c]" : "bg-[#e9e2ef]"}`} />)}<b className="ml-3 whitespace-nowrap text-[11px] text-[#766d7c]">{question + 1} / {checkerQuestions.length}</b></div>
              <div className="mt-11 flex items-center gap-[21px] max-[500px]:flex-col max-[500px]:items-start"><Compass className="h-[54px] w-[54px] rounded-[20px_7px] bg-[#f1eaf6] p-[14px] text-[#401b8c]" /><h3 className="text-[clamp(22px,3vw,33px)] leading-[1.2]">{checkerQuestions[question].text}</h3></div>
              <div className="mt-8 flex flex-wrap gap-[11px]">{checkerQuestions[question].answers.map((answer) => <button className="min-h-12 cursor-pointer rounded-lg border border-[#ded3e8] bg-[#f7f4fa] px-5 py-3 text-[13px] font-semibold text-[#401b8c] hover:border-[#401b8c] hover:bg-[#401b8c] hover:text-white max-[500px]:w-full" key={answer} onClick={() => chooseAnswer(answer)} type="button">{answer}</button>)}</div>
              <div className="mt-9 flex items-center justify-between border-t border-[#e8e0ef] pt-6"><button className="flex min-h-11 cursor-pointer items-center gap-[7px] border-0 bg-transparent text-[13px] font-semibold text-[#766d7c] disabled:cursor-default disabled:opacity-30" disabled={question === 0} onClick={() => setQuestion((value) => value - 1)} type="button"><ChevronLeft /> Back</button><span className="text-[11px] text-[#a298a8] max-[500px]:hidden">{checkerQuestions.length - question - 1} questions remaining</span></div>
            </>
          ) : (
            <div><BadgeCheck className="h-[54px] w-[54px] rounded-[20px_7px] bg-[#f1eaf6] p-[14px] text-[#401b8c]" /><p className={`${eyebrowClass} mt-[25px]`}>Your guidance</p><h3 className="mt-[11px] text-[clamp(27px,4vw,42px)]">{checkerResult[0]}</h3><p className="mt-[15px] leading-[1.7] text-[#766d7c]">{checkerResult[1]}</p><div className={`${actionsClass} mt-7`}><ArrowLink href="/book-session">Book an information session</ArrowLink><button className="flex min-h-11 cursor-pointer items-center gap-[7px] border-0 bg-transparent text-[13px] font-semibold text-[#766d7c]" onClick={resetChecker} type="button"><RotateCcw /> Start again</button></div></div>
          )}
        </div>
        <p className="mt-5 text-center text-[11px] leading-[1.6] text-[#938a99]">This checker provides initial guidance only. Eligibility and funding are confirmed through KBC’s formal assessment and the applicable funding rules.</p>
      </div>
    </section>
  );
}
