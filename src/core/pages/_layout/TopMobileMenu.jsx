import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  //   .tm_topbar .menu ul {
  //     margin: 0px;
  //     list-style-type: none;
  //   }
  //   .tm_topbar .menu ul li {
  //     margin: 0px;
  //     display: inline-block;
  //   }
  //   .tm_topbar .menu ul li {
  //     margin: 0px 25px 0px 0px;
  //     display: inline-block;
  //   }
  //   .tm_topbar .menu ul li:last-child {
  //     margin-right: 0px;
  //   }
  //   .tm_topbar .menu ul li a {
  //     text-decoration: none;
  //     color: #000;
  //     font-weight: 500;
  //     font-family: 'Poppins';
  //     -webkit-transition: all 0.3s ease;
  //     -moz-transition: all 0.3s ease;
  //     -ms-transition: all 0.3s ease;
  //     -o-transition: all 0.3s ease;
  //     transition: all 0.3s ease;
  //   }
  //   .tm_topbar .menu ul li a {
  //     color: #222;
  //     position: relative;
  //     &::before {
  //       content: '';
  //       position: absolute;
  //       left: 0;
  //       bottom: -5px;
  //       width: 0;
  //       background: currentcolor;
  //       height: 2px;
  //       transition: 0.3s;
  //     }
  //   }
  //   .tm_topbar .menu ul li.current a {
  //     &::before {
  //       width: 100%;
  //     }
  //   }
}));

const TopMobileMenu = ({ menuItems }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <ul className='anchor_nav'>
      {menuItems.length > 0 &&
        menuItems.map((item) => (
          <li key={item} className='current'>
            <a href={`#${item}`} onClick={handleClick}>
              {t(`Home.${item}`)}
            </a>
          </li>
        ))}
    </ul>
  );
};

export default TopMobileMenu;
