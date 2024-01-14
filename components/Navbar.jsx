'use client';

import { motion } from 'framer-motion';
import Link from "next/link";
import styles from '../styles';
import { navVariants } from '../utils/motion';

// ... (imports)

// ... (imports)

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}
    >
      <div className="flex items-center gap-4">
        <img
          src="\logo.png"  // Replace with your actual logo image
          alt="logo"
          className="w-20 h-20 object-contain"
        />
      </div>
      
      <div className="flex gap-14">
        {/* Wrap the "Home" link with the Link component */}
        <Link href="/">
          <span className="text-white cursor-pointer">Home</span>
        </Link>
        <Link href="/about">
          <span className="text-white cursor-pointer">About Us</span>
        </Link>
        <Link href="/events">
          <span className="text-white cursor-pointer">Events</span>
        </Link>
        <Link href="/gallery">
          <span className="text-white cursor-pointer">Gallery</span>
        </Link>
        <Link href="/sponsors">
          <span className="text-white cursor-pointer">Sponsors</span>
        </Link>
        <Link href="/privacy">
          <span className="text-white cursor-pointer">Privacy</span>
        </Link>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;

