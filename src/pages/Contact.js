import React from 'react';
import {
    Container,  Button, 
    Row, Col, Form, FormGroup, InputGroup, InputGroupText, InputGroupAddon, Input,
} from 'reactstrap';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeart, faMapMarkerAlt, faPenAlt, faPhone, faStickyNote, faSignature, } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons';


import '../AppFile.css'
// import Page from 'components/Page';
import { db } from '../config';

let addItem = item => {
  db.collection("ContactPage").doc().set({
    message: item.message,
    name: item.name,
    mobile: item.mobile,
    email: item.email,
    

    // pesttype: item.pesttype,
    // pestrate: item.pestrate
  });
};

// const Marker = props => {
//   return <div></div>
// }
class Contact extends React.Component {
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

 

  render() {
    return (
      <div className="Background ">
      <Container className="px-4">
          <br></br>
          <Row className="justify-content-center">

              <h2 style={{ color: "white" }}>CONTACT</h2>

          </Row>
          <hr color="white"></hr>

          <Row className="justify-content-center">
              <h5 style={{ color: "white" }}>We'd <FontAwesomeIcon icon={faHeart} ></FontAwesomeIcon> to help!</h5>
          </Row>

          

          <br></br><br></br>

          <Row className="justify-content-center">
              <Col md={5}>
              <Form  className="footerCard " onSubmit={this.handleSubmit} >
						
                            {/* <h4 className="footer" style={{ textAlign:"center"}}>Write To Us</h4> */}
							 
									<FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                  <InputGroupText style={{ backgroundColor: "white" }}>

<FontAwesomeIcon className="hcolor" icon={faSignature} aria-hidden="true" ></FontAwesomeIcon>
</InputGroupText>
</InputGroupAddon>
									     <Input type="Name" className="form-control" placeholder="Name"   onChange={this.handleChangeName} />
                       </InputGroup>
									</FormGroup>
                                    <FormGroup>
                                    <InputGroup className="input-group-alternative mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText style={{ backgroundColor: "white" }}>

                                                <FontAwesomeIcon className="hcolor" icon={faEnvelope} aria-hidden="true" ></FontAwesomeIcon>
                                            </InputGroupText>
                                        </InputGroupAddon>
									     <Input type="Email" className="form-control" placeholder="Email"   onChange={this.handleChangeEmail} />
                       </InputGroup>
									</FormGroup>
                  <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText style={{ backgroundColor: "white" }}>

                                                <FontAwesomeIcon className="hcolor" icon={faPenAlt} aria-hidden="true" ></FontAwesomeIcon>
                                            </InputGroupText>
                                        </InputGroupAddon>
									     <Input type="Number" className="form-control" placeholder="Phone Number"  onChange={this.handleChangeMobile} />
                       </InputGroup>
									</FormGroup>
									 <FormGroup>
                   <InputGroup className="input-group-alternative mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText style={{ backgroundColor: "white" }}>

                                                <FontAwesomeIcon className="hcolor" icon={faStickyNote} aria-hidden="true" ></FontAwesomeIcon>
                                            </InputGroupText>
                                        </InputGroupAddon>
			                             <Input  type="textarea" className="form-control"  required="" placeholder="Message"   onChange={this.handleChangeMessage} ></Input>
                                   </InputGroup>   
									</FormGroup>
									 <FormGroup>
                                         <Button className="btn btn-info" block     onClick={this.handleSubmit}><b>Send</b></Button>
                                    </FormGroup>
                                   
						</Form> 
              </Col>
              <Col md={1}></Col>
              <Col md={6}>


                  <Row className="justify-content-center" style={{paddingTop:"30px"}}>
                      <Col sm ={1} xs={1} md={2}>
                          <FontAwesomeIcon style={{ color: "white", fontSize: "20px" }} icon={faMapMarkerAlt} ></FontAwesomeIcon> <br></br>
                          <FontAwesomeIcon style={{ color: "white", fontSize: "20px", transform: "rotate(90deg)", marginTop: "50px" }} icon={faPhone} ></FontAwesomeIcon> <br></br>
                          <FontAwesomeIcon style={{ color: "white", fontSize: "20px", marginTop: "20px" }} icon={faEnvelope} ></FontAwesomeIcon><br></br>

                      </Col>
                      <Col sm ={11} xs={11} md={8}>
                          <div style={{ textAlign: "Center",color:"white" }}>
                          Hauz Khas New Delhi

                     <br></br><br></br><br></br>
                     99919191919
                      <br></br> <br></br>
                      info@pestroke.com
                  </div>

                      </Col>

                  </Row>
                  <br></br><br></br>
                  <hr color="white"></hr>
                  <Row className="justify-content-center">
                     <p style={{color:"white"}}> www.pestroke.com</p>
                  </Row>
              </Col>
          </Row>


      </Container>



      <br></br>
      <br></br>
      <br></br>
     

  </div>
    );
  }
}

export default Contact;

 
