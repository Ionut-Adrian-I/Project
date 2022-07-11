import React from 'react'
import { Button, Card, Row, Col, Container } from 'react-bootstrap'
import YellowButton from '../../../components/buttons/YellowButton'
import { NewsCell } from './subPages.style'
import CardProfessionals from '../../../components/cards/CardProfessionals'
import CareersInDigital from '../../../components/cards/CareersInDigital'
import image from '../../../assets/images/ConnorWine'
import Over from './Over.style.css'
import styled from 'styled-components'



	
const Overview = () => {
	// Card overview content from backend
	const cardContent = {
		imageSrc: image,
		name: 'Connor Colquhoun',
		position: 'wine connoisseur',
		country: 'japan',
		buttonText: "connect",
	}
	return (
		<>
			<Row className='p-0 m-0 d-flex flex-column flex-lg-row'>
				<Col className="m-4 col-8">
					<h1 className="my-4">
						Lorem IpsuCulpa sint magna ullamco irure reprehenderit occaecat
					</h1>
					<p>
						Esse incididunt deserunt esse aute. Est proident excepteur deserunt
						cillum labore ea esse eiusmod do aliqua anim. Eiusmod elit enim id
						dolor aliquip occaecat velit proident.
					</p>
					<p>
						Esse incididunt deserunt esse aute. Est proident excepteur deserunt
						in in minim sunt exercitation et ipsum dolor et. Commodo cillum
						dolor aliquip occaecat velit proident.
					</p>
					<Container
						className=" my-4 p-4 "
						style={{ background: 'var(--gray1' }}
					>
						<Row>
							<Col>
								<h4 className="fw-bold text-primary">Our Capabilities</h4>
								<Row className="my-4 fw-bold">
									<Col>
										<div>Digital Strategy</div>
										<div>Digital Strategy</div>
									</Col>
									<Col>
										<div>Digital Strategy</div>
										<div>Digital Strategy</div>
									</Col>
									<Col>
										<div>Digital Strategy</div>
										<div>Digital Strategy</div>
										{/* <img src={digital}></img> */}
									</Col>
								</Row>
								<YellowButton
									text={'Read more about our Capabilities'}
								></YellowButton>
							</Col>
						</Row>
					</Container>

					<h2 className="fw-bold">Related Insight</h2>
					<Row>
						<Col>
							<NewsCell>
								<h4 className="fw-bold">Lorem</h4>
								<p className="text-muted">15/5/2020</p>
							</NewsCell>
							<NewsCell>
								<h4 className="fw-bold">Lorem</h4>
								<p className="text-muted">15/5/2020</p>
							</NewsCell>
							<NewsCell>
								<h4 className="fw-bold">Lorem</h4>
								<p className="text-muted">15/5/2020</p>
							</NewsCell>
						</Col>
						<Col>
							<NewsCell>
								<h4 className="fw-bold">Lorem</h4>
								<p className="text-muted">15/5/2020</p>
							</NewsCell>
							<NewsCell>
								<h4 className="fw-bold">Lorem</h4>
								<p className="text-muted">15/5/2020</p>
							</NewsCell>
							<NewsCell>
								<h4 className="fw-bold">Lorem</h4>
								<p className="text-muted">15/5/2020</p>
							</NewsCell>
						</Col>
					</Row>
				</Col>
				<Col className="p-lg-0 flex-grow-1 gap-3 w-100 px-0 mt-4 mt-lg-0 ms-lg-4 " id='special'>
					<CardProfessionals {...cardContent} />
					

					<CareersInDigital />
				</Col>
			</Row>
		</>
	)
}

export default Overview
