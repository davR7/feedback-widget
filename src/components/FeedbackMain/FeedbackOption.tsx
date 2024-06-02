import { useFeedback } from "@/hook/useFeedback";
import { FeedbackStartup } from "./FeedbackStartup";
import { FeedbackForm } from "./FeedbackForm";
import { FeedbackSuccess } from "./FeedbackSuccess";

export const FeedbackOption = () => {
  const ctx = useFeedback();

  switch (ctx.callback || ctx.feedback.type) {
    case "BUG":
      return <FeedbackForm text={ctx.feedback.text} />;
    case "IDEA":
      return <FeedbackForm text={ctx.feedback.text} />;
    case "OTHER":
      return <FeedbackForm text={ctx.feedback.text} />;
    case "SUCCESS":
      return <FeedbackSuccess />;
    default:
      return <FeedbackStartup />;
  }
};
