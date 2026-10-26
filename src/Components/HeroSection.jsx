import { useEffect, useRef } from "react";
import { Carousel } from "bootstrap"; // JS class from the npm bootstrap package
import "./HeroSection.css";

// Image imports (folder: src/projectImages)

import furnitureImg from "../assets/Furniture.jpg";
import beautyImg from "../assets/Beauty.jpg";
import electronicsImg from "../assets/Gagdets.jpg";

// All slide data in one array, so the JSX below stays short (3 slides for now)
const slides = [
  {
    image: furnitureImg,
    alt: "Living room with white furniture",
    title: "Everything for Your Home",
    text: "Find products that make your space feel better.",
  },
  {
    image: beautyImg,
    alt: "Beauty products",
    title: "Your Beauty, Your Choice",
    text: "Discover products made for your everyday routine.",
  },
  {
    image: electronicsImg,
    alt: "Gadgets and electronics",
    title: "Technology for Everyday Life",
    text: "Explore gadgets and electronics at great prices.",
  },
];

function HeroSection() {
  const carouselRef = useRef(null); // reference to the carousel <div>

  // Start the Bootstrap carousel after the component appears on screen
  useEffect(() => {
    const carousel = new Carousel(carouselRef.current, {
      interval: 3000, // auto-slide every 3 seconds
      ride: "carousel", // start sliding automatically (no click needed)
      pause: false, // keep sliding even when mouse hovers over it
      wrap: true, // after the last slide, go back to the first (loop)
      touch: false, // no swipe on mobile, automatic sliding only
    });

    // Cleanup: remove the carousel when the component is removed
    return () => carousel.dispose();
  }, []);

  return (
    // "carousel-fade" = smooth fade transition instead of sliding sideways
    // No wrapper container here, so the hero spans the full viewport width
    <div ref={carouselRef} className="carousel slide carousel-fade hero-carousel pt-3 mb-3">
      {/* No indicators and no prev/next arrows, as requested */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            // Only the first slide gets "active", Bootstrap handles the rest
            className={`carousel-item hero-slide ${index === 0 ? "active" : ""}`}
          >
            {/* Background image */}
            {/* object-fit: cover fills the whole hero area, but the image may be
                slightly cropped (top/bottom or sides) depending on screen size.
                If the cropping does not look suitable, revise it later
                (e.g. change object-position in HeroSection.css). */}
            <img src={slide.image} alt={slide.alt} className="hero-img" />

            {/* Dark overlay on the image only (not the whole section).
                bg-black + bg-opacity-50 = black at 50% transparency */}
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-50"></div>

            {/* Text layer: sits above the image and overlay */}
            {/* "container" keeps text away from the screen edges.
                "h-100 d-flex align-items-center" centers the text vertically. */}
            <div className="container h-100 position-relative d-flex align-items-center">
              {/* Text stays on the LEFT; column width changes per screen size */}
              <div className="col-12 col-md-8 col-lg-6 text-white">
                <h1 className="hero-title fw-bold mb-2">{slide.title}</h1>
                <p className="hero-text mb-0">{slide.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;