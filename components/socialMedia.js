import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="mx-auto flex flex-nowrap mt-8 mb-16 justify-center sm:justify-around max-w-xl text-sm gap-5">
      <Link href="https://nass-und-schaumig.podigee.io/">
        <a target="_blank">
          <span className="hover:text-[#1DB954]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-spotify inline mr-1"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"></path>
              <circle cx={12} cy={12} r={9}></circle>
              <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527"></path>
              <path d="M9 15c1.5 -1 4 -1 5 .5"></path>
              <path d="M7 9c2 -1 6 -2 10 .5"></path>
            </svg>
            <span className="sm:inline hidden">
              Nass und Schaumig
            </span>
          </span>
        </a>
      </Link>

      <Link href="https://www.youtube.com/channel/UC_sfQw90zUtZpBIO0JCyClw">
        <a target="_blank">
          <span className="hover:text-[#ff0000]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-youtube inline mr-1"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"></path>
              <rect x={3} y={5} width={18} height={14} rx={4}></rect>
              <path d="M10 9l5 3l-5 3z"></path>
            </svg>
            <span className="sm:inline hidden">Youtube</span>
          </span>
        </a>
      </Link>

      <Link href="https://instagram.com/glossboss.de">
        <a target="_blank">
          <span className="hover:text-[#833AB4]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-instagram inline mr-1"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"></path>
              <rect x={4} y={4} width={16} height={16} rx={4}></rect>
              <circle cx={12} cy={12} r={3}></circle>
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
            </svg>
            <span className="sm:inline hidden">@glossboss.de</span>
          </span>
        </a>
      </Link>

      <Link href="https://glossboss-shop.de">
        <a target="_blank">
          <span className="hover:text-sky-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-shopping-cart inline mr-1"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              stroke-width={1}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"></path>
              <circle cx={6} cy={19} r={2}></circle>
              <circle cx={17} cy={19} r={2}></circle>
              <path d="M17 17h-11v-14h-2"></path>
              <path d="M6 5l14 1l-1 7h-13"></path>
            </svg>
            <span className="sm:inline hidden">Shop</span>
          </span>
        </a>
      </Link>
    </div>
  );
}
