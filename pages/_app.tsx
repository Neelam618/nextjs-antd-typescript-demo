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
import MainCardsContainer from '../components/Sections/MainCardsContainer/MainCardsContainer'
import SubCardsContainer1 from '../components/Sections/SubCardsContainer1/SubCardsContainer1'
import SubCardsContainer2 from '../components/Sections/SubCardsContainer2/SubCardsContainer2'
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

let MainCardsContainerItems =[
  {
    titleHref: '#',
    titleTxt: 'WordPress Themes',
    paraTxt: 'Thousands of WordPress themes',
    link1Href: '#',
    link1Txt: 'Newest',
    link2Href: '#',
    link2Txt: 'BestSellers',
    iconImgSrc:
      'https://assets.market-storefront.envato.com/storefront/packs/media/images/category-icons/themeforest/wordpress-38017feb3efbc9d223cfb8472fba3cb8.svg',
    cardImgSrc:
      'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/themeforest/category-tiles-wordpress-04e605078599969bc24c2b465b73d1a3.png',
    cardImgAlt: 'WordPress Themes',
  },
  {
    titleHref: '#',
    titleTxt: 'eCommerce Templates',
    paraTxt: 'Beautiful website templates',
    link1Href: '#',
    link1Txt: 'Newest',
    link2Href: '#',
    link2Txt: 'BestSellers',
    iconImgSrc:
      'https://assets.market-storefront.envato.com/storefront/packs/media/images/category-icons/themeforest/ecommerce-6764e61d48ed9f67fcef55f6276819b8.svg',
    cardImgSrc:
      'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/themeforest/category-tiles-ecommerce-d069e8d98640114a13897ad7475202c8.png',
    cardImgAlt: 'eCommerce Templates',
  },
  {
    titleHref: '#',
    titleTxt: 'Site Templates',
    paraTxt: 'HTML and website templates',
    link1Href: '#',
    link1Txt: 'Newest',
    link2Href: '#',
    link2Txt: 'BestSellers',
    iconImgSrc:
      'https://assets.market-storefront.envato.com/storefront/packs/media/images/category-icons/themeforest/site-templates-4b524d1996efd02a14b8a78d6f827e04.svg',
    cardImgSrc:
      'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/themeforest/category-tiles-site-templates-e4da8eef2122e7d2c0178b1d5a63251f.png',
    cardImgAlt: 'Site Templates',
  },
  {
    titleHref: '#',
    titleTxt: 'Marketing Templates',
    paraTxt: 'Email, newsletter and landing page templates.',
    link1Href: '#',
    link1Txt: 'Newest',
    link2Href: '#',
    link2Txt: 'BestSellers',
    iconImgSrc:
      'https://assets.market-storefront.envato.com/storefront/packs/media/images/category-icons/themeforest/marketing-bfe20e6450d91d1d92e89f512af5cfe8.svg',
    cardImgSrc:
      'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/themeforest/category-tiles-marketing-aa0c86ed0c48d27c47350a89b393268a.png',
    cardImgAlt: 'Marketing Templates',
  },
  {
    titleHref: '#',
    titleTxt: 'CMS Templates',
    paraTxt: 'Over 1,700 CMS website templates',
    link1Href: '#',
    link1Txt: 'Newest',
    link2Href: '#',
    link2Txt: 'BestSellers',
    iconImgSrc:
      'https://assets.market-storefront.envato.com/storefront/packs/media/images/category-icons/themeforest/cms-themes-69e2462231b345dca78df22eee42c3d0.svg',
    cardImgSrc:
      'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/themeforest/category-tiles-cms-themes-dcf193e313c6cc9c0f9b26a394bb3283.png',
    cardImgAlt: 'CMS Templates',
  },
  {
    titleHref: '#',
    titleTxt: 'Blogging',
    paraTxt: 'Blogger templates and themes',
    link1Href: '#',
    link1Txt: 'Newest',
    link2Href: '#',
    link2Txt: 'BestSellers',
    iconImgSrc:
      'https://assets.market-storefront.envato.com/storefront/packs/media/images/category-icons/themeforest/blogging-96fbea50c1aa03e434845f5795e8aa2f.svg',
    cardImgSrc:
      'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/themeforest/category-tiles-blogging-a36c3a96508905ed8b77df66c9e8d4cf.png',
    cardImgAlt: 'Blogging',
  }
]

let SubCardsContainer1Items =[
  {
    imgSrc:
      'https://themeforest.img.customer.envatousercontent.com/files/331435158/preview20.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=f53a15b59e9f7654de4d2d900e954a7d',
    imgHref: '#',
    metaTitle: 'Kalles - Clean, Versatile, Responsive Shopify Theme - RTL support',
    metaDes: 'by The4',
  },
  {
    imgSrc:
      'https://themeforest.img.customer.envatousercontent.com/files/335174136/0_Preview_big.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=fa07ba70bc89d4b589d211fdab649d51',
    imgHref: '#',
    metaTitle: 'Discy - Social Questions and Answers WordPress Theme',
    metaDes: 'by 2codeThemes',
  },
  {
    imgSrc:
      'https://themeforest.img.customer.envatousercontent.com/files/321857191/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=5a3a602684c453e99ab69be51385205a',
    imgHref: '#',
    metaTitle: 'Avone - Multipurpose Shopify Theme',
    metaDes: 'by adornthemes',
  },
  {
    imgSrc:
      'https://themeforest.img.customer.envatousercontent.com/files/335482892/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=82c0a5a24d0665692743a79105ca5c81',
    imgHref: '#',
    metaTitle: 'Rey - Fashion & Clothing, Furniture',
    metaDes: 'by ThemeFuzz',
  },
]
let SubCardsContainer2Items =[
  {
    imgSrc:
      'https://themeforest.img.customer.envatousercontent.com/files/331435158/preview20.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=f53a15b59e9f7654de4d2d900e954a7d',
    imgHref: '#',
    metaTitle: 'Kalles - Clean, Versatile, Responsive Shopify Theme - RTL support',
    metaDes: 'by The4',
  },
  {
    imgSrc:
      'https://themeforest.img.customer.envatousercontent.com/files/335174136/0_Preview_big.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=fa07ba70bc89d4b589d211fdab649d51',
    imgHref: '#',
    metaTitle: 'Discy - Social Questions and Answers WordPress Theme',
    metaDes: 'by 2codeThemes',
  },
  {
    imgSrc:
      'https://themeforest.img.customer.envatousercontent.com/files/321857191/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=5a3a602684c453e99ab69be51385205a',
    imgHref: '#',
    metaTitle: 'Avone - Multipurpose Shopify Theme',
    metaDes: 'by adornthemes',
  },
  {
    imgSrc:
      'https://themeforest.img.customer.envatousercontent.com/files/335482892/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=82c0a5a24d0665692743a79105ca5c81',
    imgHref: '#',
    metaTitle: 'Rey - Fashion & Clothing, Furniture',
    metaDes: 'by ThemeFuzz',
  }
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
      <MainCardsContainer 
          MainCardsContainerItems={MainCardsContainerItems}
          btnTxt={'View All Categories'}
      />
      <SubCardsContainer1 
          SubCardsContainer1Items= {SubCardsContainer1Items}
          btnTxt= {'View all themes'}
      />

      <SubCardsContainer2 
          SubCardsContainer2Items= {SubCardsContainer2Items}
          title= {'Were the largest theme marketplace in the world'}
          card1Txt= {'Home of the most popular themes in the world'}
          card1ImgSrc=
            {'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/value-prop-icons/popular-f17ddb16bbcfb47b4d24656ef9bf5fa3.svg'}
          card2Txt= {'Clear documentation and theme support available'}
          card2ImgSrc=
            {'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/value-prop-icons/support-eaac5e66c8a5454ed083346094e404cd.svg'}
          card3Txt= {'Quality reviewed creators and items'}
          card3ImgSrc=
            {'https://assets.market-storefront.envato.com/storefront/packs/media/images/home/value-prop-icons/quality-1b3c0c21025219fdff69803474a2e018.svg'}
      />
      </div>

    </div>
  );
}