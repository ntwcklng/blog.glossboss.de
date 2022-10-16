import { Menu, Transition } from "@headlessui/react";
import { allCategories } from "@utils/allCategories";
import { Fragment } from "react";
import { MyLink } from "@utils/myLink";
import { CategoryLabel } from "./ui/categoryLabel";
import { FilterIcon } from "./icons";

export default function CategoryFilter() {
  return (
    <Menu as="div" className=" mx-auto inline-block max-w-full">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:bg-gray-600 dark:text-gray-200">
          Kategorien <FilterIcon />
        </Menu.Button>

        <>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items className="absolute mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 dark:bg-gray-700 dark:text-gray-200 dark:divide-gray-600">
              {allCategories.map((cat, i) => {
                return (
                  <div className="px-1 py-1" key={i}>
                    <Menu.Item>
                      {({ active }) => (
                        <MyLink href={`/${cat.toLowerCase()}`}>
                          <CategoryLabel
                            plain={true}
                            className={`${
                              active
                                ? "bg-gray-50 text-gray-700 dark:bg-gray-600 dark:text-gray-100"
                                : " "
                            }group flex w-full items-center rounded-md px-2 py-2 text-md mt-0`}>
                            {cat}
                          </CategoryLabel>
                        </MyLink>
                      )}
                    </Menu.Item>
                  </div>
                );
              })}
            </Menu.Items>
          </Transition>
        </>
      </div>
    </Menu>
  );
}
