import React from "react";
import { useSelector } from "react-redux";
import type { ThemeType } from "../types/ThemeType";

const DisplayTheme = () => {
  const state = useSelector((state: ThemeType) => state.darkMode);
  return (
    <div
      className={`${state ? "bg-gray-800 text-white" : "bg-white text-black"} w-1/2 py-30 text-xl font-bold my-10`}
    >
      <p>
        現在のテーマ: <span>{state ? "ダーク" : "ライト"}</span>
      </p>
    </div>
  );
};

export default DisplayTheme;
