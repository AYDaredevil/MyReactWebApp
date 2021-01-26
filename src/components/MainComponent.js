import React, {Component} from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import {DISHES} from '../dishes';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{

	constructor(props)
	{
		super(props);
		this.state = {
			dishes : DISHES,
			selectedDish : null
		};
	}


	render(){
		const HomePage = () => {
			return(
				<Home />
				);
		}
		return(
		<div>
		<Header />
       		<Switch>
       			<Route path='/Home' component={HomePage} />
       			<Route exact path='/menu' component={() => <Menu dishes = {this.state.dishes} />} />
       			<Redirect to ='/Home' />
       		</Switch>
        <Footer />
      </div>
		);
	}
}

export default Main;