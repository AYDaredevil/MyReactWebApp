import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from "./DishdetailComponent";

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderComments(dish)
    {
    	if(dish == null || dish.comments == null)
    		return(
    			<div></div>
    			);
    	let options = {year : "numeric", month : "short", day: "numeric"};
    	const comment = dish.comments.map((cmnt) => {
    		return(
    			<div class = "list-unstyled">
    				<li>{cmnt.comment}</li>
					<li>-- {cmnt.author}{" "} {new Date(cmnt.date).toLocaleDateString("en-US", options)} </li>
    			</div>
    		);
    	});
    	return(
    		<div>
    			<h4> Comments </h4>
    			{comment}
    		</div>
    	);
    }
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    <DishDetail dish={this.state.selectedDish}/>
                  </div>
                  <div className="col-12 col-md-5 m-1">
                  	{this.renderComments(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}

export default Menu;