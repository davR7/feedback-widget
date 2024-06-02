import { createContext } from "react";
import { DEFAULT_VALUE } from "./constants";
import { IFeedback, IFeedbackContext } from "./types";

export const defaultFeedback = {
  ...DEFAULT_VALUE,
  setFeedback: () => {},
  handleFeedback: (value: IFeedback) => {},
  resetFeedback: () => {},
  handleCallback: () => {},
};

export const FeedbackContext = createContext<IFeedbackContext>(defaultFeedback);
