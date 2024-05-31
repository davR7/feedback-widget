import Image from "next/image"

export const FeedbackMain = () => {
  return (
    <div className="flex gap-2 py-9">
      <button className="flex w-24 flex-col items-center gap-2 rounded-lg bg-zinc-800 py-5">
        <Image src="bug.svg" width={40} height={40} alt="bug icon" />
        <h4>Problema</h4>
      </button>
      <button className="flex w-24 flex-col items-center gap-2 rounded-lg bg-zinc-800 py-5">
        <Image src="idea.svg" width={40} height={40} alt="bug icon" />
        <h4>Ideia</h4>
      </button>
      <button className="flex w-24 flex-col items-center gap-2 rounded-lg bg-zinc-800 py-5">
        <Image src="thought.svg" width={40} height={40} alt="bug icon" />
        <h4>Outro</h4>
      </button>
    </div>
  )
}
