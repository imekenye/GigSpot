import { Head } from "next/document";

export default function Layout({ title }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Everett/Everett-Regular.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Everett/Everett-Medium.otf"
          as="font"
          crossOrigin=""
        />
        <title>{title}</title>
      </Head>
    </>
  );
}
