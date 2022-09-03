import { NextSeo } from "next-seo";
import Navbar from "@components/navbar";
import Container from "./container";

import Footer from "@components/footer";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.url}
        openGraph={{
          url: props.url,
          title: props.title,
          description: props.description,
          images: [
            {
              url: "ogimage",
              width: 800,
              height: 600,
              alt: props.title
            }
          ],
          site_name: props.title
        }}
      />
      <div className="antialiased text-gray-800 dark:bg-gray-900 dark:text-gray-400">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}
