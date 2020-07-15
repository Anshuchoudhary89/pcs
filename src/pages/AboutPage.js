import React from 'react';

// import { getColor } from 'utils/colors';
// import { randomNum } from 'utils/demos';

import { Row, Col, Card,  CardBody, Container, CardText, CardTitle, CardSubtitle, CardImg } from 'reactstrap';

// import { Line, Pie, Doughnut, Bar, Radar, Polar } from 'react-chartjs-2';

// import Page from 'components/Page';
import homepestye from 'assets/img/bg/pestControl.jpg';





class AboutPage extends React.Component
 {
  render()
  {
  return (
    <Container>
    
    <Row    className="justify-content-center">
 <Col>
 
    <Card  style={{flexDirection:'row',marginTop:60,padding:10}}   >
      <div style={{flexDirection:'column'}}>
      <CardTitle    style={{marginTop:10,fontWeight:'900',color:'black'}}><h3>About Pestroke India</h3></CardTitle>
      <CardSubtitle     style={{marginTop:5,color:'red'}}><h6>With Us the Grass is Greener and Homes are Cleaner </h6></CardSubtitle>
      <CardText    style={{marginTop:20}}>
      We are a division of Central Warehousing Corporation (CWC). Government of India, vide notification dated 23rd March 1968 entrusted CWC with an additional responsibility to undertake Pest Control Services beyond its warehouses. We are providing pest control services from more than 60 years and have become one of the renowned pest control operator in India.
We are providing Quality Pest Control Services (PCS) i.e., general disinfestation services, disinfection against germs and microbes (virus, bacteria & fungi), termite treatment, rodent, mosquitoes, weed control, etc. to its various clients in government and private sectors on PAN India basis.
      </CardText>
      </div>
      <CardImg
        className="card-img-right"
        src={homepestye}
        style={{
          marginLeft:30,
          width:"auto",
          height: 400,
          flex: 1
        }}
      />
      <CardBody>
        
      </CardBody>
    </Card>
    <br></br>
    <br></br>  
    
  </Col>

</Row>
</Container>
  );
};
 }

export default AboutPage;
