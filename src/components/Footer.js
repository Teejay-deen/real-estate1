import React from 'react';

const Footer = () => {
  const year = new Date();
  const currentYear = year.getFullYear()
  return <footer className='bg-black py-8 text-center text-white'>
    <div className='container mx-auto'>
      Copyright & Copy; {currentYear} All right reserved
    </div>
  </footer>;
};

export default Footer;
