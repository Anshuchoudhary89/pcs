import React from 'react';

import { Row, Col,Table } from 'reactstrap';

import Page from 'components/Page';


const BHK1list = () => {
  return (
    <Page>
    <h2  style={{color:"bule",marginTop:30,textAlign: "center"}}><u>1BHK Application List</u></h2>
    <Row className="justify-content-center">

            <Col md="8" >
    <Table dark    style={{marginTop:90}}>
      <thead>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>email Id</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>mark123@gmail.com</td>
          <td>84738793</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>jak123@gmail.com</td>
          <td>9829189</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>pundir56@gmail.com</td>
          <td>087873887</td>
        </tr>
      </tbody>
    </Table>
    </Col>

    </Row>
    
     
    </Page>
  );
};

export default BHK1list;
