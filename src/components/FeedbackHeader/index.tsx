import { useFeedback } from "@/hook/useFeedback";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import Image from "next/image";

export const FeedbackHeader = ({ onClick }: { onClick: () => void }) => {
  const ctx = useFeedback();

  return (
    <header className="relative">
      {!ctx.callback && ctx.feedback.title && (
        <button className="absolute left-0 top-2 text-slate-400 hover:text-white" onClick={ctx.resetFeedback}>
          <FaArrowLeft size={15} />
        </button>
      )}
      <div className="flex items-center justify-center">
        {ctx.feedback.title && (
          <Image src={ctx.feedback.image.source} width={25} height={25} alt={ctx.feedback.image.alt} />
        )}
        <h3 className="ml-2 text-lg">{ctx.feedback.title ? ctx.feedback.title : "Deixe seu Feedback"}</h3>
      </div>
      <button className="absolute right-0 top-1 text-lg text-slate-400 hover:text-white" onClick={onClick}>
        <IoMdClose size={20} />
      </button>
    </header>
  );
};
