import { NextSeo } from "next-seo";
import Layout from "@components/layout";
import Container from "@components/container";
import { useState, useEffect } from "react";
import dilution from "dilution";
import { Disclosure } from "@headlessui/react";
import { Button } from "@components/ui/button";
import { siteUrl } from "@lib/config";

export default function Mischungsrechner() {
  const [in1, setIn1] = useState(1);
  const [in2, setIn2] = useState(4);
  const [inBottle, setBottle] = useState(1);
  const [dil, setDil] = useState({});
  const bottleValues = [
    100,
    200,
    250,
    473,
    500,
    750,
    1000,
    13000,
    20000
  ];
  const bottleValuesLabel = [
    100,
    200,
    250,
    473,
    500,
    750,
    "1l",
    "13l",
    "20l"
  ];
  useEffect(() => {
    setDil(
      dilution(
        Number(in1 || 1),
        Number(in2 || 4),
        Number(bottleValues[inBottle] || 500)
      )
    );
  }, [in1, in2, inBottle]);
  return (
    <Layout
      url={`${siteUrl}/mischungsrechner`}
      title="GLOSSBOSS Mischungsrechner"
      description="Berechne Das Mischungsverhältnis von konzentrierten Produkten">
      <Container>
        <h1 className="mt-2 mb-6 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-gray-200">
          Mischungsrechner
        </h1>
        <div className="mx-auto my-3">
          <form className="w-full mx-auto max-w-2xl">
            <div className="flex flex-nowrap flex-no -mx-3 mb-10">
              <div className="w-full sm:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2 dark:text-gray-300"
                  htmlFor="in1">
                  Verhähltnis 1
                </label>
                <input
                  className="appearance-none block w-full  border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-500"
                  id="in1"
                  type="text"
                  value={in1}
                  onChange={e => {
                    e.preventDefault();
                    setIn1(e.target.value.replace(/\D/g, ""));
                  }}></input>
              </div>

              <div className="w-full sm:w-1/2 px-3">
                {" "}
                <label
                  className="block uppercase tracking-wide text-gray/600 text-xs font-bold mb-2 dark:text-gray-300"
                  htmlFor="in2">
                  Verhähltnis 2
                </label>
                <input
                  className="appearance-none block w-full  border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-gray-700  bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-500"
                  id="in2"
                  type="text"
                  value={in2}
                  onChange={e => {
                    e.preventDefault();
                    setIn2(e.target.value.replace(/\D/g, ""));
                  }}></input>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 sm:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray/600 text-xs font-bold mb-2 dark:text-gray-300"
                  htmlFor="bottleSlider">
                  {bottleValues[inBottle] > 1000
                    ? "Eimergröße"
                    : "Flaschengröße"}
                </label>
                <span>
                  {bottleValues[inBottle] > 1000
                    ? bottleValues[inBottle] / 1000
                    : bottleValues[inBottle]}{" "}
                  {bottleValues[inBottle] > 1000 ? "Liter" : "ml"}
                </span>
                <input
                  type="range"
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  min="0"
                  max="8"
                  value={inBottle}
                  step="1"
                  id="bottleSlider"
                  onChange={e => {
                    // e.preventDefault();
                    setBottle(e.target.value);
                  }}
                />
                <div className="w-full flex justify-between text-xs px-2">
                  {bottleValues.map((val, i) => {
                    return (
                      <span key={i} className="font-mono">
                        {bottleValuesLabel[i]}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </form>
          <div className="mx-auto max-w-2xl px-8 py-8 mt-3 text-xs text-gray-700 rounded-2xl bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
            Dein Mischungsverhältnis:
            <span className="text-blue-600 block text-2xl font-semibold my-2">
              {dil.part1}ml : {dil.part2}ml
            </span>
          </div>
          <div className="w-full pt-16">
            <div className="mx-auto w-full max-w-2xl rounded-2xl">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="dark:bg-gray-700 dark:text-gray-100 flex w-full justify-between rounded-lg bg-gray-50 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 ">
                      <span>
                        Beliebte und gängige Mischungsverhältnisse
                      </span>
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
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700 dark:text-gray-100">
                      <div className="flex justify-evenly flex-shrink-0 flex-wrap md:justify-around gap-3">
                        <Button
                          onClick={() => {
                            setIn1(1);
                            setIn2(4);
                            setBottle(4);
                          }}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-gray-100 w-full md:w-1/3">
                          1:4 500ml Flasche
                        </Button>
                        <Button
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-gray-100 w-full md:w-1/3"
                          onClick={() => {
                            setIn1(1);
                            setIn2(10);
                            setBottle(4);
                          }}>
                          1:10 500ml Flasche
                        </Button>
                        <Button
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-gray-100 w-full md:w-1/3"
                          onClick={() => {
                            setIn1(1);
                            setIn2(4);
                            setBottle(6);
                          }}>
                          1:4 1 Liter Flasche
                        </Button>
                        <Button
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-gray-100 w-full md:w-1/3"
                          onClick={() => {
                            setIn1(1);
                            setIn2(6);
                            setBottle(6);
                          }}>
                          1:6 1 Liter Flasche
                        </Button>
                        <Button
                          onClick={() => {
                            setIn1(1);
                            setIn2(500);
                            setBottle(7);
                          }}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-gray-100 w-full md:w-1/3">
                          1:500 13 Liter Eimer
                        </Button>
                        <Button
                          onClick={() => {
                            setIn1(1);
                            setIn2(1500);
                            setBottle(7);
                          }}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-gray-100 w-full md:w-1/3">
                          1:1500 13 Liter Eimer
                        </Button>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="dark:bg-gray-700 dark:text-gray-100 flex w-full justify-between rounded-lg bg-gray-50 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                      <span>
                        Warum ein Mischungsverhältnisrechner?
                      </span>
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
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700 dark:text-gray-100">
                      Das richtige Mischungsverhältnis ist bei vielen
                      Produkten extrem wichtig. Ein Rechner hilft dir
                      dabei auf den ml genau zu dosieren. Und mal
                      ehrlich - wer kann schon das Verhähltnis 1:12
                      für eine 473ml (16 oz) Flasche im Kopf
                      ausrechnen während man dringend den Reiniger
                      beim aufbereiten braucht?
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
