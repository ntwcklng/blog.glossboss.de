import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
import Container from "./container";
import { ExternalLink } from "./icons";

export default function Navbar(props) {
  const leftmenu = [
    { label: "Startseite", href: "/" },
    { label: "Über uns", href: "/about-us" },
    { label: "Mischungsrechner", href: "/mischungsrechner" }
  ];
  const rightmenu = [
    {
      label: "Dosierungen",
      href: "/dosierungen"
    },
    {
      label: "Shop ",
      href: "https://glossboss.de?ref=gb.de",
      external: true
    },
    { label: "Impressum", href: "/impressum" }
  ];
  const mobilemenu = [...leftmenu, ...rightmenu];
  return (
    <Container>
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap">
                <div className="flex-col items-center justify-start order-1 hidden w-full lg:flex lg:flex-row lg:justify-end lg:w-auto lg:order-none lg:flex-1 whitespace-nowrap">
                  {leftmenu.map((item, index) => (
                    <Link
                      href={item.href}
                      key={index}
                      className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 "
                      target={item.external ? "_blank" : ""}
                      rel={item.external ? "noopener" : ""}>
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="flex justify-between items-center w-full lg:w-auto">
                  <Link href="/">
                    {" "}
                    <img
                      src="/5-3d-250px.png"
                      alt="Logo"
                      className="cursor-pointer w-36"
                    />
                  </Link>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden focus:text-blue-500 focus:outline-none dark:text-gray-300 ">
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>
                <div className="flex-col items-center justify-start order-2 hidden w-full lg:flex lg:flex-row lg:w-auto lg:flex-1 lg:order-none">
                  {rightmenu.map((item, index) => (
                    <Link
                      href={item.href}
                      key={index}
                      className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 whitespace-nowrap"
                      target={item.external ? "_blank" : ""}
                      rel={item.external ? "noopener" : ""}>
                      {item.label}{" "}
                      {item.external ? (
                        <ExternalLink className="w-4 h-4 inline" />
                      ) : (
                        ""
                      )}
                    </Link>
                  ))}
                </div>
              </div>
              <Transition
                enter="transition duration-200 ease-out"
                enterFrom="transform scale-99 opacity-0 "
                enterTo="transform scale-100 opacity-100 "
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100 "
                leaveTo="transform scale-99 opacity-0 ">
                <Disclosure.Panel>
                  <div className="flex flex-col items-center justify-start order-2 w-full lg:hidden border-b border-gray-100 dark:border-gray-600 pb-8">
                    {mobilemenu.map((item, index) => (
                      <Link
                        href={item.href}
                        key={index}
                        className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
                        target={item.external ? "_blank" : ""}
                        rel={item.external ? "noopener" : ""}>
                        {item.label}{" "}
                        {item.external ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-3 h-3 inline">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                          </svg>
                        ) : (
                          ""
                        )}
                      </Link>
                    ))}
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  );
}
