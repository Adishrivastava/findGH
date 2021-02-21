import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Users from './components/users/Users';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import './App.css';
import GithubState from './contexts/github/GithubState';

const App = () => {
	return (
		<GithubState>
			<Router>
				<div className="App">
					<Navbar />
					<div className="container">
						<Alert alert={alert} />
						<Switch>
							<Route
								exact
								path="/"
								render={(props) => (
									<Fragment>
										<Search />
										<Users />
									</Fragment>
								)}
							/>
							<Route exact path="/about" component={About} />
						</Switch>
					</div>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;
