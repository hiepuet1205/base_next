import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-4 fixed bottom-0 w-full">
      <div className="text-center mt-4">
        {new Date().getFullYear()} — <strong>Next</strong>
      </div>
    </div>
  );
};

export default Footer;