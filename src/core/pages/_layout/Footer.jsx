import React from 'react';
import { Grid } from '@mui/material';

const Footer = () => {
  return (
    <footer className='tm_section' id='footer'>
      <div className='tm_copyright'>
        <div className='container'>
          <div className='inner'>
            <p>
              &copy; {new Date().getFullYear()} by{' '}
              <a href='https://themeforest.net/user/ib-themes' target='_blank' rel='noreferrer'>
                Perry Cheung
              </a>
              . All rights reserved.
            </p>
          </div>
          {/* End inner */}
        </div>
      </div>
      {/* End tm_copyright */}
    </footer>
  );
};

export default Footer;
