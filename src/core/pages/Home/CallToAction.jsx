import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import Map from './Map';
import Contact from './Contact';
import Social from './Social';
import useHomeStyles from './styles';

Modal.setAppElement('#root');

const CallToActionTwo = () => {
  const { t } = useTranslation();
  const classes = useHomeStyles();
  const [isOpen, setIsOpen] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <section id='contact' className={`${classes.parallaxBg} ${classes.callToActionSection}`}>
      <div className='tm_talk bg_image_props'>
        <div className='shape'>
          <img className='svg' src='/img/svg/paper.svg' alt='partners brand' />
        </div>
        {/* End shape */}
        {/* End background */}

        <div className='talk_inner'>
          <div className='text' data-aos='fade-up' data-aos-duration='1200'>
            <h3>{t('CallToAction.title')}</h3>
          </div>

          <div className='button' data-aos='fade-up' data-aos-duration='1200' data-aos-delay='100'>
            <button className='white-fill-bg' onClick={toggleModalOne}>
              {t('CallToAction.makeAnEnquiry')}
            </button>
          </div>
        </div>
        {/* End talk_inner */}
      </div>
      {/* Start Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel='My dialog'
        className='custom-modal'
        overlayClassName='custom-overlay'
        closeTimeoutMS={500}>
        <div className='tm_mobalbox_contact'>
          <button className='close-modal' onClick={toggleModalOne}>
            <img src='/img/svg/cancel.svg' alt='close icon' />
          </button>
          {/* End close icon */}
          <div className='box_inner'>
            <div className='description_wrap scrollable'>
              {/* Start modal content */}
              <div className='title'>
                <h3>{t('CallToAction.getInTouch')}</h3>
              </div>
              {/* End title */}
              {/* End wrapper */}
              <div className='short_info'>
                <ul>
                  <li>
                    <div className='list_inner'>
                      <img className='svg' src='img/svg/location.svg' alt='location' />
                      <p>Burnaby, Vancouver</p>
                    </div>
                  </li>
                  {/* End silgle address */}

                  <li>
                    <div className='list_inner'>
                      <img className='svg' src='img/svg/phone.svg' alt='phone' />
                      <p>
                        <a href='tel:+1 778 723 7931'>+1 778 723 7931</a>
                      </p>
                    </div>
                  </li>
                  {/* End silgle address */}
                  <li>
                    <div className='list_inner'>
                      <img className='svg' src='img/svg/email.svg' alt='email' />
                      <p>
                        <a href='mailto:perry@perrycheung.com'>perry@perrycheung.com</a>
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className='list_inner'>
                      <a href='https://www.linkedin.com/in/perry-cheung-85370127/' target='_blank' rel='noreferrer'>
                        <img className='svg' src={`/img/svg/social/linkedln.png`} alt='social'></img>
                      </a>
                      <p>Linkedin Profile</p>
                    </div>
                  </li>
                  {/* End silgle address */}
                </ul>
              </div>
              <div className='wrapper'>
                {/* <div className='left'>
                  <div className='fields'>
                    <Contact />
                  </div>
                </div> */}
                {/* End left */}
                <div className='right'>
                  <div className='map_wrap'>
                    <Map />
                  </div>
                </div>
                {/* End right */}
              </div>
              {/* End modal conetent */}
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modalbox news */}
      </Modal>
      {/* End modal */}
    </section>
  );
};

export default CallToActionTwo;
