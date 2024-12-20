import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "PlushPalace is a 3D furniture agency landing page showcases innovative designs with interactive displays and a seamless user experience.",
      name: "Sarah Chen",
      designation: "PlushPalace",
      src: "/plushpalace2.jpg",
      link: "https://plush-palace.vercel.app/",
    },
    {
      quote:
        "PopcornTV is a movie and TV platform , offering a wide database of films and series with synopses, ratings, and personalised recommendations.",
      name: "Michael Rodriguez",
      designation: "PopcornTV",
      src: "/popcorn3.jpg",
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
