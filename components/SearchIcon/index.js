import { SvgContainer } from "./SearchIcon.styled";

export default function SearchIcon({ color = "#0ADF62" }) {
  return (
    <>
      <SvgContainer
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="26" cy="26" r="26" fill={color} />
        <path
          d="M25 33C29.4183 33 33 29.4183 33 25C33 20.5817 29.4183 17 25 17C20.5817 17 17 20.5817 17 25C17 29.4183 20.5817 33 25 33Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35 35L30.65 30.65"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgContainer>
    </>
  );
}
