import ThemeSwitch from "@components/themeSwitch";
import Container from "./container";
import SocialMedia from "./socialMedia";
export default function Footer(props) {
  return (
    <>
      <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
        <div className="text-sm text-center">
          Copyright © {new Date().getFullYear()} GLOSSBOSS. Mit ❤️
          gemacht.
        </div>
        <SocialMedia />
        <ThemeSwitch />
      </Container>
    </>
  );
}
