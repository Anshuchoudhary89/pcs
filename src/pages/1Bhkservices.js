import React from 'react';

import {
  Button,
  Card,
  CardBody,
 
  Col,
  Form,
  
  FormGroup,
 
  Input,
 
  Row,
    CardImg,
    
} from 'reactstrap';

import Page from 'components/Page';
import bg18Image from 'assets/img/bg/1bhk.jpg';
import { Link,} from 'react-router-dom';


class Bhk1servies extends React.Component {
  
    state = {
        quantity: '',
        name: '',
        mobile: '',
        email: '',
        address: '',
        date:'',
        Shift:'',
        Unit:[],
        Time:'',
        time:[],
        ReferenceId: 1,
        pestservicename: '',
        modalVisible: false,
       
         
      };
      // constructor(props) {
      //   super(props);
      //   // this.subpesttype = [];
      //   // this.pestratedata = [];
      //   // this.location = [];
      //   // this.servicepackage = [];
      //   // this.showSpinner = false;
      //   // this.getLocation();
      // }

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
        title="1 BHK services"
        breadcrumbs={[{ name: '1 BHK ', active: true }]}
      >

      <Row   className="justify-content-center">

      {/* <Col md={15} sm={6} xs={12} className="mb-3">
         
        </Col> */}
        <Col xl={8} lg={8} md={12}>
          <Card>
        
         <CardBody>
              <Form>
              <FormGroup>
              <Input
                    plaintext
                    value='BHK 1 Sevice'
                    readOnly
                    style={{fontSize:27,fontWeight:'bold',alignSelf:'center',flex:1,textAlign:'center'}}/>
                  <Input
                    plaintext
                    value='500 sq ft to 900 sq ft'
                    readOnly
                    style={{fontSize:20,fontWeight:'bold',alignSelf:'center',flex:1,textAlign:'center'}}/>
                    <Input
                    plaintext
                    value='30 min | ₹700'
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
            <Link to="/bhk1form"    style={{alignSelf:'center',marginBottom:30}} >
                                <Button  style={{width:300}}  >Book Now</Button>
                            </Link>
          
          </Card>
        </Col>
   
               
      </Row>
</Page>
    );
  }
}

export default Bhk1servies;
