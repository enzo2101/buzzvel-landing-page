import React from "react";
import SimpleForwardButton from "../SimpleForwardButton";

const InternationalStudentsSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-2xl">
          Meet international students & teachers
        </h1>
        <p>
          Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
          risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
          facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
          aenean lorem faucibus integer.
        </p>
        <SimpleForwardButton text="Explore teachers and students" />
      </div>
      <img src="/photos-board.svg" alt="board with students photos" />
    </section>
  );
};

export default InternationalStudentsSection;
