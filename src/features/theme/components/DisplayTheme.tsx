import React from "react";
import { useSelector } from "react-redux";
import type { ThemeType } from "../types/ThemeType";

const DisplayTheme = () => {
  const state = useSelector((state: ThemeType) => state.darkMode);
  return (
    <div>
      <p>
        現在のテーマ: <span>{state ? "ダーク" : "ライト"}</span>
      </p>
    </div>
  );
};

export default DisplayTheme;
