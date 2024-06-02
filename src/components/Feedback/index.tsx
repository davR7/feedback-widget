"use client";

import { FeedbackHeader } from "../FeedbackHeader";
import { FeedbackMain } from "../FeedbackMain";
import { FeedbackFooter } from "../FeedbackFooter";
import { FeedbackButton } from "../FeedbackButton";
import { FeedbackProvider } from "@/context/feedback/FeedbackProvider";
import { useState } from "react";
import { FeedbackSuccess } from "../FeedbackMain/FeedbackSuccess";

export const Feedback = () => {
  const [feedbackOn, setFeedbackOn] = useState(false);

  return (
    <div className="absolute bottom-4 right-4 flex flex-col items-end">
      {feedbackOn && (
        <div className="mb-4 rounded-lg bg-zinc-900 p-4">
          <FeedbackProvider>
            <FeedbackHeader onClick={() => setFeedbackOn(prev => !prev)} />
            <FeedbackMain />
            <FeedbackFooter />
          </FeedbackProvider>
        </div>
      )}
      <FeedbackButton onClick={() => setFeedbackOn(prev => !prev)} />
    </div>
  );
};
