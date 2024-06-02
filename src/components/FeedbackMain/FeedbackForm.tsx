import { useFeedback } from "@/hook/useFeedback";
import { FormEvent, useState } from "react";
import { SnipButton } from "../SnipButton";

export const FeedbackForm = ({ text }: { text: string }) => {
  const [comment, setComment] = useState("");
  const ctx = useFeedback();

  const handlerSubmit = (e: FormEvent) => {
    e.preventDefault();
    ctx.handleCallback();
  };

  return (
    <form className="my-4 flex flex-col" onSubmit={handlerSubmit}>
      <textarea
        className="min-h-[100px] min-w-[300px] rounded-md border-[1px] border-zinc-600 bg-zinc-800 p-2"
        placeholder={text}
        onChange={e => setComment(e.target.value)}
      ></textarea>
      <div className="flex items-center justify-items-center py-2">
        <SnipButton />
        <button
          className="rounded-sm bg-blue-600 p-2 hover:bg-blue-500 disabled:opacity-40 disabled:hover:bg-blue-600"
          disabled={comment?.length === 0}
        >
          Enviar
        </button>
      </div>
    </form>
  );
};
