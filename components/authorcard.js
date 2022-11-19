import { glossbosse } from "@lib/config";
import Link from "next/link";
import Image from "next/image";

export default function AuthorCard({ author }) {
  return (
    <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
      <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
        <div className="relative flex-shrink-0 w-24 h-24 mt-1 ">
          <Image
            src={glossbosse[author].image}
            alt={author}
            className="rounded-full"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover"
            }}
          />
        </div>
        <div>
          <div className="mb-3">
            <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              Über {glossbosse[author].displayName}
            </h4>
          </div>
          <div>{glossbosse[author].bio}</div>
          <div className="mt-3 text-sm text-blue-600 rounded-full dark:text-blue-400 hover:translate-x-1 transition-all">
            <Link href={glossbosse[author].slug} className="">
              Mehr Beiträge von {glossbosse[author].displayName} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
