import React from "react";
import SimpleForwardButton from "../SimpleForwardButton";

const InternationalStudentsSection: React.FC = () => {
  return (
    <section
      className="
        flex flex-col-reverse
        lg:flex-row
        items-center
        gap-8
        px-4 lg:px-20
        mb-12
      "
    >
      <div className="w-full lg:w-1/2">
        <img
          src="/photos-board.svg"
          alt="board with students photos"
          className="w-full h-auto object-cover"
        />
      </div>
      <div
        className="
          w-full lg:w-1/2
          flex flex-col gap-6
          text-center lg:text-left
        "
      >
        <h1 className="font-bold text-2xl lg:text-4xl text-start">
          Meet international students &amp; teachers
        </h1>
        <p className="text-base lg:text-lg leading-relaxed text-start">
          Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
          risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
          facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
          aenean lorem faucibus integer.
        </p>
        <div className="mx-auto lg:mx-0 w-full">
          <SimpleForwardButton text="Explore teachers and students" />
        </div>
      </div>
    </section>
  );
};

export default InternationalStudentsSection;
