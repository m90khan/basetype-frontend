import { Box } from '@chakra-ui/react';
import React from 'react';
const Menu = ({ openMenu }: any) => {
  return (
    <Box
      pos={'fixed'}
      bg={'green.900'}
      w={'100%'}
      top={openMenu ? '10vh' : '-100vh'}
      h={'100vh'}
      zIndex={500}
      className={'main-menu'}
      transition={'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)'}
    >
      <Box as={'main'} w={'100%'} h={'100%'}>
        <nav className='menu'>
          <div className='menu__item'>
            <a className='menu__item-link'>Showreel</a>
            <img className='menu__item-img' src='/images/menu/1.jpg' alt='Some image' />
            <div className='marquee'>
              <div className='marquee__inner' aria-hidden='true'>
                <span>Showreel</span>
                <span>Showreel</span>
                <span>Showreel</span>
                <span>Showreel</span>
              </div>
            </div>
          </div>
          <div className='menu__item'>
            <a className='menu__item-link'>Case Studies</a>
            <img className='menu__item-img' src='/images/menu/2.jpg' alt='Some image' />
            <div className='marquee'>
              <div className='marquee__inner' aria-hidden='true'>
                <span>Case Studies</span>
                <span>Case Studies</span>
                <span>Case Studies</span>
                <span>Case Studies</span>
              </div>
            </div>
          </div>
          <div className='menu__item'>
            <a className='menu__item-link'>Experiments</a>
            <img className='menu__item-img' src='/images/menu/3.jpg' alt='Some image' />
            <div className='marquee'>
              <div className='marquee__inner' aria-hidden='true'>
                <span>Experiments</span>
                <span>Experiments</span>
                <span>Experiments</span>
                <span>Experiments</span>
              </div>
            </div>
          </div>
          <div className='menu__item'>
            <a className='menu__item-link'>Our Crew</a>
            <img className='menu__item-img' src='/images/menu/4.jpg' alt='Some image' />
            <div className='marquee'>
              <div className='marquee__inner' aria-hidden='true'>
                <span>The Crew</span>
                <span>The Crew</span>
                <span>The Crew</span>
                <span>The Crew</span>
              </div>
            </div>
          </div>
          <div className='menu__item'>
            <a className='menu__item-link'>Contact</a>
            <img className='menu__item-img' src='/images/menu/5.jpg' alt='Some image' />
            <div className='marquee'>
              <div className='marquee__inner' aria-hidden='true'>
                <span>Contact</span>
                <span>Contact</span>
                <span>Contact</span>
                <span>Contact</span>
              </div>
            </div>
          </div>
        </nav>
      </Box>
    </Box>
  );
};

export default Menu;
