/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Twitter, Instagram, Facebook } from "./Icons/Social";

import useData from "./hooks/useData";
import { useTranslation } from "react-i18next";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { navigation, social } = useData();
  const { t } = useTranslation();

  return (
    <div id="top">
      <Disclosure
        as="nav"
        className={`lg:dark:backdrop-blur-lg lg:dark:bg-black/10 bg-black z-10 w-full ${
          navigation.fixed ? "fixed" : ""
        }`}
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-10 p-1">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-16 w-auto mx-auto ml-12"
                      src={navigation.logoMobile}
                      alt="LevelBoxGames"
                    />
                    <img
                      className="hidden lg:block h-16 w-auto"
                      src={navigation.logoComputer}
                      alt="LevelBoxGames"
                    />
                  </div>
                  <div className="hidden sm:block sm:ml-8">
                    <div className="flex mt-3 space-x-3">
                      {navigation.links.map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-white hover:text-gray-300 ",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {t(item.name)}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="inset-y-0 right-0 flex items-center pr-2 hidden lg:flex sm:pr-0">
                  <div className="flex space-x-5 text-gray-400 dark:text-gray-500">
                    <a href={social.twitter} target="_blank" rel="noopener">
                      <span className="sr-only">Twitter</span>
                      <Twitter />
                    </a>
                    <a href={social.facebook} target="_blank" rel="noopener">
                      <span className="sr-only">Facebook</span>
                      <Facebook />
                    </a>
                    <a href={social.instagram} target="_blank" rel="noopener">
                      <span className="sr-only">Instagram</span>
                      <Instagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden backdrop-blur absolute z-10 h-screen w-screen">
              <div className="flex flex-col justify-between">
                <div className="px-2 pt-2 pb-3 space-y-1 text-right">
                  {navigation.links.map((item, i) => (
                    <Disclosure.Button
                      key={item.i}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-white hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {t(item.name)}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="text-right mt-40"></div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="w-10 bg-black"></div>
    </div>
  );
}
