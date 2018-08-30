import App from './Components/App';
import Halo4ServiceRecord from './Components/Halo4/ServiceRecord';
// import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

export default (): React.ReactElement<Router> => (
	<Router>
		<App>
			<Switch>
				<Route
					component={Home}
					exact={true}
					path={'/'}
				/>
				<Route
					component={Halo4ServiceRecord}
					path={'/halo-4/:gamertag'}
				/>
			</Switch>
		</App>
	</Router>
);

{/*
<Route component={
	() => (
		<ErrorPage
			description={'The page you are looking for doesn\'t exist.. Are you sure it ever even existed? 🤔'}
			title={'Not found'}
		/>
	)}
/>
*/}
