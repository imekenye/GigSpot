import { Container, Title, SubTitle } from "./DisplayText.styled.js";

export default function DisplayText({ children, ...restProps }) {
  return <Container>{children}</Container>;
}

DisplayText.Title = function DisplayTextTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children} </Title>;
};

DisplayText.SubTitle = function DisplayTextSubTitle({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}> {children} </SubTitle>;
};
