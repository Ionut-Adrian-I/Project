import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import { PostCard, HeroSection, CarouselSection } from '../../components/cards'
import {
	FiltrationNavbar,
	NavbarDropdown,
} from '../../components/navbarComponents'

import { BreadCrumb, FilterBy } from '../../components'
import { filtrationNavbarData, PostsArr } from '../../utils/data'
// import { getArticle } from '../../API'
import { getArticles } from '../../API'

const PostsContainer = styled.div`
	padding: 2rem;
	margin: auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`

const InsightLatest = () => {
	const [filterByTags, setFilterByTags] = useState(['fuck', 'fuck', 'fuck2'])

	// Getting the latest articles from server
	const [postContent, setPostContent] = useState([])
	useEffect(() => {
		getArticles(setPostContent, 'latest insights')
	}, [])

	console.log(postContent)

	return (
		<>
			<HeroSection
				title=" Latest Studies"
				backgroundUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
			/>

			<FiltrationNavbar
				searchBar2={'search'}
				setFilterByTags={setFilterByTags}
				filterByTags={filterByTags}
			>
				{filtrationNavbarData.map((item, index) => (
					<NavbarDropdown data={item.tagNames} key={index}>
						{item.title}
					</NavbarDropdown>
				))}
			</FiltrationNavbar>

			<FilterBy setFilterByTags={setFilterByTags} filterByTags={filterByTags} />

			<BreadCrumb route={'Insights'} subRoute={'Latest Insights'} />

			<PostsContainer>
				{postContent.map((post, index) => (
					<PostCard {...post} key={index} />
				))}
			</PostsContainer>
			<CarouselSection
				categoryCarousel={'Healthcare & Live Sciences News'}
				backgroundColor="#002B49"
				arr={PostsArr}
				titleColor="#0085CA"
				textColor="#fff"
				textDate="#fff"
				carouselDotBackground="#002b49"
			/>
		</>
	)
}

export default InsightLatest
