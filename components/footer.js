import ThemeSwitch from "@components/themeSwitch";
import Container from "./container";
import SocialMedia from "./socialMedia";
export default function Footer(props) {
  return (
    <>
      <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
        <div className="text-sm text-center">
          Copyright © {new Date().getFullYear()} GLOSSBOSS. Mit{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-heart inline mr-1 hover:text-red-600 hover:animate-ping hover:mx-5"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
          </svg>
          gemacht.
        </div>
        <SocialMedia />
        <ThemeSwitch />
      </Container>
    </>
  );
}
