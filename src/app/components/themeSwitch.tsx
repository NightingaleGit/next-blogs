"use client";

import { useState } from "react";

function ThemeSwitch() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <button
        className={`${isDark ? "bg-slate-900" : "bg-slate-300"} rounded-lg`}
        onClick={() => setIsDark((oldTheme) => !oldTheme)}
      >
        Theme
      </button>
    </>
  );
}

export default ThemeSwitch;
