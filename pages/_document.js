import Document, {
  Html,
  Head,
  Main,
  NextScript
} from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300..700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
