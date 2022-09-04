// import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="inline-flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 mr-3">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>

      <select
        name="themeSwitch"
        className="px-1 py-1 rounded"
        value={theme}
        onChange={e => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dunkel</option>
        <option value="light">Hell</option>
      </select>
    </div>
  );
};

export default ThemeSwitch;
