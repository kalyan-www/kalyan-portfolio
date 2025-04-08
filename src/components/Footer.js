import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-4 border-t mt-16">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} G. Kalyaan Chakravarty. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
