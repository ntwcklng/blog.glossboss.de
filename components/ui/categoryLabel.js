import { cx } from "@utils/all";
export function CategoryLabel(props) {
  const color = {
    Allgemein: "text-emerald-700",
    News: "text-blue-600",
    Pflegeberichte: "text-orange-700",
    Podcast: "text-purple-600",
    Anleitungen: "text-pink-600",
    Videos: "text-green-600",
    Produkttest: "text-pink-600"
  };
  const colorBg = {
    Allgemein: "bg-emerald-300",
    News: "bg-blue-200",
    Pflegeberichte: "bg-orange-200",
    Podcast: "bg-purple-200",
    Anleitungen: "bg-pink-300",
    Videos: "bg-green-200",
    Produkttest: "bg-pink-200"
  };
  if (props.plain) {
    return (
      <span
        className={cx(
          "inline-block text-xs font-medium tracking-wider uppercase ",
          `hover:${color[props.children] || color.News}`,

          props.className
        )}>
        {props.children}
      </span>
    );
  }
  if (props.large) {
    return (
      <h1
        className={cx(
          "mt-2 mb-3 text-3xl font-semibold text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white tracking-wider uppercase",
          color[props.children] || color.News
        )}>
        {props.children}
      </h1>
    );
  } else {
    return (
      <span
        className={cx(
          "inline-block text-xs font-medium tracking-wider uppercase ",
          color[props.children] || color.News,
          props.className
        )}>
        {props.children}
      </span>
    );
  }
}
