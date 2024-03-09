import { IModelAnswer } from '../interfaces/exam/modelAnswer.interface';
import { IExam, ISubsection } from '../interfaces/exam/exam.interface';

// Helper function to calculate total marks based on the provided answers
export const calculateTotalMarks = (
  exam: IExam,
  modelAnswers: IModelAnswer[],
  answers: { subsectionId: string; answer: string }[],
): number => {
  let totalMarks = 0;

  // Loop through sections and subsections
  exam.sections.forEach((section) => {
    section.subsections.forEach((subsection: ISubsection) => {
      // Find the corresponding model answer
      const modelAnswer = modelAnswers.find(
        (answer) =>
          answer.subsectionId.toString() === subsection._id.toString(),
      );

      // Find the corresponding user answer
      const userAnswer = answers.find(
        (answer) => answer.subsectionId === subsection._id.toString(),
      );

      if (
        modelAnswer &&
        userAnswer &&
        userAnswer.answer === modelAnswer.answer
      ) {
        totalMarks += subsection.marks;
      }
    });
  });

  return totalMarks;
};
