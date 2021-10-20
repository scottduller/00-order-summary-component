# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   See hover states for interactive elements

### Screenshot

<p align="center">
<img src="screenshot.png" width="300"/>
</p>
### Links

-   Solution URL: [Solution](https://github.com/scottduller/00-order-summary-component)
-   Live Site URL: [Live Site](https://scottduller.github.io/00-order-summary-component/)

## My process

### Built with

-   Semantic HTML5 markup
-   Flexbox
-   Mobile-first workflow
-   [React](https://reactjs.org/) - JS library
-   [Styled Components](https://styled-components.com/) - For styles

### What I learned

I discovered new methods of responsive padding and width using

```js
export const Card = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 1em;
	background-color: white;
	margin: 1em 3em;
	width: min(90vw, 27em);
`;
```

I also learnt how using styled components makes a more logical and organised system for CSS style in a component based environment.

```js
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
```

### Continued development

Continuing with the frontend mentor projects I will continue to research more effective responsive methods for CSS and learn more advanced styled component techniques to make an easier CSS workflow.

## Author

-   Website - [Scott Duller](https://github.com/scottduller)
-   Frontend Mentor - [@scottduller](https://www.frontendmentor.io/profile/scottduller)
