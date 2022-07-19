import Container from "./container";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Video({ data }) {
  return (
    <Container>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce="true"
        offset={-50}
      >
        <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 lg:mt-20 my-4 rounded-2xl ">
          <div className="relative bg-indigo-300 cursor-pointer aspect-w-16 aspect-h-9 ">
            <iframe
              src={data.link}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </AnimationOnScroll>
    </Container>
  );
}
