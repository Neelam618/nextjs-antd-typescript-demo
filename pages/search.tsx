import React from 'react';
import star from './../img/star.svg';
import cart from './../img/cart.svg';
import menu from '../img/drawer-menu.svg';
import user from '../img/user.svg';
import envato from '../img/envato.svg';
import signIn from '../img/sign-in.svg';
import Insta from '../img/instagram.svg';
import Twitter from '../img/twitter.svg';
import Dribble from '../img/dribble.svg';
import Youtube from '../img/youtube.svg';
import Github from '../img/github.svg';
import Header from '../components/Header/Header';
import Footer1 from '../components/Footer/Footer1'

import {
	ReactiveBase,
	SingleDropdownRange,
	ResultCard,
	ReactiveList,
	CategorySearch,
	RangeInput
} from '@appbaseio/reactivesearch';

import './search.less';

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

const Search = () => (
	<>
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
	<ReactiveBase
		app="myappdemo"
    	credentials='cnjg9Mh5k:c18fa74e-33d4-4460-807c-712b54e002f4'
		style={{maxWidth: 1600, margin: '0 auto', paddingTop: 15, paddingBottom: '12rem'}} 
	>
		<div className='datasearch'>
		<CategorySearch
				componentId="searchbox"
				dataField="title"
				categoryField="title.keyword"
				placeholder="Search"
				autosuggest={false}
				highlight={true}
				style={{
					padding: '5px',
					marginTop: '10px',
					marginBottom: '3rem'
				}}
			/>
		</div>
		<div className="row reverse-labels">
			<div className="col">
				<SingleDropdownRange
					componentId="TemplateSensor"
					dataField="average_rating_rounded"
					title="Rating"
					URLParams={true}
					data={[
						{ start: 0, end: 3, label: 'Rating < 3' },
						{ start: 3, end: 4, label: 'Rating 3 to 4' },
						{ start: 4, end: 5, label: 'Rating > 4' },
					]}
				/>
				<RangeInput
					componentId="RangeInputSensor"
					dataField="price"
					title="Price"
					range={{
						"start": 10,
						"end": 80
					}}
					defaultValue={{
						"start": 27,
						"end": 72
					}}
					rangeLabels={{
						"start": "From",
						"end": "To"
					}}
					showFilter={true}
					stepValue={1}
					showHistogram={true}
					interval={2}
					react={{
						and: ["CategoryFilter", "SearchFilter", "RangeInputSensor"]
					}}
					URLParams
					style={{marginTop: 30}}
				/>
			</div>
			<div className="col" style={{ backgroundColor: '#fafafa' }}>
				<ReactiveList
					componentId="SearchResult"
					dataField="title"
					size={12}
					pagination
					URLParams
					react={{
						and: ['TemplateSensor', 'searchbox', 'RangeInputSensor'],
					}}
					render={({ data }) => (
						<ReactiveList.ResultCardsWrapper>
							{data.map(item => (
								<ResultCard href={item.url} key={item.id}>
									<ResultCard.Image src={item.image} />
										<div style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
											<ResultCard.Title>
												<div
													className="card-title"
													dangerouslySetInnerHTML={{
														__html: item.title,
													}}
												/>
											</ResultCard.Title>
											<div className="card-content">
												<ResultCard.Description>
													<div className="authors-list">
														<i>by</i>{' '}{item.authors}
													</div>
													<div className='item-price'>
														${item.price}
													</div>
													<div className="ratings-list">
														{Array.apply(null, { length: item.average_rating_rounded }).map(() => {
															return <img src={star} alt="" width="15px" style={{marginRight: 2}}/>
														})}
													</div>
													<div className='sales'>{item.sales} Sales</div>
												</ResultCard.Description>
												<div className='card-content-links'>
													<a href={item.preview_link} target="_blank" className='preview-link'>Preview</a>
													<a href={item.url} target="_blank" className='cart-link'><img src={cart} width="15px"></img></a>
												</div>
											</div>
										</div>
								</ResultCard>
							))}
						</ReactiveList.ResultCardsWrapper>
					)}
				/>
			</div>
		</div>
	</ReactiveBase>
	<Footer1 
         copyRightTxt={'© 2021 Envato Pty Ltd. Trademarks and brands are the property of their respective owners.'}
         HrefsWithImgSrcs= {[
           { imgSrc: Twitter, href: 'https://twitter.com/' },
           { imgSrc: Insta, href: 'https://instagram.com/' },
           { imgSrc: Dribble, href: 'https://dribble.com/' },
           { imgSrc: Youtube, href: 'https://youtube.com/' },
           { imgSrc: Github, href: 'https//github.com' },
         ]}
      />
	</>
);

export default Search;