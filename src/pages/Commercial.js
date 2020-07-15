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
import bg18Image from 'assets/img/bg/1bhk.jpg';
import { Link,} from 'react-router-dom';

class Commercial extends React.Component {
  
  render() {
    return (
      <Page
        className="ButtonPage"
        title="Commercial services"
        breadcrumbs={[{ name: 'Commercial ', active: true }]}
      >

<Form>
     
<Row   className="justify-content-center">
  <Col xl={8} lg={8} md={12}>
    <Card>
     <CardBody>
        <Form>
        <FormGroup>
        <Input
              plaintext
              value='Commercial Sevice'
              readOnly
              style={{fontSize:27,fontWeight:'bold',alignSelf:'center',flex:1,textAlign:'center'}}/>
           
              <Input
              plaintext
              value='1 hr | Starting at Rs. 1000'
              readOnly
              style={{fontSize:20,fontWeight:'bold',alignSelf:'center',flex:1,textAlign:'center'}}/>
          </FormGroup>
            <FormGroup>
                         <Card className="flex-row">
      <CardImg
        className="card-img-left"
        src={bg18Image}
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
      <Link to="/commercialform"    style={{alignSelf:'center',marginBottom:30}} >
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

export default Commercial;
