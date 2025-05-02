import React from "react";
import { motion } from "framer-motion";
import Reviews from "./Reviews";

const ReviewsSections: React.FC = () => {
  return (
    <motion.section className="mt-12 px-4">
      <h1 className="font-bold text-2xl">What everyone says</h1>
      <Reviews
        reviews={[
          {
            review:
              "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
            name: "Hellen Jummy",
            role: "Financial Counselor",
            image: "/hellen-photo.png",
          },
          {
            review:
              "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
            name: "Hellen Jummy",
            role: "Financial Counselor",
            image: "/hellen-photo.png",
          },
          {
            review:
              "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
            name: "Hellen Jummy",
            role: "Financial Counselor",
            image: "/hellen-photo.png",
          },
          {
            review:
              "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
            name: "Hellen Jummy",
            role: "Financial Counselor",
            image: "/hellen-photo.png",
          },
          {
            review:
              "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
            name: "Hellen Jummy",
            role: "Financial Counselor",
            image: "/hellen-photo.png",
          },
        ]}
      />
    </motion.section>
  );
};

export default ReviewsSections;
