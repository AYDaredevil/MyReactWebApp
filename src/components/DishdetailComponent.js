import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, Button, ModalBody, ModalHeader, Modal,Label, Row,Col,
    CardTitle } from 'reactstrap';
import {Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required = (val) => (val && val.length);
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
class DishDetail extends Component{

    constructor(props)
    {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.state = {
            isModalOpen:false
        }
    }

    handleComment(values)
    {
        console.log(values);
        this.props.postComment(this.props.dish.id, values.rating, values.yourname, values.comment);
        this.toggleModal();
    }
    toggleModal()
    {
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }
    commentForm(){
        return( 
            <div className="col-md-6 offset-md-"> 
                 <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody >
                        <LocalForm onSubmit={(values) => this.handleComment(values)}>
                            <Row className="form-group">
                            <Label htmlFor="rating" md ={12}> Rating </Label>
                            <Col md={{size:10}}> 
                            <Control.select model=".rating" id="rating" name="rating"
                                className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                            </Col>
                            </Row>
							<Row className="form-group">
                                <Label htmlFor="yourname" md={12}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
										placeholder="Your Name"
										className = "form-control"
										validators = {{
											required,minLength : minLength(3), maxLength : maxLength(15 )
										}}
                                    />
									<Errors 
										className="text-danger"
										model = ".yourname"
										show = "touched"
										messages = {{
											required: 'Required',
											minLength: 'Must be greater than 2 charachters',
											maxLength: 'Must be 15 charachters or less'
										}}
									/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                            <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
										placeholder="Comment" rows="6"
										className = "form-control"
                                    />                            
                                </Col>  
                            </Row>
                            <Row className="form-group">
								<Col md={{ size: 10}}>
									<Button type="submit" color="primary">
										Submit Comment
                                    </Button>
								</Col>
							</Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
	renderComments(comments)
    {
        if(comments == null )
        {
        	return(
                    <div></div>
                );
        }
        let options = {year : "numeric", month : "short", day: "numeric"};
        const comment = comments.map((cmnt) => {
                return(
                    <Fade in>
                        <div class = "list-unstyled">
                                <li>{cmnt.comment}</li>
                                        <li>-- {cmnt.author}{" "} {new Date(cmnt
.date).toLocaleDateString("en-US", options)} </li>
                        </div>
                    </Fade>
                );
        });
        return(
                <div>
                    <Stagger in>
                        <h4> Comments </h4>
                        {comment}
                        <h1></h1>
                        {this.commentForm()}
                    </Stagger>
                </div>
        );
    }
	render()
	{
		const dish = this.props.dish;
        const comment = this.props.comments;
        if(this.props.isLoading)
        {
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
		else if (dish != null)
		{
            return(
            	<div className="container">
                <div className="row">
            	<div  className="col-12 col-md-5 m-1">
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg top src={baseUrl + '/'+ dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </FadeTransform>
                </div>
                <div  className="col-12 col-md-5 m-1">
                	{this.renderComments(comment)}
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