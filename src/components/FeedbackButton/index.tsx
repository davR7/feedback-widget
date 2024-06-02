import { AiOutlineMessage } from "react-icons/ai";

export const FeedbackButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className="group mt-2 flex items-center rounded-full bg-blue-500 p-3" onClick={onClick}>
      <AiOutlineMessage size={30} />
      <p className="max-w-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:block group-hover:max-w-xs group-hover:pl-1">
        Feedback
      </p>
    </button>
  );
};
