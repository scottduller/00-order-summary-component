import styled from 'styled-components';

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 1em;
	background-color: white;
	margin: 1em 3em;
	width: min(90vw, 27em);
`;

export const CardImage = styled.img`
	border-radius: 1em 1em 0 0;
`;

export const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 3em;
	gap: 1.5em;
`;

export const CardTitle = styled.h2`
	font-weight: 900;
	color: ${({ theme }) => theme.colors.darkBlue};
`;

export const CardParagraph = styled.p`
	color: ${({ theme }) => theme.colors.desaturatedBlue};

	line-height: 1.75em;
`;

export const CardPlan = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.veryPaleBlue};
	border-radius: 1em;
`;

export const CardPlanImg = styled.img`
	padding: 1.5em;
`;

export const CardPlanDetailWrapper = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
`;

export const CardPlanDetailTitle = styled.p`
	font-weight: 900;
	color: ${({ theme }) => theme.colors.darkBlue};
	margin-bottom: 0.25em;
`;

export const CardPlanDetailPrice = styled.p`
	color: ${({ theme }) => theme.colors.desaturatedBlue};
`;

export const CardPlanChange = styled.a`
	color: ${({ theme }) => theme.colors.brightBlue};
	font-weight: 900;
	text-decoration: underline;
	margin-left: auto;
	padding: 1.5em;

	&:hover {
		opacity: 80%;
		cursor: pointer;
		text-decoration: none;
	}
`;

export const CardProceedBtn = styled.a`
	color: white;
	font-weight: 900;
	background-color: ${({ theme }) => theme.colors.brightBlue};
	border-radius: 1em;
	padding: 1em;
	margin: 0.5em 0;
	box-shadow: ${({ theme }) => theme.colors.desaturatedBlue} 0px
		30px 25px -20px;

	&:hover {
		opacity: 80%;
		cursor: pointer;
	}
`;

export const CardCancelBtn = styled.a`
	color: ${({ theme }) => theme.colors.desaturatedBlue};
	font-weight: 900;
	&:hover {
		color: ${({ theme }) => theme.colors.darkBlue};
		cursor: pointer;
	}
`;
