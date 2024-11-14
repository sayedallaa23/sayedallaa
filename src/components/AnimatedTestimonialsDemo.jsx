import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "PopcornTV is a movie and TV platform , offering a wide database of films and series with synopses, ratings, and personalized recommendations.",
      name: "Sarah Chen",
      designation: "PopcornTV",
      src: "/popcorn22.jpg",
      link: "https://popcorn-tv-seven.vercel.app/",
    },
    {
      quote:
        "PopcornTV is a movie and TV platform , offering a wide database of films and series with synopses, ratings, and personalized recommendations.",
      name: "Michael Rodriguez",
      designation: "PopcornTV",
      src: "/popcorn22.jpg",
      link: "https://popcorn-tv-seven.vercel.app/",
    },
    {
      quote:
        "Kicks is an e-commerce site for shoes, featuring a variety of styles, easy navigation, and customer reviews.",
      name: "Emily Watson",
      designation: "Kicks",
      src: "/kicks22.jpg",
      link: "https://kicks-kappa.vercel.app/",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
