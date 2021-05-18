import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar/Navbar'
import Topbar from '../components/Topbar/Topbar';
import SubNavbar from '../components/SubNavbar/SubNavbar'

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
      <SubNavbar 
         DropdownItems={[
          {
            dropdownTitle: 'All items',
            SubNavOptions: [
              { optionTxt: 'Popular Files', href: '#' },
              { optionTxt: 'Featured Files', href: '#' },
              { optionTxt: 'Top New Files', href: '#' },
              { optionTxt: 'Follow feed', href: '#' },
              { optionTxt: 'Top Authors', href: '#' },
              { optionTxt: 'Top New Authors', href: '#' },
              { optionTxt: 'Public Collections', href: '#' },
              { optionTxt: 'View All Categories', href: '#' },
            ],
          },
          {
            dropdownTitle: 'WordPress',
            SubNavOptions: [
              { optionTxt: 'Show All PHP Scripts', href: '#' },
              { optionTxt: 'Polpular Items', href: '#' },
              { optionTxt: 'Add-ons', href: '#' },
              { optionTxt: 'Calendars', href: '#' },
              { optionTxt: 'Countdowns', href: '#' },
              { optionTxt: 'Datebase Abstractions', href: '#' },
              { optionTxt: 'Forms', href: '#' },
              { optionTxt: 'Help and Support Tools', href: '#' },
              { optionTxt: 'Images and Media', href: '#' },
              { optionTxt: 'Loaders and Uploaders', href: '#' },
              { optionTxt: 'Navigation', href: '#' },
              { optionTxt: 'News Tickers', href: '#' },
              { optionTxt: 'Polls', href: '#' },
              { optionTxt: 'Project Management Tools', href: '#' },
              { optionTxt: 'Ratings and Charts', href: '#' },
              { optionTxt: 'Search', href: '#' },
              { optionTxt: 'Shopping Carts', href: '#' },
              { optionTxt: 'Social Networking', href: '#' },
              { optionTxt: 'Miscellaneous', href: '#' },
            ],
          },
          {
            dropdownTitle: 'Template Kits',
            SubNavOptions: [
              { optionTxt: 'Show All WordPress', href: '#' },
              { optionTxt: 'Popular Items', href: '#' },
              { optionTxt: 'Add-ons', href: '#' },
              { optionTxt: 'Advertising', href: '#' },
              { optionTxt: 'Calandars', href: '#' },
              { optionTxt: 'eCommerce', href: '#' },
              { optionTxt: 'Elementor', href: '#' },
              { optionTxt: 'Forms', href: '#' },
              { optionTxt: 'Forums', href: '#' },
              { optionTxt: 'Galleries', href: '#' },
              { optionTxt: 'Interface Elements', href: '#' },
              { optionTxt: 'Media', href: '#' },
              { optionTxt: 'Membership', href: '#' },
              { optionTxt: 'Newsletters', href: '#' },
              { optionTxt: 'SEO', href: '#' },
              { optionTxt: 'Social Networking', href: '#' },
              { optionTxt: 'Utilities', href: '#' },
              { optionTxt: 'Widgets', href: '#' },
              { optionTxt: 'Miscellaneous', href: '#' },
              { optionTxt: 'WordPress Themes on ThemeForest', href: '#' },
            ],
          },
          {
            dropdownTitle: 'Hosting',
            SubNavOptions: [
              { optionTxt: 'Show All eCommerce', href: '#' },
              { optionTxt: 'Popular Items', href: '#' },
              { optionTxt: 'Add-ons', href: '#' },
              { optionTxt: 'Advertising', href: '#' },
              { optionTxt: 'Calandars', href: '#' },
              { optionTxt: 'eCommerce', href: '#' },
              { optionTxt: 'Elementor', href: '#' },
              { optionTxt: 'Forms', href: '#' },
            ],
          },
          {
            dropdownTitle: 'HTML',
            SubNavOptions: [
              { optionTxt: 'Show All eCommerce', href: '#' },
              { optionTxt: 'Popular Items', href: '#' },
              { optionTxt: 'Add-ons', href: '#' },
              { optionTxt: 'Advertising', href: '#' },
              { optionTxt: 'Calandars', href: '#' },
              { optionTxt: 'eCommerce', href: '#' },
              { optionTxt: 'Elementor', href: '#' },
              { optionTxt: 'Forms', href: '#' },
            ],
          },
          {
            dropdownTitle: 'Marketing',
            SubNavOptions: [
              { optionTxt: 'Show All eCommerce', href: '#' },
              { optionTxt: 'Popular Items', href: '#' },
              { optionTxt: 'Add-ons', href: '#' },
              { optionTxt: 'Advertising', href: '#' },
              { optionTxt: 'Calandars', href: '#' },
              { optionTxt: 'eCommerce', href: '#' },
              { optionTxt: 'Elementor', href: '#' },
              { optionTxt: 'Forms', href: '#' },
            ],
          },
          {
            dropdownTitle: 'CMS',
            SubNavOptions: [
              { optionTxt: 'Show All eCommerce', href: '#' },
              { optionTxt: 'Popular Items', href: '#' },
              { optionTxt: 'Add-ons', href: '#' },
              { optionTxt: 'Advertising', href: '#' },
              { optionTxt: 'Calandars', href: '#' },
              { optionTxt: 'eCommerce', href: '#' },
              { optionTxt: 'Elementor', href: '#' },
              { optionTxt: 'Forms', href: '#' },
            ],
          },
          {
            dropdownTitle: 'eCommerce',
            SubNavOptions: [
              { optionTxt: 'Show All eCommerce', href: '#' },
              { optionTxt: 'Popular Items', href: '#' },
              { optionTxt: 'Add-ons', href: '#' },
              { optionTxt: 'Advertising', href: '#' },
              { optionTxt: 'Calandars', href: '#' },
              { optionTxt: 'eCommerce', href: '#' },
              { optionTxt: 'Elementor', href: '#' },
              { optionTxt: 'Forms', href: '#' },
            ],
          },
          {
            dropdownTitle: 'UI Templates',
            SubNavOptions: [
              { optionTxt: 'Show All eCommerce', href: '#' },
              { optionTxt: 'Popular Items', href: '#' },
              { optionTxt: 'Add-ons', href: '#' },
              { optionTxt: 'Advertising', href: '#' },
              { optionTxt: 'Calandars', href: '#' },
              { optionTxt: 'eCommerce', href: '#' },
              { optionTxt: 'Elementor', href: '#' },
              { optionTxt: 'Forms', href: '#' },
            ],
          },
          {
            dropdownTitle: 'Plugins',
            SubNavOptions: [
              { optionTxt: 'Show All eCommerce', href: '#' },
              { optionTxt: 'Popular Items', href: '#' },
              { optionTxt: 'Add-ons', href: '#' },
              { optionTxt: 'Advertising', href: '#' },
              { optionTxt: 'Calandars', href: '#' },
              { optionTxt: 'eCommerce', href: '#' },
              { optionTxt: 'Elementor', href: '#' },
              { optionTxt: 'Forms', href: '#' },
            ],
          },
          {
            dropdownTitle: 'Logo Maker',
            SubNavOptions: [
              { optionTxt: 'Show All eCommerce', href: '#' },
              { optionTxt: 'Popular Items', href: '#' },
              { optionTxt: 'Add-ons', href: '#' },
              { optionTxt: 'Advertising', href: '#' },
              { optionTxt: 'Calandars', href: '#' },
              { optionTxt: 'eCommerce', href: '#' },
              { optionTxt: 'Elementor', href: '#' },
              { optionTxt: 'Forms', href: '#' },
            ],
          },
          {
            dropdownTitle: 'More',
            SubNavOptions: [
              { optionTxt: 'Show All eCommerce', href: '#' },
              { optionTxt: 'Popular Items', href: '#' },
              { optionTxt: 'Add-ons', href: '#' },
              { optionTxt: 'Advertising', href: '#' },
              { optionTxt: 'Calandars', href: '#' },
              { optionTxt: 'eCommerce', href: '#' },
              { optionTxt: 'Elementor', href: '#' },
              { optionTxt: 'Forms', href: '#' },
            ],
          },
        ]}
      />
    </>
  );
}