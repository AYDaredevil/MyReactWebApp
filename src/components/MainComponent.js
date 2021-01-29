import React, {Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Contact from './ContactComponent';
import { connect } from 'react-redux';
import { addComment, fetchComments, fetchDishes, fetchPromos } from '../redux/ActionCreaters';
import { actions } from 'react-redux-form';

const mapStateToProps = (state) => {
	return{
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders
	}
}
const mapDispatchToProps = (dispatch) => ({
	addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
	fetchDishes: () => dispatch(fetchDishes()),
	resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
	fetchPromos: () => dispatch(fetchPromos()),
	fetchComments: () => dispatch(fetchComments())
  });

class Main extends Component{

	constructor(props)
	{
		super(props);
	}

	componentDidMount() {
		this.props.fetchDishes();
		this.props.fetchComments();
		this.props.fetchPromos();
	}

	render(){
		console.log(this.props.dishes);
		const HomePage = () => {
			return(
				<Home 
					dish = {this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
					errMess = {this.props.dishes.errMess}
					isLoading = {this.props.dishes.isLoading}
					promotion = {this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
					promoLoading={this.props.promotions.isLoading}
             		promoErrMess={this.props.promotions.errMess}
					leader = {this.props.leaders.filter((promo) => promo.featured)[0]}
				/>
				);
		}
		return(
		<div>
		<Header />
       		<Switch>
       			<Route path='/Home' component={HomePage} />
       			<Route exact path='/menu' component={() => <Menu dishes = {this.props.dishes} />} />
       			<Route path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
				<Route path= '/menu/:dishId' component = {({match}) => <DishDetail 
					dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
					errMess = {this.props.dishes.errMess}
					isLoading = {this.props.dishes.isLoading}
					comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
					comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            		commentsErrMess={this.props.comments.errMess}
        			addComment={this.props.addComment}
      			/> } />
       			<Route path = '/aboutus' component = {() => <About leaders = {this.props.leaders} /> } />
       			<Redirect to ='/Home' />
       		</Switch>
        <Footer />
      </div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));