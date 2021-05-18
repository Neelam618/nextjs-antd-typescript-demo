import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from '../components/Header/Header'
import menu from '../img/drawer-menu.svg';
import user from '../img/user.svg';
import cart from '../img/cart.svg';
import envato from '../img/envato.svg';
import signIn from '../img/sign-in.svg';
import Hero from '../components/Hero/Hero'
import './_app.less'

// const AppLayout = dynamic(() => import('../components/Navbar/Navbar'), { ssr: false });
let TopMenuItems = [ { menuTxt: 'Forums', href: '#' }, { menuTxt: 'Start Selling', href: '#' },]

let Options = [
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
  }
]

let NavMenuItems = [
{ menuTxt: 'Web Themes and Templates', href: '#', key: 'key1' },
{ menuTxt: 'Code', href: '#', key: 'key2' },
{ menuTxt: 'Video', href: '#', key: 'key3' },
{ menuTxt: 'Audio', href: '#', key: 'key4' },
{ menuTxt: 'Graphics', href: '#', key: 'key5' },
{ menuTxt: 'Photos', href: '#', key: 'key6' },
{ menuTxt: '3D Files', href: '#', key: 'key7' }
]

 let DropdownItems = [
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
  ]

let SelectOptions = [ 
{ optionTxt: 'Web Themes & Template', href: '#' },
{ optionTxt: 'Code', href: '#' },
{ optionTxt: 'Video', href: '#' },
{ optionTxt: 'Audio', href: '#' },
{ optionTxt: 'Photos', href: '#' },
{ optionTxt: '3D Files', href: '#' }
]

let Panels =[
  {
    panelHeader: 'All Items',
    PanelChildren: [
      { panelLink: 'Poular Files', href: '#' },
      { panelLink: 'Featured Files', href: '#' },
      { panelLink: 'Top New Files', href: '#' },
      { panelLink: 'Follow feed', href: '#' },
      { panelLink: 'Top Authors', href: '#' },
      { panelLink: 'Top New Authors', href: '#' },
      { panelLink: 'Public Collections', href: '#' },
      { panelLink: 'View All Categories', href: '#' },
    ],
    key: "1"
  },
  {
    panelHeader: 'PHP Scripts',
    PanelChildren: [
      { panelLink: 'Show All PHP Scripts', href: '#' },
      { panelLink: 'Polpular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Calendars', href: '#' },
      { panelLink: 'Countdowns', href: '#' },
      { panelLink: 'Datebase Abstractions', href: '#' },
      { panelLink: 'Forms', href: '#' },
      { panelLink: 'Help and Support Tools', href: '#' },
      { panelLink: 'Images and Media', href: '#' },
      { panelLink: 'Loaders and Uploaders', href: '#' },
      { panelLink: 'Navigation', href: '#' },
      { panelLink: 'News Tickers', href: '#' },
      { panelLink: 'Polls', href: '#' },
      { panelLink: 'Project Management Tools', href: '#' },
      { panelLink: 'Ratings and Charts', href: '#' },
      { panelLink: 'Search', href: '#' },
      { panelLink: 'Shopping Carts', href: '#' },
      { panelLink: 'Social Networking', href: '#' },
      { panelLink: 'Miscellaneous', href: '#' },
    ],
    key: "2"
  },
  {
    panelHeader: 'WordPress',
    PanelChildren: [
      { panelLink: 'Show All WordPress', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
      { panelLink: 'Forums', href: '#' },
      { panelLink: 'Galleries', href: '#' },
      { panelLink: 'Interface Elements', href: '#' },
      { panelLink: 'Media', href: '#' },
      { panelLink: 'Membership', href: '#' },
      { panelLink: 'Newsletters', href: '#' },
      { panelLink: 'SEO', href: '#' },
      { panelLink: 'Social Networking', href: '#' },
      { panelLink: 'Utilities', href: '#' },
      { panelLink: 'Widgets', href: '#' },
      { panelLink: 'Miscellaneous', href: '#' },
      { panelLink: 'WordPress Themes on ThemeForest', href: '#' },
    ],
    key: "3"
  },
  {
    panelHeader: 'eCommerce',
    PanelChildren: [
      { panelLink: 'Show All eCommerce', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
    ],
    key: "4"
  },
  {
    panelHeader: 'Javascript',
    PanelChildren: [
      { panelLink: 'Show All eCommerce', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
    ],
    key: "5"
  },
  {
    panelHeader: 'CSS',
    PanelChildren: [
      { panelLink: 'Show All eCommerce', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
    ],
    key: "6"
  },
  {
    panelHeader: 'Mobile',
    PanelChildren: [
      { panelLink: 'Show All eCommerce', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
    ],
    key: "7"
  },
  {
    panelHeader: 'HTML5',
    PanelChildren: [
      { panelLink: 'Show All eCommerce', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
    ],
    key: "8"
  },
  {
    panelHeader: 'Skins',
    PanelChildren: [
      { panelLink: 'Show All eCommerce', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
    ],
    key: "9"
  },
  {
    panelHeader: 'WP Themes',
    PanelChildren: [
      { panelLink: 'Show All eCommerce', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
    ],
    key: "10"
  },
  {
    panelHeader: 'Plugins',
    PanelChildren: [
      { panelLink: 'Show All eCommerce', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
    ],
    key: "11"
  },
  {
    panelHeader: 'Mockup Generator',
    PanelChildren: [
      { panelLink: 'Show All eCommerce', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
    ],
    key: "12"
  },
  {
    panelHeader: 'More',
    PanelChildren: [
      { panelLink: 'Show All eCommerce', href: '#' },
      { panelLink: 'Popular Items', href: '#' },
      { panelLink: 'Add-ons', href: '#' },
      { panelLink: 'Advertising', href: '#' },
      { panelLink: 'Calandars', href: '#' },
      { panelLink: 'eCommerce', href: '#' },
      { panelLink: 'Elementor', href: '#' },
      { panelLink: 'Forms', href: '#' },
    ],
    key: "13"
  }
]

let RightMenuItems =[
  { menuTxt: 'Guest Cart', href: '#', iconImgSrc: cart },
  { menuTxt: 'Create an Envato Account', href: '#', iconImgSrc: envato },
  { menuTxt: 'Sign In', href: '#', iconImgSrc: signIn },
]


export default function MyApp({ Component, pageProps }) {
  return (
    <div  className="body" style={{backgroundColor: '#eceef5'}}>
      <Header 
        TopMenuItems= {TopMenuItems}
        logo= {'https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-market-f6121fbbfec25dbc851a3e5aea13c8ad.svg'}
        dropdownTxt= {'Our Products'}
        Options={Options}
        menuIconTxt= {'Sign In'}
        NavMenuItems = {NavMenuItems}
        DropdownItems={DropdownItems}
        imgSrcIconLeft= {menu} 
        SelectOptions={SelectOptions}
        Panels={Panels}
        imgSrcIconRight= {user}
        RightMenuItems= {RightMenuItems}
      />
      <div className="mainWrapper">
      <Hero 
         headingTxt={'51,541 WordPress Themes & Website Templates From $2'}
         paraTxt={
           'WordPress themes, web templates and more. Brought to you by the largest global community of creatives.'}
         imgSrc={
           'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/themeforest/search-header-e9b1f87ec2352b50a7d1b2da92ee268d.png'}
         imgAlt={'Surfing and water sports theme'}
         btnTxt={'Search'}
         placeholder={'e.g. responsive WordPress'}
      />
      </div>

    </div>
  );
}