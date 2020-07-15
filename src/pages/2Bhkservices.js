import React from 'react';

import {
  Row,
  Col,
    Card,CardImg,
    CardBody,
  
} from 'reactstrap';
import { Button, Form, FormGroup, Input, } from 'reactstrap';

import Page from 'components/Page';
import bg2Image from 'assets/img/bg/2bhk.jpg';
import { Link, } from 'react-router-dom';

class Bhk2servies extends React.Component {
  componentDidMount=()=>
  {
   
  var RandomNumber = Math.floor(Math.random() * 50000) + 1 ;
   
  this.setState({
   
    ReferenceId : RandomNumber
   
  })
  }

  
  render() {
    return (
      <Page
        className="ButtonPage"
        title="2 BHK services"
        breadcrumbs={[{ name: '2 BHK ', active: true }]}
      >

<Form>
     
<Row    className="justify-content-center">

{/* <Col md={15} sm={6} xs={12} className="mb-3">
   
  </Col> */}
  <Col xl={8} lg={8} md={12}>
    <Card>
  
   <CardBody>
        <Form>
        <FormGroup>
        <Input
              plaintext
              value='BHK 2 Sevice'
              readOnly
              style={{fontSize:27,fontWeight:'bold',alignSelf:'center',flex:1,textAlign:'center'}}/>
            {/* <Input
              plaintext
              value='500 sq ft to 900 sq ft'
              readOnly
              style={{fontSize:20,fontWeight:'bold',alignSelf:'center',flex:1,textAlign:'center'}}/> */}
              <Input
              plaintext
              value='45 min | ₹1200'
              readOnly
              style={{fontSize:20,fontWeight:'bold',alignSelf:'center',flex:1,textAlign:'center'}}/>
          </FormGroup>
            <FormGroup>
             
            <Card className="flex-row">
      <CardImg
        className="card-img-left"
              src={bg2Image}
        style={{
          resizeMode: "cover",
          width: null,
          height: 400,
          flex: 1
        }}
      />
     
    </Card>
  
            </FormGroup>
        
        </Form>
      </CardBody>
      {/* <Button Redirect  to="/About/"  style={{width:300,alignSelf:'center',marginBottom:30}}>Book Now</Button> */}
      <Link to="/bhk2form"    style={{alignSelf:'center',marginBottom:30}} >
                                <Button  style={{width:300}}  >Book Now</Button>
                            </Link>
    
    </Card>
  </Col>

  
          
           
        
             
         
</Row>
        
            </Form>
       
      
      </Page> 
    );
  }
}

export default Bhk2servies;
