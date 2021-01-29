import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';

class Menu extends Component {

    render() {

        if(this.props.dishes.isLoading){
            return(
                <div className= "container">
                    <div className = "row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if(this.props.dishes.errMess){
                return(
                    <div className= "container">
                        <div className = "row">
                            <p>{this.props.errMess}</p>
                        </div>
                    </div>
                );
            }
        const menu = this.props.dishes.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}>
                	<Link to={`/menu/${dish.id}`}>
	                  <CardImg width="100%" src={dish.image} alt={dish.name} />
	                  <CardImgOverlay>
	                      <CardTitle>{dish.name}</CardTitle>
	                  </CardImgOverlay>
                	</Link>
                </Card>
              </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;