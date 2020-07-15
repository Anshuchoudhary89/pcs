import React,{Component} from 'react';
import {Container,Row,Col,CardImg} from 'reactstrap';
import {} from 'react-router-dom';
import bg18Image from 'assets/img/bg/1bhk.jpg';
import bg3Image from 'assets/img/bg/3bhk.jpg';
import bg2Image from 'assets/img/bg/2bhk.jpg';

class Gallary extends Component{
    render(){
        return(
            <div className="bgPage">
            <h1 className="ImgSize"     style={{marginTop:40,textAlign: "center"}}>
                               Photo Gallary</h1>
            <Container   style={{marginTop:30}}>
                <br></br>
                <Row    className="justify-content-center">
             <Col md={3}>
            
            <CardImg
              className="responsiveImg"
              src={ bg18Image}
              style={{ width: 'auto', height: 200 }}
            />
            </Col>
            <Col md={3}>
                   
                      <CardImg
              className="responsiveImg"
              src={ bg2Image}
              style={{ width: 'auto', height: 200 }}
            />
        </Col>
              <Col md={3}>
            
              <CardImg
              className="responsiveImg"
              src={ bg3Image}
              style={{ width: 'auto', height: 200 }}
            />
             </Col>
                      </Row>
         <br></br>
         <Row    className="justify-content-center">
         <Col md={3}>
            
               <CardImg
              className="responsiveImg"
              src='https://image.freepik.com/free-vector/pest-control-service-illustration_1284-8981.jpg'
              style={{width: 'auto', height: 200 }}
            />
                     </Col>
            <Col md={3}>
             {/* <img
              src='https://image.freepik.com/free-photo/health-worker-fumigation-fogging-mosquitoes-carriers-dengue-zika-virus-malaria_38363-163.jpg'
              className="responsiveImg"  style={{height:200,}}></img>> */}
               <CardImg
              className="responsiveImg"
              src='https://image.freepik.com/free-photo/health-worker-fumigation-fogging-mosquitoes-carriers-dengue-zika-virus-malaria_38363-163.jpg'
              style={{ width: 'auto',height: 200 }}
            />
        </Col>
        <Col md={3}>
                        
              <CardImg
              className="responsiveImg"
              src='https://image.freepik.com/free-photo/man-work-fogging-eliminate-mosquito-preventing-spread-dengue-fever-zika-virus_35018-317.jpg'
              style={{ width: 'auto',height: 200 }}
            />
             </Col>
         </Row>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
            </Container>
            </div>
        )
    }
}
export default Gallary