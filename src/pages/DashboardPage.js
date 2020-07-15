
import Page from 'components/Page';
import AboutPage from './AboutPage';
import React from 'react';
import { Link, } from 'react-router-dom';
import { UncontrolledCarousel } from 'reactstrap';
import bg2Image from 'assets/img/bg/2bhk.jpg';
import bg18Image from 'assets/img/bg/1bhk.jpg';
import bg3Image from 'assets/img/bg/3bhk.jpg';
import latest from  'assets/img/bg/latest.PNG';
import {
  CardImg,CardTitle, Card, CardBody,   Col,    Row,  } from 'reactstrap';

// import { getColor } from 'utils/colors';

const items = [
  {
    src: 'https://s3-ap-southeast-1.amazonaws.com/production-modular-kitchens/static-pages/images/fullhouse-furnishing/offers/root/progressive-images/2bhk/livingroom.jpg',
    altText: '',
    caption: '',
    header: '',
    key: '1'
  },
  {
    src: 'https://static.wixstatic.com/media/72cf6390afb346699e228bf792dafcbd.jpg/v1/fill/w_980,h_606,al_c,q_85,usm_0.66_1.00_0.01/72cf6390afb346699e228bf792dafcbd.webp',
    altText: '',
    caption: '',
    header: '',
    key: '2'
  },
  {
    src: 'https://static.wixstatic.com/media/11062b_5a1d197bb5c64f5dba59d7dfdcf2144b~mv2.jpg/v1/fill/w_980,h_606,al_c,q_85,usm_0.66_1.00_0.01/11062b_5a1d197bb5c64f5dba59d7dfdcf2144b~mv2.webp',
    altText: '',
    caption: '',
    header: '',
    key: '3'
  }
];

class DashboardPage extends React.Component {
 
  
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }
     render() {
        //     const primaryColor = getColor('primary');
        // const secondaryColor = getColor('secondary');
    return (
      <Page 
        className="DashboardPage"
        title="Quality Pest Control Services in India"
        // breadcrumbs={[{ name: 'Home', active: true }]}
      >
                               <Row     className="justify-content-center">
        <Col md={10} sm={12} xs={12} >   
            <UncontrolledCarousel items={items}    style={{marginTop:50,marginBottom:40,height:30}} />
            </Col><br></br>
            </Row>   
        <Row     className="justify-content-center"   >
        <Col md={3} sm={4} xs={12} className="mb-3"  style={{marginBottom:50}}>
          <Card  style={{widows:100,height:210,marginTop:70}}>
                        <CardImg
              className="card-img-left"
              src={ bg18Image}
              style={{ width: 'auto', height: 150 }}
            />
            <CardBody>
            <Link
  to={{
    pathname: "/1Bhkservices",

  }}>
    
         
  <CardTitle>BHK 1</CardTitle>
  </Link>
            </CardBody>
          </Card>
        </Col>
        <Col md={3} sm={4} xs={12} className="mb-3">
        <Card  style={{widows:100,height:210,marginTop:70}}>
            
            <CardImg
              className="card-img-left"
              src={ bg2Image}
              style={{ width: 'auto', height: 150 }}
            />
            <CardBody>
            <Link
  to={{
    pathname: "/2Bhkservices",

  }}>
           
  <CardTitle>BHK 2</CardTitle>
  </Link>
            </CardBody>
          </Card>
        </Col>
        <Col md={3} sm={4} xs={12} className="mb-3">
        <Card  style={{widows:100,height:210,marginTop:70}}>
                        <CardImg
              className="card-img-left"
              src={ bg3Image}
              style={{ width: 'auto', height: 150 }}
            />
            <CardBody>
            <Link
  to={{
    pathname: "/3Bhkservices",

  }}>
            
  <CardTitle>BHK 3</CardTitle>
  </Link>
            </CardBody>
          </Card>
        </Col>
        </Row>
        <Row   className="justify-content-center">
        <Col md={3} sm={4} xs={12} className="mb-3">
        <Card  style={{widows:100,height:210,marginTop:50}}>
            
            <CardImg
              className="card-img-left"
              src={ bg3Image}
              style={{ width: 'auto', height: 150 }}
            />
            <CardBody>
            <Link
  to={{
    pathname: "/Commercial",

  }}>
            
  <CardTitle>Commerical </CardTitle>
  </Link>
            </CardBody>
          </Card>
        </Col>
        </Row>
        <AboutPage/>
        <Row  className="justify-content-center" >
        
          <Card  style={{marginTop:70,}}>
          <CardBody>
                        <CardImg
                            src={latest}
              
            />          </CardBody>
          </Card>
                    
          </Row>
               
        <br></br><br></br><br></br><br></br>
      </Page>
    );
  }
}
export default DashboardPage;
