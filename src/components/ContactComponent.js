import React from 'react';

function Contact(props)
{
	return(
		<div class="container">
			<div className = "row row-content">
				<div className="col-12">
					<h3> Location Information </h3>
				</div>
				<div className="col-12 col-sm-4 offset-sm-1">
					<h5> Our Address </h5>
					<address>
						36, Devarshi Bungalows <br />
						Akesan Road, Palanpur <br />
						India <br />
						 <i className="fa fa-phone"></i>: +9112 1234 5678<br />
                        <i className="fa fa-fax"></i>: +9112 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:amit@food.net">amit@food.net</a>
                     
					</address>
				</div>
				<div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:amit@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
			</div>
		</div>
		);
}

export default Contact;