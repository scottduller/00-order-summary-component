import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/shared/Global';
import { theme } from './components/shared/theme';
import Card from './components/Card';
import Attribution from './components/Attribution';
import { Wrapper } from './components/shared/SharedElements';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Wrapper>
				<Card />
				<Attribution />
			</Wrapper>
		</ThemeProvider>
	);
}

export default App;
