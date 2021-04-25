import { Container } from "./CarouselNextPrev.styled";
import ArrowLeft from "../ArrowsSvg/ArrowLeft";
import ArrowRight from "../ArrowsSvg/ArrowRight";

export default function CarouselNextPrev() {
  return (
    <Container>
      <p>/01</p>
      <div className="arrows">
        <ArrowLeft />
        <ArrowRight />
      </div>
    </Container>
  );
}
