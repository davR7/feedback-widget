import { CiCamera } from "react-icons/ci";

export const SnipButton = () => {
  return (
    <button className="border-1 mr-2 rounded-sm border-zinc-600 bg-zinc-700 px-3 py-1 hover:bg-zinc-500">
      <CiCamera size={30} />
    </button>
  );
};
