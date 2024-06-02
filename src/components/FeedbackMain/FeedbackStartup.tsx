"use client";

import Image from "next/image";
import { options } from "./options";
import { useFeedback } from "@/hook/useFeedback";

export const FeedbackStartup = () => {
  const ctx = useFeedback();

  return (
    <div className="flex gap-2 py-9">
      {options.map(opt => (
        <button
          className="border-tra hover:border- hover: flex w-24 flex-col items-center gap-2 rounded-lg border-2 border-transparent bg-zinc-800 py-5 hover:border-blue-600 hover:text-blue-200"
          key={opt.id}
          onClick={() => ctx.handleFeedback(opt)}
        >
          <Image src={opt.image.source} width={40} height={40} alt={opt.image.alt} />
          <h4>{opt.title}</h4>
        </button>
      ))}
    </div>
  );
};
