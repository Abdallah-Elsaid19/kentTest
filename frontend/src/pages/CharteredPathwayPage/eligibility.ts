import { checkerData } from './data';

export type EligibilityAnswers = Record<string, string>;

// Mirrors the official indicative checker, not a funding approval decision.
export function meetsInitialIndicators(answers: EligibilityAnswers) {
  return checkerData.steps.every(step => step.questions.every(question =>
    question.id === 'weeklyHours'
      ? ['16-29', '30+'].includes(answers[question.id])
      : answers[question.id] === 'yes'));
}
