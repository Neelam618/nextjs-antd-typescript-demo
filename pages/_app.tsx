import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar/Navbar'

// const AppLayout = dynamic(() => import('../components/Navbar/Navbar'), { ssr: false });

export default function MyApp({ Component, pageProps }) {
  return (
      <Navbar
        NavMenuItems = {[
          { menuTxt: 'Web Themes and Templates', href: '#', key: 'key1' },
          { menuTxt: 'Code', href: '#', key: 'key2' },
          { menuTxt: 'Video', href: '#', key: 'key2' },
          { menuTxt: 'Audio', href: '#', key: 'key3' },
          { menuTxt: 'Graphics', href: '#', key: 'key4' },
          { menuTxt: 'Photos', href: '#', key: 'key5' },
          { menuTxt: '3D Files', href: '#', key: 'key6' }
        ]}
      />
  );
}