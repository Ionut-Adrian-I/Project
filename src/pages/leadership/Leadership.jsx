import React, { useState } from 'react'
import {
	HeroSection,
	ProfessionalsCardSmall,
	CarouselSection,
} from '../../components/cards'
import styled from 'styled-components'
import { leadersList, arr, links } from '../../utils/data'
import {
	Navbar,
	NavbarCell,
	NavbarDropdown,
	SearchBar,
} from '../../components/NavbarComponents'
import CurrentRoute from '../../components/CurrentRoute'

const LeaadersContainer = styled.div`
	display: grid;

	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 4rem;
	position: relative;
`

const Leadership = () => {
	const [openedState, setOpenedState] = useState(
		Array.from(leadersList, () => false)
	)

	const handleDisplay = index => {
		console.log('this is the index', index)
		if (!openedState[index]) {
			let arr = Array.from(leadersList, () => false)
			arr[index] = true
			setOpenedState([...arr])
		} else {
			setOpenedState(Array.from(leadersList, () => false))
		}
	}

	return (
		<>
			<HeroSection title={'helthcare & live sciences leaders'} />

			<Navbar searchBar spread>
				<NavbarCell href={'asd'}>Fuck</NavbarCell>
				<NavbarCell>Fuck1</NavbarCell>
				<NavbarCell>Fuck2</NavbarCell>
				<NavbarDropdown links={links}>Something</NavbarDropdown>
				<NavbarDropdown links={links}>DropDown</NavbarDropdown>
			</Navbar>

			<div className="m-4">
				<LeaadersContainer>
					{leadersList.map((cardInfo, index) => {
						return (
							<ProfessionalsCardSmall
								key={index}
								cardInfo={cardInfo}
								index={index}
								openedState={openedState}
								handleDisplay={handleDisplay}
								showDetails={openedState[index]}
							/>
						)
					})}
				</LeaadersContainer>
			</div>

			<CarouselSection
				categoryCarousel={'Healthcare & Live Sciences News'}
				backgroundColor="#002B49"
				arr={arr}
				titleColor="#0085CA"
				textColor="#fff"
				textDate="#FFF"
				carouselDotBackground="#002b49"
			/>
		</>
	)
}

export default Leadership
