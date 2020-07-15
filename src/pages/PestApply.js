import React from 'react';
import {
  Button,
  Card,
  CardBody,
 
  Col,
  Form,
 
  FormGroup,
 
  Input,
  Label,
  Row,
    
    CardText,
   
} from 'reactstrap';


import Page from 'components/Page';
import { db } from '../config';
// const { width, height } = Dimensions.get("screen");
const subpesttype = [{ "pestname": "Select", }];//
const pestratedata = [];
const location = [{ "locationname": "Select" }];
const servicepackage = [{ "servicequality": "Select" }];

let addItem = item => {
  db.collection("pestapply").doc().set({
    quantity: item.quantity,
    name: item.name,
    mobile: item.mobile,
    email: item.email,
    address: item.address,
    pesttype: item.pesttype,
    pestrate: item.pestrate,
    ReferenceId: item.ReferenceId,
  });
};
class PestApply extends React.Component {

  state = {
    quantity: '',
    name: '',
    mobile: '',
    email: '',
    address: '',
    pesttype: '',
    pestrate: '',
    pestservicename: '',
    modalVisible: false,
    subtype: '',
    locationRate: '',
    packagerate: '',
    locationcategory:'',
    ReferenceId: 1,
     
  };
  constructor(props) {
    super(props);
    this.subpesttype = [];
    this.pestratedata = [];
    this.location = [];
    this.servicepackage = [];
    // this.showSpinner = false;
    this.getPestSubType();
    this.getLocation();
    this.getServiceQuality();
}
  componentDidMount=()=>
  {
   
  var RandomNumber = Math.floor(Math.random() * 50000) + 1 ;
   
  this.setState({
   
    ReferenceId : RandomNumber
   
  })
  }

  getPestSubType = async () => {

    if (subpesttype.length <= 1) {
      console.log('No Data Ji');
      // const { navigation } = this.props;
      // const valuePest = this.props.data;
      const valuePest = this.props.location.param;
      const PestType = JSON.stringify(valuePest);
      let subpestref = db.collection('pesttypeall');
      console.log('PestType');
      console.log(PestType);
      console.log(subpestref )
      subpestref.where('pesttype', '==', Number(PestType)).get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('No matching documents.');
            //console.log('Step2');
            return;
          }
          snapshot.forEach(doc => {
            subpesttype.push(doc.data());
       
          });
           
          // this.showSpinner = true;
          this.setState(this.subpesttype);
          console.log(subpesttype);
          console.log('AAYA'); 
        })
    }
    else {
      console.log('Hit subpesttype');
      // this.showSpinner = true;
    }
  };
  getLocation = async () => {
    if (location.length <= 1) {
      let subpestref = db.collection('location');
       subpestref.get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('No matching documents.');
            return;
          }
          snapshot.forEach(doc => {
            location.push(doc.data());
          });
          // this.showSpinner = true;
          this.setState(this.location);
        })
    }
    else {
      console.log('Hit Location');
      // this.showSpinner = true;
      // this.setState(this.showSpinner);
    }

  };
  getServiceQuality = async () => {
    if (servicepackage.length <= 1) {
      let subpestref = db.collection('servicepackage');
      subpestref.get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('No matching documents.');
            return;
          }
          snapshot.forEach(doc => {
            servicepackage.push(doc.data());
          });
          //console.log(servicepackage);
          // this.showSpinner = true;
          this.setState(this.servicepackage);
        })
    }
    else {
      console.log('Hit servicepackage');
      // this.showSpinner = true;
      // this.setState(this.showSpinner);
    }
  };
  getRate = async () => {
    const LocRecNo=this.state.locationRate;
    if(LocRecNo===2 || LocRecNo===3 || LocRecNo===4 || LocRecNo===5  || LocRecNo===7 || LocRecNo===8 || LocRecNo===9 || LocRecNo===10)
    {
      this.state.locationcategory='X'
    }
    else if(LocRecNo===6)
    {
      this.state.locationcategory='Z'
    }
    else{
      this.state.locationcategory='Y'
    }
    const categorycode = this.state.locationcategory;
    const servicepackage = this.state.packagerate;
    const mergecode = servicepackage.concat(categorycode);
    // const { navigation } = this.props;
    const valuePest = this.props.location.param
    const valueRate = this.props.location.pestrate
    const PestType = JSON.stringify(valuePest);
    JSON.stringify(valueRate);
    // const valuePest= this.props.location.param
    // this.state.pesttypevalue=Number(valuePest);
    const subtypevalue = this.state.subtype;
    console.log('-----------------------GET RATE----------------------IN'); 
    console.log(mergecode);
    console.log(PestType);
    console.log(subtypevalue); 
    console.log('-----------------------GET RATE----------------------OUT');
    
    let subpestref = db.collection('subpestsupply');
    let subpestdata = subpestref.where('pesttype', '==', Number(PestType))
    let subpestdata2 = subpestdata.where('subpestvalue', '==', Number(subtypevalue))
     subpestdata2.where('code', '==', mergecode)
      .get().then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }
        snapshot.forEach(doc => {
          pestratedata.push(doc.data());
          
        });
        
        // this.showSpinner = true;
        this.setState(this.pestratedata);
        console.log(pestratedata); 

      });

  };
  handleChangeQuantity = e => { this.setState({ quantity: e.target.value }); };
  handleChangeName = e => { this.setState({ name: e.target.value }); };
  handleChangeMobile = e => { this.setState({ mobile: e.target.value }); };
  handleChangeEmail = e => { this.setState({ email: e.target.value }); };
  handleChangeAddress = e => { this.setState({ address:e.target.value }); };
  handleAvailabledateChange = (event) => {
    this.setState({
      
        date: event.target.value
    

    },
    
    
    );
  }
  handleSubmit = () => {
    // const { navigation } = this.props;
    const valuePest = this.props.location.param
    const valueRate = this.props.location.pestrate
    const PestType = JSON.stringify(valuePest);
    const PestRate = JSON.stringify(valueRate);
   

    this.getRate();
    if (this.state.quantity.length > 0 && this.state.name.length > 0 && this.state.mobile.length > 0 && this.state.email.length > 0 && this.state.address.length > 0) {
      addItem({ReferenceId:this.state.ReferenceId, quantity: this.state.quantity, name: this.state.name, mobile: this.state.mobile, email: this.state.email, address: this.state.address, pesttype: PestType, pestrate: PestRate });
      console.log('Item saved successfully');
      // this.setModalVisible(true);
    }
    else {
      alert("All Feilds are mandatory!");
    }
  };
  // handlePaymentDetails = () => {
  //   const { navigation } = this.props;
  //   const valuePest = navigation.getParam('pestvalue', 0);
  //   const valueRate = navigation.getParam('pestrate', 0);
  //   const PestType = JSON.stringify(valuePest);
  //   const PestRate = JSON.stringify(valueRate);
  //   navigation.navigate('SelectService');
  //   this.setModalVisible(false);
  // };
  render() {
    return (
        <Page
        className="ButtonPage"
        title="Pest Apply"
        breadcrumbs={[{ name: 'pest Apply ', active: true }]}
      >

<Row className="justify-content-center">
        <Col xl={10} lg={12} md={12}>
          <Card>
                 <CardBody>
              <Form>
                               <FormGroup>
          <CardText  style={{marginTop:50}}>
          Reference Id {this.state.ReferenceId}
        </CardText>
        </FormGroup>
        <FormGroup>
           <CardText>Pest Sub Type</CardText>
        
                <select className="form-control"
                 selectedValue={this.state.subtype}
                 onValueChange={(itemValue, itemIndex) =>
                   this.setState({ subtype: itemValue })} style={{ height: 40, backgroundColor: 'white', borderColor: '#6D931C', width: '100%' }}>
            
        {
           subpesttype.map((item, index) => {
                return (
                    <option   label={item.pestname} value={item.subpestvalue}   key={index}>
                        Select service
                    </option>
                )
            })
        }
    </select>
        </FormGroup>
    
         <FormGroup>
          <CardText>City</CardText>
          <select className="form-control"
                 selectedValue={this.state.locationRate}
                 onValueChange={(itemValue, itemIndex) =>
                   this.setState({ locationRate: itemValue })} style={{ height: 40, backgroundColor: 'white', borderColor: '#6D931C', width: '100%' }}>
            
        {
      location.map((item, index) => {
                return (
                    <option   label={item.locationname} value={item.locrn}   key={index}>
                        Select city
                    </option>
                )
            })
        }
    </select>
         
                
        </FormGroup> 
        <FormGroup>
        <CardText>Service Package</CardText>
        <select className="form-control"
                 selectedValue={this.state.packagerate}
                 onValueChange={(itemValue, itemIndex) =>
                   this.setState({ packagerate: itemValue })} style={{ height: 40, backgroundColor: 'white', borderColor: '#6D931C', width: '100%' }}>
            
        {
       servicepackage.map((item, index) => {
                return (
                    <option   label={item.servicequality} value={item.quality}   key={index}>
                        Select Package
                    </option>
                )
            })
        }
    </select>

        </FormGroup>
        <FormGroup>
                  <Label for="exampleNumber"> Quantity</Label>
                  <Input
                 onChange={this.handleChangeQuantity}

                    type="number"
                    name="number"
                    id="exampleNumber"
                    placeholder="Enter Quantity"
                  />
                  
                   
                  </FormGroup>
       
                               <FormGroup style={{marginTop:50}}>
                  <Label for="exampleUrl">Name</Label>
                  <Input
                   onChange={this.handleChangeName}

                    type="url"
                    name="url"
                    id="exampleUrl"
                    placeholder="Enter Full Name"
                  />
                </FormGroup>
             
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                  onChange={this.handleChangeEmail}
                    type="email"
                    name="email"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
               
               
                <FormGroup>
                  <Label for="exampleNumber">Phone Number</Label>
                  <Input
                                    onChange={this.handleChangeMobile}

                    type="number"
                    name="number"
                    id="exampleNumber"
                    placeholder="Phone Number"
                  />
                </FormGroup>
                <FormGroup>
                  <CardText>Address</CardText>
                  <Input
                     onChange={this.handleChangeAddress}

                   type="text"
                    placeholder="Enter address"
                  />
                </FormGroup>
                <FormGroup>
                  
                </FormGroup>
               </Form>
            </CardBody>
            <Button 
             onClick={this.handleSubmit}
            style={{width:300,alignSelf:'center',marginBottom:30}}>Pay Now</Button>

          </Card>
        </Col>

        
                
                 
              
    </Row>               
               
    
</Page>
    );
  }
}

export default PestApply;
