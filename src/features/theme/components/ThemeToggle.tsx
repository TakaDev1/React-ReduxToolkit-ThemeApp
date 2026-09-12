import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { ThemeType } from "../types/ThemeType";
import { toggleTheme } from "../slices/ThemeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();

  const darkmode = useSelector((state: ThemeType) => state.darkMode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <div>
      <button onClick={handleToggle}>テーマ切り替え</button>
    </div>
  );
};

export default ThemeToggle;
