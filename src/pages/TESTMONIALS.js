import React from 'react';

import { Row, Col,UncontrolledCarousel } from 'reactstrap';

import Page from 'components/Page';
import '../AppFile.css'
const items = [
  // {
  //    src: '',
  //   altText: '',
  //   caption: 'Amit',
  //   header: '1',
  //   key: '1'
  // },////esme hi krna h na haa
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

// const TESTMONIALS = () => {
  class TESTMONIALS extends React.Component {
    render() {
      
          return (
    <Page
      className="TESTMONIALS"
      title="TESTMONIALS"
      breadcrumbs={[{ name: 'TESTMONIALS', active: true }]}
    >
      <Row     className="justify-content-center">

<Col md={10} sm={12} xs={12} >   
    <UncontrolledCarousel items={items}    style={{marginTop:50,marginBottom:40,height:30}} />
    </Col><br></br>
    </Row>   
     
    </Page>
  );
};
  }
export default TESTMONIALS;
