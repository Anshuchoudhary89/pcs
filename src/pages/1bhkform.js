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
   
    CardText
} from 'reactstrap';
// import Dropdown from 'react-dropdown';
// import Picker from 'react-picker'
import { db } from '../config'

import Page from 'components/Page';
const location = [{ "locationname": "Select" }];
let addItem = item => {
  db.collection("BooknowBHK1").doc().set({
    quantity: item.quantity,
    name: item.name,
    mobile: item.mobile,
    email: item.email,
    address: item.address,
    date: item.date,
    Shift:item.Shift,
    Time : item.Time,
    ReferenceId: item.ReferenceId

    // pesttype: item.pesttype,
    // pestrate: item.pestrate
  });
};


class bhk1form extends React.Component {
  
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
          locationRate: '',
       
         
      };
      constructor(props) {
        super(props);
    //     this.subpesttype = [];
    // this.pestratedata = [];
    this.location = [];
    // this.servicepackage = [];
    // this.showSpinner = false;
    // this.getPestSubType();
    this.getLocation();
       
      }

      componentDidMount=()=>
      {
       
      var RandomNumber = Math.floor(Math.random() * 50000) + 1 ;
       
      this.setState({
       
        ReferenceId : RandomNumber
       
      })
      }
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
              this.showSpinner = true;
              this.setState(this.location);
            })
        }
        else {
          console.log('Hit Location');
          this.showSpinner = true;
          this.setState(this.showSpinner);
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
      };
        //setModalVisible(visible) { this.setState({ modalVisible: visible }); };
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
      
        handleunitChange = event => {
          // this.state.Shift.push(event.target.value);
          this.setState({
            Shift: event.target.value
          })
           
          }
        handleTime = (event)=>{
         
          this.setState({
            Time: event.target.value
          })

          
        }
        handleSubmit = () => {
          // const { navigation } = this.props;
      
      
          this.getRate();
          if (  this.state.date.length > 0 && this.state.Time.length >0 &&  this.state.Shift.length > 0 && this.state.quantity.length > 0 && this.state.name.length > 0 && this.state.mobile.length > 0 && this.state.email.length > 0 && this.state.address.length > 0 ) {
            addItem({ Time:this.state.Time,date:this.state.date,     Shift:this.state.Shift, ReferenceId:this.state.ReferenceId, quantity: this.state.quantity, name: this.state.name, mobile: this.state.mobile, email: this.state.email, address: this.state.address ,});
            console.log('Item saved successfully');
            alert('Item saved successfully');
            
          }
          else {
            alert("All Feilds are mandatory!");
          }
        };
      
  
  render() {
    return (
        <Page
        title="1 BHK services"
        breadcrumbs={[{ name: '1 BHK ', active: true }]}
      >

      <Row   className="justify-content-center">
        <Col xl={10} lg={12} md={12}>
          <Card   >
                 <CardBody>
              <Form>
                               <FormGroup>
          <CardText  style={{marginTop:50}}>
          Reference Id {this.state.ReferenceId}
        </CardText>
        </FormGroup>
                 
              
                <FormGroup style={{marginTop:50}}>
                  <Label for="exampleUrl">Name</Label>
                  <Input
                   onChange={this.handleChangeName}

                    type="url"
                    name="url"
                    id="exampleUrl"
                    placeholder="Enter Your Name"
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
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="password placeholder"
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
                  <Label for="exampleText">Address</Label>
                  <Input 
                                    onChange={this.handleChangeAddress}

                  type="textarea" name="text" />
                </FormGroup>
                <FormGroup>
                  
                </FormGroup>
                <FormGroup>
                  <Label for="exampleDate">Date</Label>
                  <Input 
                  onChange={this.handleAvailabledateChange}
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="date placeholder"
                  />
                   <FormGroup>
                  <Label for="exampleSelect">Shift</Label>
                  <Input type="select" name="select"  onChange={this.handleunitChange}>
                  <option>Select Shift</option>

                    <option>Morning</option>
                    <option>AfterNoon</option>
                    <option>Night</option>
                   
                  </Input>
                </FormGroup>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleTime">Time</Label>
                  <Input type="select" name="select"   onChange={this.handleTime}>
                  <option>Select Timing</option>

                    <option>10:00 AM -12:00 Am</option>
                    <option>2:00 PM -3:00 PM</option>
                    <option>4:00 PM - 5:00</option>
                   
                  </Input>
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

export default bhk1form;
