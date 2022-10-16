import { useTheme } from "next-themes";
import { ThemeSwitchIcon } from "./icons";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="inline-flex items-center">
      <ThemeSwitchIcon />

      <select
        name="themeSwitch"
        className="px-1 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
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
