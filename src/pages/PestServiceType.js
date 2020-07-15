// import bg11Image from 'assets/img/bg/pestControl.jpg';
// import bg18Image from 'assets/img/bg/background_1920-18.jpg';
// import bg1Image from 'assets/img/bg/background_640-1.jpg';
// import bg3Image from 'assets/img/bg/background_640-3.jpg';
// import user1Image from 'assets/img/users/100_1.jpg';
// import { UserCard } from 'components/Card';
import { AnnouncementCard} from 'components/Card';

import Page from 'components/Page';
// import { bgCards, gradientCards, overlayCards } from 'demos/cardPage';
// import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import React from 'react';
// import { Line } from 'react-chartjs-2';
import {
  Button,
  Card,
   CardText,
   Col,
   Row,
  } from 'reactstrap';
import { Link,} from 'react-router-dom';


class PestServiceType extends React.Component {

    state = {
        pesttypevalue: '', 

    };
    constructor(props) 
    {
        super(props);
        this.showSpinner = false;
        this.getPestTypeValue();
    }
    getPestTypeValue = async () => {
      console.log('Hello');
      // const { Link } = this.props;
      // const valuePest = Link.getParam('pestvalue', 1);
      const valuePest= this.props.location.param
      this.state.pesttypevalue=Number(valuePest);
      console.log(this.state.pesttypevalue);
  }
    // componentDidMount(){
    //   // const {PestServiceType} = this.props.match.paiams
    //   // const {value} = this.props.navigation.state.params.JSON_ListView_Clicked_Item
        
    //   const verifyObj = {
    //     pesttypevalue : 1,
    //     //phoneNumber: 7906937017,
    //     // otp: this.state.regOtp
  
    //   }
    //     // this.state.pesttypevalue=Number(value);
    // }

    renderArticles = () => {
        if (this.state.pesttypevalue === 1) {
            return (
               
            <div>
                  <Row  >
                  <Col lg="4" md="12" sm="12" xs="12">
            <AnnouncementCard
              color="gradient-secondary"
              header='Spraying'
             
              title= 'Sprays are used to control insects, mites, mosquitoes, cockroaches and fungous and bacterial diseases of plants; insects, such as lice and flies, and weeds, by means of chemical weed killers or herbicides.'
    image= 'https://cdn4.vectorstock.com/i/1000x1000/07/83/pest-control-exterminator-spraying-side-view-vector-1590783.jpg' 
    
    pestrate="1500"
    servicenm='General Pest Control Service'
    composition='Chemical Used (As per the requirement)'
    chemical='Cyphenothrin 5% EC, Deltamethrin 2.5%SC, BetaCyfluthrin 2.45%, Propoxur 20%EC, etc'
    frequency='Weekly'
    note=''
              // buttonProps={{
              //   children: 'Confirm',
              // }}
              style={{  height:460}}
              />
               <Link 
               to={{
                pathname: "/PestApply",
                param: 1 ,
                pestrate:1500}}    style={{alignSelf:'center',marginBottom:30}} >    
                                  <Button   color="primary"  style={{width:412, alignSelf:'center'}}  >Confirm</Button>
                              </Link>
  
            </Col>
          <Col lg="4" md="12" sm="12" xs="12">
            <AnnouncementCard
              color="gradient-secondary"
              header='Gel Treatment'
             
              servicenm='General Pest Control Service'
  
    title= 'The method works by enticing the pests to eat gel bait, which it thinks is a source of food, so it consumes the insecticide contained within.'
    image= 'https://cdn4.vectorstock.com/i/1000x1000/07/83/pest-control-exterminator-spraying-side-view-vector-1590783.jpg'


    pestrate='1500'
    composition='Chemical Used (As per the requirement)'
    chemical='Fipronil Gel , Imidachlorprid Gel , etc'
    frequency='Weekly'
    note=''
              // buttonProps={{
              //   children: 'Confirm',
              // }}
              style={{ height:460}}
            />
             <Link 
             to={{
              pathname: "/PestApply",
              param: 1,
              pestrate:1500}}    style={{alignSelf:'center'}} >    
                                <Button   color="primary"  style={{width:422, alignSelf:'center'}}  >Confirm</Button>
                            </Link>

          </Col>
          

<Col lg="4" md="12" sm="12" xs="12">
            <AnnouncementCard
              color="gradient-secondary"
              header= 'Fogging '
             
              servicenm='General Pest Control Service'
  
    title='Fogging is a technique used for killing insects/mosquitoes that involves using a fine pesticide spray (aerosol) which is directed by a blower. In some cases, a hot vapour may be used to carry the spray and keep it airborne for longer. '
    image= 'https://cdn4.vectorstock.com/i/1000x1000/07/83/pest-control-exterminator-spraying-side-view-vector-1590783.jpg'
   
  
   
    composition='Chemical Used (As per the requirement)'
    chemical='Deltamethrin 2.25% ULV, Cphenothrin 5% EC '
    frequency='Weekly'
   
              // buttonProps={{
              //   children: 'Confirm',
              // ///yha se hoga rediect
              // }}
              style={{  height:460}}
            />
             <Link 
             to={{
              pathname: "/PestApply",
              param: 1 ,
              pestrate:1500}}    style={{alignSelf:'center',marginBottom:30}} >    
                                <Button   color="primary"  style={{width:412, alignSelf:'center'}}  >Confirm</Button>
                            </Link>

          </Col>
          </Row>
</div>

               
            )
            
        }

        else if (this.state.pesttypevalue === 2) {
          return (
              <div   style={{marginLeft:40}}>
                <Col lg="4" md="12" sm="12" xs="12">
            <AnnouncementCard
              color="gradient-secondary"
              header= 'Fumigation '
             
              

    servicenm='Fumigation  Services '
    
    title= 'Fumigation is a method of pest control that completely fills an area with gaseous pesticides—or fumigants—to suffocate or poison the pests within. It is used to control pests in building, food grains  and is also used to fumigate containers , buses, ships, aircrafts , etc. '
    image= 'https://cdn4.vectorstock.com/i/1000x1000/07/83/pest-control-exterminator-spraying-side-view-vector-1590783.jpg'
    
   
    pestrate="1500"
    composition='Chemical Used (As per the requirement)'
    chemical='Methyl Bromide , Aluminium Phosphide  '
    frequency='As  when required'
    
   
             
              style={{ height:490}}
            />
             
             <Link 
             to={{
              pathname: "/PestApply",
              param: 2 ,
              pestrate:1500}}    style={{alignSelf:'center',marginBottom:30}} >    
                                <Button   color="primary"  style={{width:390, alignSelf:'center'}}  >Confirm</Button>
                            </Link>

          </Col>
              </div>
          )
      }
      else if (this.state.pesttypevalue === 3) {
        return (
            <div       style={{marginLeft:40}}>   
              <Col lg="4" md="12" sm="12" xs="12">
          <AnnouncementCard
            color="gradient-secondary"
            header= 'Rodent Control Treatment '
           
  
    
    title= 'Rodents can be very destructive pests that can contaminate foods and preparation areas. Most importantly, rodents are reservoirs and vectors for numerous diseases. Type of rodent control treatments: 1. •	Burrow Fumigation  2.  •	Poison Baiting 3. •	Glue Trap  4. •	Herbal Treatment '
    image= 'https://cdn4.vectorstock.com/i/1000x1000/07/83/pest-control-exterminator-spraying-side-view-vector-1590783.jpg'
  
    composition='Chemical Used (As per the requirement)'
    chemical='Zinc Phosphide, Glue trap , Bromadiolone,  Aluminium Phosphide (AlP)  '
    frequency='As and when required'
  
    style={{ height:500}}
    />
     <Link 
             to={{
              pathname: "/PestApply",
              param: 3 ,
              pestrate:1500}}    style={{alignSelf:'center'}} >    
                                <Button   color="primary"  style={{width:390, alignSelf:'center'}}  >Confirm</Button>
                            </Link>
    
        </Col>
            </div>
        )
    }
    else if (this.state.pesttypevalue === 4) {
      return (
          <div   style={{marginLeft:40}}>
            <Col lg="4" md="12" sm="12" xs="12"  >
        <AnnouncementCard
          color="gradient-secondary"
          header= 'Anti-termite treatment '
         

  servicenm='Termite Treatment'
  
  title= 'Anti-termite treatment is a chemical procedure carried out for soil, masonry, wood, and electrical fixtures to provide the building with a chemical barrier against the subterranean termites before and after construction. '
  image='https://cdn4.vectorstock.com/i/1000x1000/07/83/pest-control-exterminator-spraying-side-view-vector-1590783.jpg'
  
  composition='Chemical Used (As per the requirement)'
  chemical='Fipronil 5% EC , Glycol , etc '
  frequency='Weekly'
  

          style={{ height:500}}
          />
           
           <Link 
           to={{
            pathname: "/PestApply",
            param: 4 ,
            pestrate:1500}}    style={{alignSelf:'center',marginBottom:30}} >    
                              <Button   color="primary"  style={{width:390, alignSelf:'center'}}  >Confirm</Button>
                          </Link>
      </Col>
          </div>
      )
  }
  else if (this.state.pesttypevalue === 5) {
    return (
        <div  style={{marginLeft:40}}> 
          <Col lg="4" md="12" sm="12" xs="12">
      <AnnouncementCard
        color="gradient-secondary"
        header= 'Vector Control'
       
servicenm='Vector Control'
title='Vector is an organism that does not cause disease itself but which spreads infection by conveying pathogens from one host to another. Species of mosquito, for example, serve as vectors for the deadly disease Malaria. Tyep of vector control treatment: 1. Larvicide treatment  2. Fogging 3. Surface treatment '
image='https://cdn4.vectorstock.com/i/1000x1000/07/83/pest-control-exterminator-spraying-side-view-vector-1590783.jpg'

composition='Chemical Used (As per the requirement)'
chemical='Deltamethrin 2.25% ULV, Cphenothrin 5% EC '
frequency='Weekly'



        style={{ height:500}}
            />
             
             <Link 
             to={{
              pathname: "/PestApply",
              param: 5 ,
              pestrate:1500}}    style={{alignSelf:'center'}} >    
                                <Button   color="primary"  style={{width:390, alignSelf:'center'}}  >Confirm</Button>
                            </Link>

    </Col>
        </div>
    )
}
else if (this.state.pesttypevalue === 6) {
  return (
    <div  style={{marginLeft:40}}> 
    <Col lg="4" md="12" sm="12" xs="12">
    <AnnouncementCard
      color="gradient-secondary"
      header= 'Weed Control Treatment'


servicenm='Weed Control Treatment'
  
    title='Weed control is the botanical component of pest control, which attempts to stop weeds, especially noxious weeds from competing with desired flora and fauna including domesticated plants and livestock and in natural settings preventing non native species competing with native species. '
    image='https://cdn4.vectorstock.com/i/1000x1000/07/83/pest-control-exterminator-spraying-side-view-vector-1590783.jpg'
   
    composition='Chemical Used (As per the requirement)'
    chemical='Fipronil 5% EC , Glycol , etc '
    frequency='Weekly'
   

    style={{ height:500,alignSelf:'center'}}
    />
     
     <Link 
     to={{
      pathname: "/PestApply",
      param: 6 ,
      pestrate:1500}}    style={{alignSelf:'center',marginBottom:30}} >    
                        <Button   color="primary"  style={{width:390, alignSelf:'center'}}  >Confirm</Button>
                    </Link>

  </Col>
      </div>
  )
}
        else{
            return(
                <Card>
                    <CardText>No Card selected</CardText>
                </Card>
            )
        }
    }
    render() {
  return (
    <Page title="Pest Services" >
      
            {this.renderArticles()}
          {/* <Card >
            
            <CardImg
              className="card-img-left"
              src={ bg11Image}
              style={{ width: 'auto', height: 250 }}
            />
            <CardBody>
            <Link
  to={{
    pathname: "/PestServiceType",
    data: 1 // your data array of objects
  }}
>
         
                                
                           
              <CardTitle>General Pest Control</CardTitle>
              </Link>
            </CardBody>
          </Card> */}
        
      

    
<br></br><br></br>
     
    </Page>
  )
  
};
}

export default PestServiceType;
