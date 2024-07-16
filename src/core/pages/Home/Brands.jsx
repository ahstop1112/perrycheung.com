import React from 'react';
import BrandAnimation from './BrandAnimation';
import useHomeStyles from './styles';

const Brands = () => {
  const classes = useHomeStyles();
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section id='Brands' className={`${classes.brandSection} tm_section`}>
      <div className='tm_partners'>
        <div className='container'>
          <div className='partners_inner'>
            <BrandAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
