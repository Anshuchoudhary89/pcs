import React from 'react';

import {
  Row,
  Col,
  CardImg,

  Card,
 
  CardBody,
 
} from 'reactstrap';
import { Button, Form, FormGroup, Input, } from 'reactstrap';

import Page from 'components/Page';
import bg3Image from 'assets/img/bg/3bhk.jpg';
import { Link, } from 'react-router-dom';

class Bhk3servies extends React.Component {
  

  
  render() {
    return (
      <Page
        className="ButtonPage"
        title="3 BHK services"
        breadcrumbs={[{ name: '3 BHK ', active: true }]}
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
              value='3 BHK  Sevice'
              readOnly
              style={{fontSize:27,fontWeight:'bold',alignSelf:'center',flex:1,textAlign:'center'}}/>
           
              <Input
              plaintext
              value='1 hr | ₹1700'
              readOnly
              style={{fontSize:20,fontWeight:'bold',alignSelf:'center',flex:1,textAlign:'center'}}/>
          </FormGroup>
            <FormGroup>
             
            <Card className="flex-row">
      <CardImg
        className="card-img-left"
        src={bg3Image}
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
     
      <Link to="/bhk3form"    style={{alignSelf:'center',marginBottom:30}} >
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

export default Bhk3servies;
