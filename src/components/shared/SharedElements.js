import styled from 'styled-components';
import bgMobile from '../images/pattern-background-mobile.svg';
import bgDesktop from '../images/pattern-background-desktop.svg';

export const Wrapper = styled.div`
	display: flex;
	background-image: url(${bgMobile});
	background-repeat: no-repeat;
	background-size: 100% auto;
	position: relative;
	height: 100vh;
	width: 100%;
	flex-direction: column;
	align-items: center;

	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.desktop}) {
		background-image: url(${bgDesktop});
	} ;
`;
