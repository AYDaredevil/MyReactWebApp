import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

class Home extends Component{
	RenderCard(item){
		return(
			<Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
			);
		}
	render(){
		return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                  	{this.RenderCard(this.props.dish)}
                </div>
                <div className="col-12 col-md m-1">
                    {this.RenderCard(this.props.promotion)}
                </div>
                <div className="col-12 col-md m-1">
                    {this.RenderCard(this.props.leader)}
                </div>
            </div>
        </div>
    );
	}
}

export default Home;