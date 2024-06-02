import { SiVerizon } from "react-icons/si";

export const FeedbackSuccess = () => {
  return (
    <div className="relative flex flex-col items-center justify-center px-6 py-3">
      <div className="relative my-2 h-[80px] w-[80px] rounded-full border-4 border-green-400">
        <SiVerizon size={40} className="absolute right-4 top-4 text-green-400" />
      </div>
      <p className="text-ms m-2">Feedback Enviado.</p>
      <h3 className="text-xl">Obrigado por nos informar!</h3>
    </div>
  );
};
