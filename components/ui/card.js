import Link from "next/link";
import {
  generateDefaultThumb,
  generateSlug,
  getAuthorImage,
  getThumbnail
} from "@utils/posts";
import { cx } from "@utils/all";
import Image from "next/image";
import { CategoryLabel } from "@components/ui/categoryLabel";
import { format, parseISO } from "date-fns";
import { glossbosse } from "@lib/config";

export default function Card({ data, aspect }) {
  const isExternal =
    typeof data?.externerLink === "string" &&
    data.externerLink?.length > 1;
  return (
    <div className="cursor-pointer group" key={data.slug}>
      <div
        className={cx(
          "relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-600  hover:scale-105",
          aspect === "landscape" ? "aspect-video" : "aspect-[4/3]"
        )}>
        <Link
          href={
            isExternal
              ? data.externerLink
              : generateSlug(data?.category, data?.slug)
          }>
          <a target={isExternal ? "_blank" : "_self"}>
            <Image
              layout="fill"
              objectFit="cover"
              className="transition-all"
              alt={data.title}
              priority={true}
              src={
                data.postImage
                  ? data.postImage.replace(
                      "amazonaws.com",
                      "amazonaws.com/thumbnails"
                    )
                  : generateDefaultThumb(data.category)
              }
            />
          </a>
        </Link>
      </div>
      <CategoryLabel>{data.category}</CategoryLabel>
      <h2 className="mt-2 text-lg font-semibold dark:text-gray-100 text-gray-700">
        <Link
          href={
            isExternal
              ? data.externerLink
              : generateSlug(data?.category, data?.slug)
          }>
          <a
            target={isExternal ? "_blank" : "_self"}
            className="bg-gradient-to-r from-purple-200 to-green-200 dark:from-purple-800 dark:to-green-800
          bg-[length:0px_7px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-300
          hover:bg-[length:100%_1px] group-hover:bg-[length:100%_7px]">
            {isExternal ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-1 inline">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            ) : (
              ""
            )}
            {data.title}
            <span className="text-sm dark:text-gray-200 text-gray-800">
              {" "}
              - {data.subTitle}
            </span>
          </a>
        </Link>
      </h2>
      <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-300">
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0 w-6 h-6">
            <Image
              src={
                glossbosse[data.author]?.image ||
                "https://glossbossuploader.s3.eu-central-1.amazonaws.com/PhlvRt4gAFWU8eoiSVBmF-/Logo-Quadrat-Round.png"
              }
              objectFit="cover"
              layout="fill"
              alt={data.author}
              sizes="30px"
              className="rounded-full"
            />
          </div>
          <span className="text-sm">{data.author}</span>
        </div>
        <span className="text-xs text-slate-500 dark:text-slate-300">
          &bull;
        </span>
        <time className="text-sm" dateTime={data.date}>
          {format(parseISO(data.date), "dd.MM.yyyy")}
        </time>
      </div>
    </div>
  );
}
