import bg11Image from 'assets/img/bg/pestControl.jpg';

import Page from 'components/Page';
//import { bgCards, gradientCards, overlayCards } from 'demos/cardPage';
//import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import React from 'react';
// import { Line } from 'react-chartjs-2';
import {
  
  Card,
  CardBody,
  CardImg,
  
  CardTitle,
  Col,
  
  Row,
} from 'reactstrap';
import { Link, } from 'react-router-dom';

// import articles from '../components/articles';

class PestType extends React.Component {

  state = {
    value: '1', 

};
  render(){
  return (
    <Page title="PestType Services" >
      <Row  className="justify-content-center">
        <Col md={3} sm={4} xs={12} className="mb-3">
          <Card  style={{widows:100,height:210}}>
            
            <CardImg
              className="card-img-left"
              src={ bg11Image}
              style={{ width: 'auto', height: 150 }}
            />
            <CardBody>
            <Link
  to={{
    pathname: "/PestServiceType",
    param: 1
    
  
  }}>
    
         
  <CardTitle>General Pest Control</CardTitle>
  </Link>
            </CardBody>
          </Card>
        </Col>

        <Col md={3} sm={4} xs={12} className="mb-3">
          <Card style={{widows:100,height:210}} >
            
            <CardImg
              className="card-img-right"
              src='https://image.freepik.com/free-photo/health-worker-fumigation-fogging-mosquitoes-carriers-dengue-zika-virus-malaria_38363-163.jpg'
              style={{ width: 'auto', height: 150 }}
            />
            <CardBody>
            <Link
  to={{
    pathname: "/PestServiceType",
    param: 2
    
  }}
  
>
        {/* data-param:{JSON.stringify({name:'1'})} */}
        {/* JSON_ListView_Clicked_Item: {1} */}
      
              <CardTitle>Fumigation Services</CardTitle>
              </Link>
            
            </CardBody>
          </Card>
        </Col>
      
      
       
      
        <Col md={3} sm={4} xs={12} className="mb-3">
          <Card style={{widows:100,height:210}}>
            <CardImg
              className="card-img-left"
              src='https://image.freepik.com/free-photo/health-worker-fumigation-fogging-mosquitoes-carriers-dengue-zika-virus-malaria_38363-163.jpg'
              style={{ width: 'auto', height: 150 }}
            />
            <CardBody>

            <Link
  to={{
    pathname: "/PestServiceType",
    param: 3 
    // data: sessionStorage.setItem("id", 1)
     // your data array of objects
  }}
  
>
              <CardTitle>Rodent Control</CardTitle>
              </Link>
             
            </CardBody>
          </Card>
        </Col>
        </Row>
        <Row className="justify-content-center">

        <Col md={3} sm={4} xs={12} className="mb-3">
          <Card style={{widows:100,height:210}}>
            
            <CardImg
              className="card-img-right"
              src='https://image.freepik.com/free-photo/health-worker-fumigation-fogging-mosquitoes-carriers-dengue-zika-virus-malaria_38363-163.jpg'
              style={{ width: 'auto', height: 150 }}
            />
            <CardBody>
            <Link
  to={{
    pathname: "/PestServiceType",
    param: 4
    // data: sessionStorage.setItem("id", 1)
     // your data array of objects
  }}
  
>
              <CardTitle>Termite Control</CardTitle>
              </Link>
            
            </CardBody>
          </Card>
        </Col>
      
        <Col md={3} sm={4} xs={12} className="mb-3">
          <Card  style={{widows:100,height:210}}>
            <CardImg
              className="card-img-left"
              src='https://image.freepik.com/free-vector/pest-control-service-illustration_1284-8981.jpg'
              style={{ width: 'auto', height: 150 }}
            />
            <CardBody>
            <Link
  to={{
    pathname: "/PestServiceType",
    param: 5 
    // data: sessionStorage.setItem("id", 1)
     // your data array of objects
  }}
  
>
              <CardTitle>Vector Control</CardTitle>
              </Link>
             
            </CardBody>
          </Card>
        </Col>

        <Col md={3} sm={3} xs={12} className="mb-3">
          <Card  style={{widows:100,height:210}}>
            
            <CardImg
              className="card-img-right"
              src='https://image.freepik.com/free-photo/man-work-fogging-eliminate-mosquito-preventing-spread-dengue-fever-zika-virus_35018-317.jpg'
              style={{ width: 'auto', height: 150 }}
               />
            <CardBody>
            <Link
  to={{
    pathname: "/PestServiceType",
    param: 6
    
     // your data array of objects
  }}
  
      >
              <CardTitle>Weed Control</CardTitle>
              </Link>
            
            </CardBody>
          </Card>
        </Col>
      </Row>
      

    

     
    </Page>
  );}
};

export default PestType;
