import {
  Container,
  Title,
  Details,
  Time,
  Location,
  Image,
  Date,
  ImageWrapper,
} from "./FeatureCard.styled.js";

export default function FeatureCard({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

FeatureCard.Image = function FeatureCardImage({ src, href, ...restProps }) {
  return (
    <ImageWrapper>
      <Image src={src} href={href} {...restProps} />;
    </ImageWrapper>
  );
};

FeatureCard.Details = function FeatureCardDetails({ children, ...restProps }) {
  return <Details {...restProps}> {children} </Details>;
};

FeatureCard.Title = function FeatureCardTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children} </Title>;
};

FeatureCard.Location = function FeatureCardLocation({
  children,
  ...restProps
}) {
  return <Location {...restProps}> {children} </Location>;
};

FeatureCard.Time = function FeatureCardTime({ children, ...restProps }) {
  return <Time {...restProps}> {children} </Time>;
};

FeatureCard.Date = function FeatureCardDate({ children, ...restProps }) {
  return <Date {...restProps}> {children} </Date>;
};
