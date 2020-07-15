import React, { Component } from 'react'
import {
    Badge,
    Alert, Container, Row, Col,  CardBody, Card, 
} from 'reactstrap';
import {
     faEnvelope, faEdit, faUser,
    faSignature, faMobile
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';
;

const Marker = props => {
    return <div><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></div>
}

class admindashboard extends Component {
    static defaultProps = {
        center: {
            lat: 28.414648,
            lng: 77.094404
        },
        zoom: 15
    };
    constructor(props) {
        super(props);

        this.state = {
            visible: true

        };
        this.state = {
            doner_count: 0
        };

        this.state = {
            ben_count:0
                    };
            

        let is_login = sessionStorage.getItem("logged");
        if (is_login === 'none') {
            this.props.history.push('/');
        }


        this.onDismiss = this.onDismiss.bind(this);

    }

    onDismiss() {
        this.setState({ visible: false });
    }
   
    render() {
        return (
            <div className="bgfund" style={{ padding: "30px" }}>
               
                <Container className="divbg">
                    <br></br>
<Row className="justify-content-center"><h2  style={{color:"bule"}}><u>Admin Dashboard </u></h2> </Row>
                    {/* <h2>Admin Dashboard:</h2> */}
                    <div style={{ padding: '10px' }}>
                        <Row style={{ padding: '10px' }} >
                            <Col md={4} sm={12}>
                                <Row>
                                    <Col md={12}>
                                        <Card className=" shadow border-0 " style={{ paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                            <CardBody className="px-lg-3 py-lg-3">

                                                <Row>
                                                    <Col md={10}>
                                                        {/* <h4 className="text-muted" style={{ textAlign: "center" }}> <FontAwesomeIcon style={{ color: "#2E3092" }} icon={faUser} aria-hidden="true" style={{ color: "darkblue", fontSize: "23px" }}></FontAwesomeIcon> My Profile</h4> </Col> */}
                                                        <h4 className="text-muted" style={{ textAlign: "center" }}>  My Profile</h4> </Col>
                                                    <Col md={2}><FontAwesomeIcon icon={faEdit} style={{ color: "#2E3092" }} /></Col>
                                                </Row>
                                                <br></br>  <br></br>

                                                <Row>
                                                    {/* <Col md={12}>   <FontAwesomeIcon style={{ color: "#2E3092" }} icon={faSignature} aria-hidden="true" ></FontAwesomeIcon> &nbsp; &nbsp;{sessionStorage.getItem("name")}</Col> */}
                                                    <Col md={12}>   <FontAwesomeIcon style={{ color: "#2E3092" }} icon={faSignature} aria-hidden="true" ></FontAwesomeIcon> &nbsp; &nbsp;{"Admin"}</Col>

                                                </Row>

                                                <br></br>
                                                <Row>
                                                    <Col md={12}>   <FontAwesomeIcon style={{ color: "#2E3092" }} icon={faMobile} aria-hidden="true" ></FontAwesomeIcon> &nbsp; &nbsp;{"929783786"}</Col>
                                                </Row>
                                                <br></br>
                                                <Row>
                                                    <Col md={12}>   <FontAwesomeIcon style={{ color: "#2E3092" }} icon={faEnvelope} aria-hidden="true" ></FontAwesomeIcon> &nbsp; &nbsp;{"Ruchi7780@gmail.com"}</Col>
                                                </Row>
                                                </CardBody>
                                        </Card>

                                                <br></br>
                                                
                                                    
                                                        <Card className=" shadow border-0 " style={{ paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px', paddingRight: '10px' }}>
                                                            <CardBody className="px-lg-2 py-lg-2">
                                                                <div style={{ height: '250px', width: '100%' }}>
                                                                    <GoogleMapReact
                                                                        bootstrapURLKeys={{ key: 'AIzaSyBKdXoEy8iDv_7yvzRJkH2mW9LFieOIT4g' }}
                                                                        defaultCenter={this.props.center}
                                                                        defaultZoom={this.props.zoom}>
                                                                        <Marker lat={28.414648} lng={77.094404} />
                                                                    </GoogleMapReact>
                                                                </div>
                                                            </CardBody>
                                                        </Card>
                                         
                                           
                                    </Col>
                                </Row>
                              
                            </Col>
                            <Col md={8} sm={12}>


                              
                               

                                <Row>
                                    <Col md={12}>
                                        <Alert color="warning" ><b>


                                            <Link
                                             to="/BHK1list"
                                             >
                                                   Number of Application recevied for BHK1 services <Badge pill>
                                                     {3}
                                                    </Badge></Link></b>&nbsp;&nbsp;&nbsp;&nbsp;
                                    {/* <Button style={{marginLeft:'19%'}} color='danger'><FontAwesomeIcon icon={faBan}></FontAwesomeIcon></Button> */}

                                        </Alert>
                                    </Col>
                                    <br></br>

                                </Row>

                                <Row>
                                    <Col md={12}>
                                        <Alert color="warning" ><b>


                                            <Link
                                             to="/BHK2list"
                                             >
                                                   Number of Application recevied for BHK2 Services  <Badge pill>
                                                     {3}
                                                    </Badge></Link></b>&nbsp;&nbsp;&nbsp;&nbsp;
                                    {/* <Button style={{marginLeft:'19%'}} color='danger'><FontAwesomeIcon icon={faBan}></FontAwesomeIcon></Button> */}

                                        </Alert>
                                    </Col>
                                    <br></br>

                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <Alert color="warning" ><b>


                                            <Link
                                             to="/BHK3list"
                                             >
                                                   Number of Application recevied for BHK3 Services <Badge pill>
                                                     {3}
                                                    </Badge></Link></b>&nbsp;&nbsp;&nbsp;&nbsp;
                                    {/* <Button style={{marginLeft:'19%'}} color='danger'><FontAwesomeIcon icon={faBan}></FontAwesomeIcon></Button> */}

                                        </Alert>
                                    </Col>
                                    <br></br>

                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <Alert color="warning" ><b>


                                            <Link
                                             to="/Commerciallist"
                                             >
                                                   Number of Application recevied for Commercial service   <Badge pill>
                                                     {4}
                                                    </Badge></Link></b>&nbsp;&nbsp;&nbsp;&nbsp;
                                    {/* <Button style={{marginLeft:'19%'}} color='danger'><FontAwesomeIcon icon={faBan}></FontAwesomeIcon></Button> */}

                                        </Alert>
                                    </Col>
                                    <br></br>

                                </Row>

                               
                                <br></br>
                              
                            </Col>
                        </Row>
                        {/* For Spacing */}
                        <Row>
                            <Col md={12}>
                                <div style={{ height: '25px' }}></div>
                            </Col>
                        </Row>
                      
                    </div>
                </Container>
                <br></br>
            </div>
        )
    }
}
export default admindashboard;
