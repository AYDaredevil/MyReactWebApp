import React, {Component} from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import {DISHES} from '../shared/dishes';
import {LEADERS} from '../shared/leaders';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import Contact from './ContactComponent';

class Main extends Component{

	constructor(props)
	{
		super(props);
		this.state = {
			dishes : DISHES,
			comments : COMMENTS,
			promotions : PROMOTIONS,
			leaders : LEADERS
		};
	}


	render(){
		const HomePage = () => {
			return(
				<Home 
					dish = {this.state.dishes.filter((dish) => dish.featured)[0]}
					promotion = {this.state.promotions.filter((promo) => promo.featured)[0]}
					leader = {this.state.leaders.filter((promo) => promo.featured)[0]}
				/>
				);
		}
		return(
		<div>
		<Header />
       		<Switch>
       			<Route path='/Home' component={HomePage} />
       			<Route exact path='/menu' component={() => <Menu dishes = {this.state.dishes} />} />
       			<Route path='/contactus' component={Contact} />
       			<Redirect to ='/Home' />
       		</Switch>
        <Footer />
      </div>
		);
	}
}

export default Main;