import Head from "next/Head";
import { Nav } from "./Nav";
import Link from "next/link";
import SearchIcon from "./SearchIcon";
import LogoSvg from "./LogoSvg";
import styled from "styled-components";

const LayoutContainer = styled.div`
  height: 100%;
`;

export default function Layout({ title, children }) {
  return (
    <LayoutContainer>
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
      <Nav>
        <Link href={`/`}>
          <a>
            <LogoSvg />
          </a>
        </Link>
        <Nav.Line />
        <Nav.List>
          <Nav.ListItem>
            <Link href={`/events`}>Events</Link>
          </Nav.ListItem>
          <Nav.ListItem>
            <Link href={`/events/add`}>Add Event+</Link>
          </Nav.ListItem>
          <Nav.ListItem>
            <Link href={`/signin`}>Sign In</Link>
          </Nav.ListItem>
        </Nav.List>
      </Nav>
      <SearchIcon />
      {children}
    </LayoutContainer>
  );
}
Layout.defaultProps = {
  title: "Home | GigSpot",
};
