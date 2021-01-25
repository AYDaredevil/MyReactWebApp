import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


class DishDetail extends Component{

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
                                        <li>-- {cmnt.author}{" "} {new Date(cmnt
.date).toLocaleDateString("en-US", options)} </li>
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
	render()
	{
		const dish = this.props.dish;
		if (dish != null)
		{
            return(
            	<div className="container">
                <div className="row">
            	<div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                <div  className="col-12 col-md-5 m-1">
                	{this.renderComments(dish)}
                </div>
                </div>
                </div>
            );
        }
        else
        {
            return(
                <div></div>
            );
        }
	}
}

export default DishDetail;