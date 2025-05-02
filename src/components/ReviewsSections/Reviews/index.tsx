import React from "react";
import useEmblaCarousel from "embla-carousel-react";

interface ReviewsProps {
  reviews: Array<{ review: string; name: string; role: string; image: string }>;
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  return (
    <section className="embla overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex gap-6">
          {reviews.map(({ review, name, role, image }, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_80%] md:flex-[0_0_40%] bg-white drop-shadow-xl p-6 rounded-lg"
            >
              <p className="mb-4 text-gray-800">“{review}”</p>
              <div className="flex items-center gap-3">
                <img
                  src={image}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {name}
                  </h3>
                  <p className="text-sm text-gray-600">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
