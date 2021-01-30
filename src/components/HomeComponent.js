import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';

class Home extends Component{
	RenderCard(item){
        console.log(this.props);
        if(this.props.isLoading){
            return(
                <div className= "container">
                    <div className = "row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if(this.props.errMess){
                return(
                    <div className= "container">
                        <div className = "row">
                            <p>{this.props.errMess}</p>
                        </div>
                    </div>
                );
            }
        else if(item){
            return(
                <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg src={baseUrl + '/'+ item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
                </FadeTransform>
                );
            }
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