import React, { useState } from 'react'
import {
	HeroSection,
	ProfessionalsCardSmall,
	CarouselSection,
	DetailedProfessionalsCard,
	CardProfessionals,
} from '../../components/cards'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { arr } from '../../utils/data'

const LeaadersContainer = styled.div`
	display: flex;
	margin: 2rem 0;
	/* padding: 0; */
	gap: 3rem;
	flex-wrap: wrap;
	position: relative;

	div {
		/* flex-s */
	}
`

const Leadership = () => {
	const cardContentList = [
		{
			name: 'Connor Colquhoun',
			position: 'wine connoisseur',
			country: 'japan',
			location: 'New York, USA',
			mail: 'Connor.Wine@gmail.com',
			phone: '+1 (555) 555-5555',
			twitter: '@ConnorWine',
			LinkedIn: 'LinkedIn',
			description:
				'Occaecat officia esse ut laborum est Lorem laborum ad nisi consectetur. Reprehenderit nostrud irure incididunt nulla magna in aute .',
		},
		{
			name: 'Connor Colquhoun',
			position: 'wine lover',
			country: 'japan',
			location: 'New York, USA',
			mail: 'Connor.Wine@gmail.com',
			phone: '+1 (555) 555-5555',
			twitter: '@ConnorWine',
			LinkedIn: 'LinkedIn',
			description:
				'Occaecat officia esse ut laborum est Lorem laborum ad nisi consectetur. Reprehenderit nostrud irure incididunt nulla magna in aute .',
		},
		{
			name: 'Connor Colquhoun',
			position: 'wine enjoyer',
			country: 'japan',
			location: 'New York, USA',
			mail: 'Connor.Wine@gmail.com',
			phone: '+1 (555) 555-5555',
			twitter: '@ConnorWine',
			LinkedIn: 'LinkedIn',
			description:
				'Occaecat officia esse ut laborum est Lorem laborum ad nisi consectetur. Reprehenderit nostrud irure incididunt nulla magna in aute .',
		},
	]
	const [content, setContent] = useState(cardContentList[1])

	const handleClick = cardContent => {
		setContent(cardContent)
		console.log(cardContent)
	}
	console.log(content)
	return (
		<>
			<HeroSection title={'helthcare & live sciences leaders'} />

			<h4 className="m-4 fw-bold">LEADERS</h4>
			<div onClick={() => console.log('hello')}>Hello</div>
			<div
				style={{
					position: 'relative',
				}}
			>
				<ProfessionalsCardSmall />
			</div>
			<LeaadersContainer>
				<ProfessionalsCardSmall />
				<ProfessionalsCardSmall />
				<ProfessionalsCardSmall />
				<ProfessionalsCardSmall />
				<ProfessionalsCardSmall />
				<ProfessionalsCardSmall />
				<ProfessionalsCardSmall />
			</LeaadersContainer>
			<CarouselSection
				categoryCarousel={'Healthcare & Live Sciences News'}
				backgroundColor="var(--darkBlue)"
				arr={arr}
				titleColor="aqua"
			/>
		</>
	)
}

export default Leadership
