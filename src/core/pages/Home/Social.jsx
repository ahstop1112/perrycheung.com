import React from 'react';

const SocialShare = [
  {
    iconName: 'linkedln',
    link: 'https://www.linkedin.com/in/perry-cheung-85370127/',
  },
];
const Social = () => {
  return (
    <div className='share'>
      <ul className='social'>
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target='_blank' rel='noreferrer'>
              <img className='svg' src={`/img/svg/social/${val.iconName}.png`} alt='social'></img>
            </a>
          </li>
        ))}
      </ul>

      {/* END social */}
    </div>
  );
};

export default Social;
