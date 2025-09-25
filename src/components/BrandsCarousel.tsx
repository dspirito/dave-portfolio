import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Example brand logos (replace with your own)
const brands = [
  { name: 'SIG Sauer', logo: '/brands/sig-sauer.svg' },
  { name: 'Procter & Gamble', logo: '/brands/p-g.jpg' },
  { name: 'Wallbox', logo: '/brands/wallbox.png' },
  { name: 'CME Corp', logo: '/brands/cme.png' },
  { name: 'HANNA Instruments', logo: '/brands/hanna.webp' },
  { name: 'WaterRower', logo: '/brands/waterrower.svg' },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 4700,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2200,
  arrows: false, // Explicitly enable arrows
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 }
    }
  ]
};

const BrandsCarousel: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Initial check
    checkDarkMode();

    // Listen for changes to the 'dark' class
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full py-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h3 className="text-center text-xl font-semibold mb-6 text-gray-700 dark:text-gray-200">
        Brands I've Worked With
      </h3>
      <div className="max-w-screen-lg mx-auto overflow-hidden px-4">
        <Slider {...settings}>
          {brands.map((brand) => (
            <div key={brand.name} className="flex justify-center items-center h-28 px-4">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-20 object-contain mx-auto transition"
                style={{
                  filter:
                    isDarkMode &&
                    (brand.name === 'SIG Sauer' ||
                      brand.name === 'WaterRower' ||
                      brand.name === 'HANNA Instruments')
                      ? 'brightness(0) invert(1)'
                      : isDarkMode
                      ? 'grayscale(100%)'
                      : 'invert(0%)',
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandsCarousel;