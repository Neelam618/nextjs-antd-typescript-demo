import React from 'react';
import star from './../img/star.svg';
import cart from './../img/cart.svg';

import {
	ReactiveBase,
	SingleDropdownRange,
	ResultCard,
	ReactiveList,
	DataSearch,
	RangeInput
} from '@appbaseio/reactivesearch';

// import './search.less';

const Search = () => (
	<ReactiveBase
		app="myappdemo"
    	credentials='cnjg9Mh5k:c18fa74e-33d4-4460-807c-712b54e002f4'
		className='reactivebase'
		style={{maxWidth: 1600, margin: '0 auto'}} 
	>
		<div className='datasearch'>
			<DataSearch
				componentId="searchbox"
				dataField={["title", "author"]}
				// title="Search"
				fieldWeights={[1, 3]}
				placeholder="Search"
				autosuggest={true}
				showClear={true}
				// defaultSuggestions={[{label: "Wordpress", value: "Wordpress"}, {label: "Figma", value: "Figma"}]}
				highlight={true}
				highlightField="title"
				queryFormat="or"
				fuzziness={0}
				debounce={100}
				react={{
					and: ["CategoryFilter", "SearchFilter"]
				}}
				showFilter={true}
				filterLabel="Venue filter"
				URLParams={true}
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
						"start": 8,
						"end": 80
					}}
					defaultValue={{
						"start": 10,
						"end": 30
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
);

export default Search;