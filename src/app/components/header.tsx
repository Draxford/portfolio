import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
//import styles from '../styles/Header.module.css';


const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
      </div>
      <nav className="nav">
        
        <Link href="/">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
    
  );
};

export default Header;



//<Image src="/public/image0_0.jpg" alt="Logo" width={50} height={50} />