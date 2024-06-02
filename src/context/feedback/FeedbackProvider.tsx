import { FeedbackContext, defaultFeedback } from "./FeedbackContext";
import { ICallback, IFeedback, IFeedbackContext } from "./types";
import { useState } from "react";

export const FeedbackProvider = ({ children }: { children: React.ReactNode }) => {
  const [feedback, setFeedback] = useState<IFeedbackContext["feedback"]>(defaultFeedback.feedback);
  const [callback, setCallback] = useState<ICallback>(null);

  const handleFeedback = (value: IFeedback) => {
    setFeedback(value);
  };

  const resetFeedback = () => {
    setFeedback(defaultFeedback.feedback);
  };

  const handleCallback = () => {
    setCallback(feedback.callback);
  };

  return (
    <FeedbackContext.Provider value={{ feedback, handleFeedback, resetFeedback, callback, handleCallback }}>
      {children}
    </FeedbackContext.Provider>
  );
};
