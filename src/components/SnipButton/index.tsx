"use client";

import { CiCamera } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { Loading } from "../Loading";
import { useState } from "react";
import html2canvas from "html2canvas";

type ScreenshortProps = string | null;

interface ISnipButton {
  screenshot: ScreenshortProps;
  onScreenshot: (value: ScreenshortProps) => void;
}

export const SnipButton = ({ screenshot, onScreenshot }: ISnipButton) => {
  const [isScreenshot, setIsScreenshot] = useState(false);

  const handleIsScreenshot = async () => {
    setIsScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const baseImage64 = canvas.toDataURL("image/png");
    onScreenshot(baseImage64);
    setIsScreenshot(false);
  };

  if (screenshot) {
    return (
      <button
        type="button"
        className="mr-1 flex h-10 w-10 items-end justify-end rounded-md border-transparent p-1 text-zinc-400 transition-colors hover:text-zinc-100"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: 180,
        }}
        onClick={() => onScreenshot(null)}
      >
        <CiTrash />
      </button>
    );
  }

  return (
    <button
      onClick={handleIsScreenshot}
      type="button"
      className="border-1 relative mr-1 rounded-sm border-zinc-600 bg-zinc-700 p-2 hover:bg-zinc-500"
    >
      {isScreenshot ? <Loading /> : <CiCamera size={24} />}
    </button>
  );
};
