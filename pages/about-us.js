import { NextSeo } from "next-seo";
import Layout from "@components/layout";
import Container from "@components/container";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@lib/config";

const renderImages = [
  "https://glossbossuploader.s3.eu-central-1.amazonaws.com/hdn18E7_m4ivUqveowyuf-3ph/DSC01426.jpg",
  "https://glossbossuploader.s3.eu-central-1.amazonaws.com/oeSVKWiJmMBrBwOnopxXE-/Unbenannt-1.jpg",
  "https://glossbossuploader.s3.eu-central-1.amazonaws.com/fR7bgaH6waSwTcreqBOuc-/_DSC5661.JPG"
];
export default function About() {
  return (
    <Layout
      url={`${siteUrl}/about-us`}
      title="Über GLOSSBOSS"
      description="Wer und was ist GLOSSBOSS?">
      <Container>
        <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
          Über GLOSSBOSS
        </h1>
        <div className="mx-auto my-3">
          <div className="grid grid-cols-3 gap-5 mt-6 md:mt-16 md:mb-32 md:gap-16">
            {renderImages.map((k, i) => {
              return (
                <div
                  className="relative overflow-hidden rounded-md aspect-square odd:translate-y-10 odd:md:translate-y-16"
                  key={i}>
                  <Image
                    src={k}
                    alt=""
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover"
                    }} />
                </div>
              );
            })}
          </div>
          <div className="mx-auto prose prose-stone prose-base prose-a:text-blue-500 dark:prose-invert mt-14">
            <p>
              Der Autopflege Blog GLOSSBOSS entstand im Juni 2014 und
              wurde von Marvin und vielen weiteren GLOSSBOSSEN
              gegründet: Alex, Mark, Ronny, Jones, Sven, Chris, noch
              ein Alex, Rene, Michael und Dirk waren seit den ersten
              Stunden dabei und unterstützten regelmäßig mit
              Produkttests, Anleitungen und Pflegeberichten.
            </p>
            <p>
              Mittlerweile ist GLOSSBOSS vielseitiger aufgestellt. Zu
              der Aufbereitung gesellt sich ein{" "}
              <Link href="https://glossboss-shop.de" target="_blank">
                Onineshop
              </Link>{" "}
              und diverse andere Aktivitäten im Bereich Social Media
              bzw. Medien wie zum Beispiel mit dem{" "}
              <Link href="https://nass-und-schaumig.podigee.io/" target="_blank">
                Podcast Nass und Schaumig
              </Link>
              , als Moderator auf der DCON oder als{" "}
              <Link
                href="/news/glossboss-auf-der-automechanika-frankfurt-2022"
                target="_blank">
                
                  Influencer auf der Automechanika
                
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
// export async function getStaticProps() {
//   const posts = await getPosts("Videos");
//   return {
//     props: {
//       posts
//     }
//   };
// }
