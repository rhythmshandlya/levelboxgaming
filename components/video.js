import Container from "./container";

export default function Video() {
  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 mt-20 rounded-2xl ">
        {/* <div className="text-sm mb-5 text-center font-bold tracking-wider text-indigo-600 uppercase">
              Watch a Video
             </div> 
          */}
        <div className="relative bg-indigo-300 cursor-pointer aspect-w-16 aspect-h-9 ">
          <iframe
            src="https://www.youtube.com/embed/_CPrYB6Q-HM?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
