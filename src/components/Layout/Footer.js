import React, { Component } from 'react';
import { Button,FormGroup,Input,Card,CardBody,Form,Col, Container,Row } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard,faMobileAlt,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faInstagram,faFacebook,faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons' ;
// import { Link } from 'react-router-dom';
import {db} from '../../config'
let addItem = item => {
  db.collection("FooterInfo").doc().set({
    message: item.message,
    name: item.name,
    mobile: item.mobile,
    email: item.email,
    

    // pesttype: item.pesttype,
    // pestrate: item.pestrate
  });
};


class Footer extends Component{
  state = {
  
    name: '',
    mobile: '',
    email: '',
    message:''
    
  };



  handleChangeMessage = e => { this.setState({ message: e.target.value }); };
  handleChangeName = e => { this.setState({ name: e.target.value }); };
  handleChangeMobile = e => { this.setState({ mobile: e.target.value }); };
  handleChangeEmail = e => { this.setState({ email: e.target.value }); };


  handleSubmit = () => {
    // const { navigation } = this.props
    if (  this.state.message.length > 0 && this.state.name.length > 0 && this.state.mobile.length > 0 && this.state.email.length > 0  ) {
      addItem({ message: this.state.message, name: this.state.name, mobile: this.state.mobile, email: this.state.email, });
      console.log('Item saved successfully');
      alert('Item saved successfully');
      
    }
    else {
      alert("All Feilds are mandatory!");
    }
  };
    render(){
      
        return (
            <div style={{backgroundColor:"black",marginTop:20}} > 
               
               <Container >
                    <br></br>
                   <Row  className="justify-content-center"> 
                      <Col md="10" >
                      <Row className="justify-content-center"> 
                       <Col md ="6" >
                        <h4 className="footer">
                               <u>Contact Us </u> 
                            </h4> 
                            <div  style={{color:"white" }}> 
                           <p> <FontAwesomeIcon icon={faAddressCard}
                            fixedWidth style={{color:"white"}}></FontAwesomeIcon> 
                           Quality Pest Control Services in India  </p> 
                          
                           <p> Hauz Khas,</p>
                           <br />
                          
                           
                       
                            <FontAwesomeIcon icon={faMobileAlt} fixedWidth></FontAwesomeIcon> 99919191919<br />
                            <br></br>
                            <FontAwesomeIcon icon={faEnvelope} fixedWidth></FontAwesomeIcon>info@pestroke.com<br />
                            <br></br>
                            <p>© 2020 by Tech. Div. CWC</p>
                         
                            </div> 
                           </Col> 
                        
                       
<Col md="4"> 

                            <h4 style={{color:"white",textAlign:'center'}}>Write To us </h4>
                        <Card  className="footerCard " style={{borderColor:"black",width:400}} >
                        
                        <Form  className="footerCard " onSubmit={this.handleSubmit} >
							<CardBody> 
                            {/* <h4 className="footer" style={{ textAlign:"center"}}>Write To Us</h4> */}
							 
									<FormGroup>
									     <Input type="Name" className="form-control" placeholder="Name"   onChange={this.handleChangeName} />
									</FormGroup>
                                    <FormGroup>
									     <Input type="Email" className="form-control" placeholder="Email"   onChange={this.handleChangeEmail} />
									</FormGroup>
                  <FormGroup>
									     <Input type="Number" className="form-control" placeholder="Phone Number"  onChange={this.handleChangeMobile} />
									</FormGroup>
									 <FormGroup>
			                             <Input  type="textarea" className="form-control"  required="" placeholder="Message"   onChange={this.handleChangeMessage} ></Input>
									</FormGroup>
									 <FormGroup>
                                         <Button className="btn btn-info" block     onClick={this.handleSubmit}><b>Submit</b></Button>
                                    </FormGroup>
                                    </CardBody>
						</Form> 
                        
                        </Card>
                       
                        </Col>

                            
                       
                       
                        </Row>
                        </Col>
                        </Row>
                   <br></br>
                    <div style={{textAlign:"center"}}><h4 style={{color:"white"}}>Thank you for supporting us!</h4>
                    <a href="https://www.instagram.com/" target ="tab" title="Follow Us"> 
                     <FontAwesomeIcon className="insta" icon={faInstagram} ></FontAwesomeIcon> </a> &nbsp; 
                     <a href="https://www.facebook.com" target ="tab" title="Like Us">
                     <FontAwesomeIcon icon={faFacebook} className="fb" ></FontAwesomeIcon></a> &nbsp; 
                     <a href=" https://www.twitter.com/" target ="tab" title="Follow Us">
                     <FontAwesomeIcon icon= {faTwitter} className="tw"></FontAwesomeIcon></a>&nbsp;&nbsp;
                    <a href="https://www.linkedin.com/" target ="tab" title="Follow Us"> 
                     <FontAwesomeIcon className="linkdin" icon={faLinkedin} ></FontAwesomeIcon> </a> </div>
                    <hr color="white" style={{ height: '2px' }}></hr>
                  
<p style={{ textAlign: 'center',color:"white" }}>© 2020 Developed and managed by PEST Apply |</p>

</Container>
             
            </div>
        )
    }
}

export default Footer;