import Link from "next/link";
import {
  CarIcon,
  InstagramIcon,
  ShopIcon,
  SpotifyIcon,
  YoutubeIcon
} from "./icons";

export default function SocialMedia() {
  return (
    <div className="mx-auto flex flex-nowrap mt-8 mb-16 justify-center sm:justify-around max-w-2xl text-sm gap-5">
      <Link href="https://nass-und-schaumig.podigee.io/" target="_blank">

        <span className="hover:text-[#1DB954]">
          <SpotifyIcon />
          <span className="md:inline hidden">
            Nass und Schaumig
          </span>
        </span>

      </Link>

      <Link
        href="https://www.youtube.com/channel/UC_sfQw90zUtZpBIO0JCyClw"
        target="_blank">

        <span className="hover:text-[#ff0000]">
          <YoutubeIcon />
          <span className="md:inline hidden">Youtube</span>
        </span>

      </Link>

      <Link href="https://instagram.com/glossboss.de" target="_blank">

        <span className="hover:text-[#833AB4]">
          <InstagramIcon />
          <span className="md:inline hidden">@glossboss.de</span>
        </span>

      </Link>

      <Link href="https://glossboss-shop.de" target="_blank">

        <span className="hover:text-sky-600">
          <ShopIcon />
          <span className="md:inline hidden">Shop</span>
        </span>

      </Link>

      <Link href="https://detailing.glossboss.de" target="_blank">

        <span className="hover:text-purple-600">
          <CarIcon />
          <span className="md:inline hidden">Detailing</span>
        </span>

      </Link>
    </div>
  );
}
