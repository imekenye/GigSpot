import { Layout } from "../components";
import DisplayText from "../components/DisplayText";
import FeaturedCarousel from "../components/FeaturedCarousel";
import CarouselNextPrev from "../components/CarouselNextPrev";
import FeatureCard from "../components/FeatureCard";

export default function Home() {
  return (
    <Layout>
      <DisplayText>
        <DisplayText.Title>Featured</DisplayText.Title>
        <DisplayText.SubTitle>events</DisplayText.SubTitle>
      </DisplayText>
      <FeaturedCarousel>
        <FeaturedCarousel.Top>
          <CarouselNextPrev />
        </FeaturedCarousel.Top>
        <FeaturedCarousel.Middle />
        <FeaturedCarousel.Bottom>
          <FeatureCard>
            <FeatureCard.Image src={"/images/dj.png"} />
            <FeatureCard.Details>
              <div className={`left`}>
                <FeatureCard.Title>Boat Party</FeatureCard.Title>
                <div>
                  <FeatureCard.Location>The Cave,NY</FeatureCard.Location>
                  <FeatureCard.Time>10:00pm - 3:00am</FeatureCard.Time>
                </div>
              </div>
              <div className={`right`}>
                <FeatureCard.Date>
                  <p>
                    24 <span>Apr 21</span>
                  </p>
                </FeatureCard.Date>
              </div>
            </FeatureCard.Details>
          </FeatureCard>

          <FeatureCard>
            <FeatureCard.Image src={"/images/dj.png"} />
            <FeatureCard.Details>
              <div className={`left`}>
                <FeatureCard.Title>Boat Party</FeatureCard.Title>
                <div>
                  <FeatureCard.Location>The Cave,NY</FeatureCard.Location>
                  <FeatureCard.Time>10:00pm - 3:00am</FeatureCard.Time>
                </div>
              </div>
              <div className={`right`}>
                <FeatureCard.Date>
                  <p>
                    24 <span>Apr 21</span>
                  </p>
                </FeatureCard.Date>
              </div>
            </FeatureCard.Details>
          </FeatureCard>

          <FeatureCard>
            <FeatureCard.Image src={"/images/dj.png"} />
            <FeatureCard.Details>
              <div className={`left`}>
                <FeatureCard.Title>Boat Party</FeatureCard.Title>
                <div>
                  <FeatureCard.Location>The Cave,NY</FeatureCard.Location>
                  <FeatureCard.Time>10:00pm - 3:00am</FeatureCard.Time>
                </div>
              </div>
              <div className={`right`}>
                <FeatureCard.Date>
                  <p>
                    24 <span>Apr 21</span>
                  </p>
                </FeatureCard.Date>
              </div>
            </FeatureCard.Details>
          </FeatureCard>

          <FeatureCard>
            <FeatureCard.Image src={"/images/dj.png"} />
            <FeatureCard.Details>
              <div className={`left`}>
                <FeatureCard.Title>Boat Party</FeatureCard.Title>
                <div>
                  <FeatureCard.Location>The Cave,NY</FeatureCard.Location>
                  <FeatureCard.Time>10:00pm - 3:00am</FeatureCard.Time>
                </div>
              </div>
              <div className={`right`}>
                <FeatureCard.Date>
                  <p>
                    24 <span>Apr 21</span>
                  </p>
                </FeatureCard.Date>
              </div>
            </FeatureCard.Details>
          </FeatureCard>
        </FeaturedCarousel.Bottom>
      </FeaturedCarousel>
    </Layout>
  );
}
