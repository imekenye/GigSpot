import { Container, Top, Bottom, Middle } from "./FeaturedCarousel.styled.js";

export default function FeaturedCarousel({ children, ...restProps }) {
  return <Container>{children}</Container>;
}

FeaturedCarousel.Top = function FeaturedCarouselTop({
  children,
  ...restProps
}) {
  return <Top {...restProps}> {children} </Top>;
};
FeaturedCarousel.Middle = function FeaturedCarouselMiddle({
  children,
  ...restProps
}) {
  return <Middle {...restProps}> {children} </Middle>;
};
FeaturedCarousel.Bottom = function FeaturedCarouselBottom({
  children,
  ...restProps
}) {
  return <Bottom {...restProps}> {children} </Bottom>;
};
