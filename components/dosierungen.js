import { Disclosure, Transition } from "@headlessui/react";
import { useState } from "react";
import Container from "./container";
import Markdown from "react-markdown";
import Link from "next/link";
import { SearchIcon } from "./icons";

export default function Dosierungen({ produkte = [] }) {
  const [searchInput, setSearchInput] = useState("");
  return (
    <Container>
      <div className="w-full pt-6">
        <div className="mx-auto w-full max-w-2xl mb-8  border-b pb-6">
          <label
            className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2 dark:text-gray-300"
            htmlFor="in1">
            Produkt suchen <SearchIcon />
          </label>
          <input
            className="appearance-none block md:w-1/2 w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-500"
            id="in1"
            type="search"
            placeholder="suche"
            value={searchInput}
            onChange={e => {
              setSearchInput(e.target.value);
            }}></input>
        </div>
        <div className="mx-auto w-full max-w-2xl rounded-2xl grid gap-5">
          {produkte.map((produkt, i) => {
            return (
              <Disclosure
                as="div"
                key={i}
                className={`${
                  String(produkt.fields.title.toLowerCase()).includes(
                    searchInput.toLowerCase()
                  )
                    ? ""
                    : "hidden"
                }`}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="dark:bg-gray-700 dark:text-gray-100 flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                      <span>{produkt.fields.title}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-blue-500`}>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700 dark:text-gray-100 prose prose-base prose-stone dark:prose-invert prose-a:text-blue-500">
                      <Markdown>{produkt.fields.body}</Markdown>
                      {produkt.fields.shoplink && (
                        <Link href={produkt.fields.shoplink}>
                          <a target="_blank">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1}
                              stroke="currentColor"
                              className="w-4 h-4 inline mr-1">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                              />
                            </svg>
                            {produkt.fields.title} im GLOSSBOSS-Shop
                            kaufen
                          </a>
                        </Link>
                      )}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
