import React from 'react';
import {
	Card,
	CardBody,
	CardCancelBtn,
	CardImage,
	CardParagraph,
	CardPlan,
	CardPlanChange,
	CardPlanDetailPrice,
	CardPlanDetailTitle,
	CardPlanDetailWrapper,
	CardPlanImg,
	CardProceedBtn,
	CardTitle,
} from './CardElements';

import hero from '../images/illustration-hero.svg';

import icon from '../images/icon-music.svg';

const index = () => {
	return (
		<Card>
			<CardImage src={hero} />
			<CardBody>
				<CardTitle>Order Summary</CardTitle>
				<CardParagraph>
					You can now listen to millions of songs,
					audiobooks, and podcasts on any device anywhere
					you like!
				</CardParagraph>
				<CardPlan>
					<CardPlanImg src={icon} />
					<CardPlanDetailWrapper>
						<CardPlanDetailTitle>
							Annual Plan
						</CardPlanDetailTitle>
						<CardPlanDetailPrice>
							$59.99/year
						</CardPlanDetailPrice>
					</CardPlanDetailWrapper>
					<CardPlanChange>Change</CardPlanChange>
				</CardPlan>
				<CardProceedBtn>Proceed to Payment</CardProceedBtn>
				<CardCancelBtn>Cancel Order</CardCancelBtn>
			</CardBody>
		</Card>
	);
};

export default index;
