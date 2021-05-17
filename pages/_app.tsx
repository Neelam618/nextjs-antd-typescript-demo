import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar/Navbar'
import Topbar from '../components/Topbar/Topbar';

// const AppLayout = dynamic(() => import('../components/Navbar/Navbar'), { ssr: false });

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Topbar 
        TopMenuItems={[
          { menuTxt: 'Forums', href: '#' },
          { menuTxt: 'Start Selling', href: '#' },
        ]}
        logo={
          'https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-market-f6121fbbfec25dbc851a3e5aea13c8ad.svg'}
      
        dropDownTxt= {'Our Products'}
        Options={[
          {
            optionTxt: 'Digital Assets Subscription',
            href: '#',
            logoInOption:
              'https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-elements-4de52b67c96ca63c1b764d39b573a7af.svg',
          },
          {
            optionTxt: 'Hire a freelancer',
            href: '#',
            logoInOption:
              'https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-studio-df1d5447eb8bd2d54ef22aa4b03d160a.svg',
          },
        ]}
        menuIconTxt= {'Sign In'}
      />
      
      <Navbar
        NavMenuItems = {[
          { menuTxt: 'Web Themes and Templates', href: '#', key: 'key1' },
          { menuTxt: 'Code', href: '#', key: 'key2' },
          { menuTxt: 'Video', href: '#', key: 'key3' },
          { menuTxt: 'Audio', href: '#', key: 'key4' },
          { menuTxt: 'Graphics', href: '#', key: 'key5' },
          { menuTxt: 'Photos', href: '#', key: 'key6' },
          { menuTxt: '3D Files', href: '#', key: 'key7' }
        ]}
      />
    </>
  );
}