import ThemeSwitch from "@components/themeSwitch";
import Container from "./container";
import { Heart } from "./icons";
import SocialMedia from "./socialMedia";
export default function Footer(props) {
  return (
    <>
      <Container className="mt-10 border-t border-gray-200 dark:border-gray-800">
        <div className="text-sm text-center">
          Copyright © {new Date().getFullYear()} GLOSSBOSS. Mit{" "}
          <Heart className="inline mr-1 hover:text-red-600 hover:animate-ping hover:mx-5" />
          gemacht.
        </div>
        <SocialMedia />
        <ThemeSwitch />
      </Container>
    </>
  );
}
