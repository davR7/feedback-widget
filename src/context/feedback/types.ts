export type IFeedback = {
  id: number | null;
  title: string;
  text: string;
  type: string;
  image: {
    source: string;
    alt: string;
  };
  callback: string;
};

export type ICallback = string | null;

export interface IFeedbackContext {
  feedback: IFeedback;
  callback: ICallback;
  setFeedback?: React.Dispatch<React.SetStateAction<IFeedback>>;
  handleFeedback: (value: IFeedback) => void;
  resetFeedback: () => void;
  handleCallback: () => void;
}
