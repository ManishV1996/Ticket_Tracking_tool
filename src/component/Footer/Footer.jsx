// Footer.js
import React from 'react';
import "./Footer.css"

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>&copy; {currentYear} Ticket Tracking Tool App Developed By Manish Verma</p>
    </footer>
  );
}

export default Footer;
