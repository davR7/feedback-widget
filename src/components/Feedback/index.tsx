import { FeedbackHeader } from "../FeedbackHeader"
import { FeedbackMain } from "../FeedbackMain"
import { FeedbackFooter } from "../FeedbackFooter"
import { FeedbackButton } from "../FeedbackButton"

export const Feedback = () => {
  return (
    <div className="absolute bottom-4 right-4 flex flex-col items-end">
      <div className="mb-4 rounded-lg bg-zinc-900 p-4">
        <FeedbackHeader />
        <FeedbackMain />
        <FeedbackFooter />
      </div>
      <FeedbackButton />
    </div>
  )
}
