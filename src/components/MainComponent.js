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
import { postComment, fetchComments, fetchDishes, fetchPromos, fetchLeaders, postFeedback } from '../redux/ActionCreaters';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = (state) => {
	return{
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders
	}
}
const mapDispatchToProps = (dispatch) => ({
	postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
	postFeedback: (feedback) => dispatch(postFeedback(feedback)),
	fetchDishes: () => dispatch(fetchDishes()),
	resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
	fetchPromos: () => dispatch(fetchPromos()),
	fetchComments: () => dispatch(fetchComments()),
	fetchLeaders: () => dispatch(fetchLeaders())
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
		this.props.fetchLeaders();
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
					leader = {this.props.leaders.leaders.filter((promo) => promo.featured)[0]}
					leadersLoading = {this.props.leaders.isLoading}
					leadersErrMess={this.props.leaders.errMess}
				/>
				);
		}
		return(
		<div>
		<Header />
			<TransitionGroup>
	            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
					<Switch>
						<Route path='/Home' component={HomePage} />
						<Route exact path='/menu' component={() => <Menu dishes = {this.props.dishes} />} />
						<Route path='/contactus' component={() => <Contact postFeedback = {this.props.postFeedback} />} />
						<Route path= '/menu/:dishId' component = {({match}) => <DishDetail 
							dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
							errMess = {this.props.dishes.errMess}
							isLoading = {this.props.dishes.isLoading}
							comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
							comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
							commentsErrMess={this.props.comments.errMess}
							postComment={this.props.postComment}
						/> } />
						<Route path = '/aboutus' component = {() => <About leaders = {this.props.leaders.leaders} /> } />
						<Redirect to ='/Home' />
					</Switch>
			   </CSSTransition>
			</TransitionGroup>
        <Footer />
      </div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));