import { FeedbackContext } from "@/context/feedback/FeedbackContext";
import { useContext } from "react";

export const useFeedback = () => {
  return useContext(FeedbackContext);
};
