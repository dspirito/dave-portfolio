import React from 'react';
import Slider from 'react-slick';

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

const BrandsCarousel: React.FC = () => (
  <div className="py-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <h3 className="text-center text-xl font-semibold mb-6 text-gray-700 dark:text-gray-200">
      Brands I've Worked With
    </h3>
    <Slider {...settings}>
      {brands.map((brand) => (
        <div key={brand.name} className="flex justify-center items-center h-28 px-4">
          <img
            src={brand.logo}
            alt={brand.name}
            className="h-20 object-contain mx-auto grayscale hover:grayscale-0 transition"
            style={{ filter: 'invert(0%)' }}
          />
        </div>
      ))}
    </Slider>
  </div>
);

export default BrandsCarousel;