// import logo200Image from 'assets/img/logo/logo_200.png';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { db } from '../config';
import { Link,  Redirect } from 'react-router-dom';

let addItem = item => {
  db.collection("register").doc().set({ 
    name: item.name,
    mobile: item.mobile,
    email: item.email, 
    password: item.password, 
    address: item.address,
    checkpolicy: item.checkpolicy
  });
};

class AuthForm extends React.Component {
  state = {
    
    name: '',
    mobile: '',
    email: '', 
    password: '',
    cnfpassword: '',
    address: '',
    checkpolicy:true,
  
  };
  get isLogin() {
    return this.props.authState === STATE_LOGIN;
  }

  get isSignup() {
    return this.props.authState === STATE_SIGNUP;
  }
  checkloginstatus = async SK => {
        
    //await AsyncStorage.setItem('USER_KEY', this.state.name)
    
  const UserName=  localStorage.getItem('USER_KEY')
    if (UserName !== 'Logout') {
        console.log('Login Ho rkha hai'+ UserName);
        // const { navigation } = this.props;
        // this.setState({
        //     showSpinner: true
        // });
        // alert("loginwwww")
        // navigation.navigate('PestType')
    }
    else{
        // this.setState({
        //     showSpinner: false
        // });
    } 
}
UserNameStr = async SK => {
  try {
      
       localStorage.setItem('USER_KEY', this.state.name)
      // const UserName = localStorage.getItem('USER_KEY')
      localStorage.getItem('USER_KEY')
      // console.log('Value is ' + ' ' + UserName);
  } catch (e) {
      alert('Failed to fetch User.')
  }
}
  handleChangeName = e => { this.setState({ name: e.target.value }); };
  handleChangeMobile = e => { 
    if(e.target.value.length>10)
    {
    alert("Not More than 10 digits"); 
    e.target.value = e.target.value.substring(0, e.target.value.length - 1); 
     console.log(e.nativeEvent.text.substring(0, e.nativeEvent.text.length - 1));
    }
     else{ this.setState({ mobile: e.target.value });} };
  handleChangeEmail = e => { this.setState({ email: e.target.value}); };
  handleChangePassword = e => { this.setState({ password: e.target.value }); };
  handleChangeCnfPassword = e => { this.setState({ cnfpassword: e.target.value }); };
  handleChangeAddress = e => { this.setState({ address: e.target.value }); };
  handleChangeCheckPolicy=e=> {this.setState({ checkpolicy: !this.state.checkpolicy }); console.log(!this.state.checkpolicy);}



  changeAuthState = authState => event => {
    event.preventDefault();

    this.props.onChangeAuthState(authState);
  };

  // handleSubmit = event => {
  //   addItem({  name: this.state.name});

  //   event.preventDefault();
  // };
  handleSave = () => {
    //const { navigation } = this.props;//remove after coding complete
    //navigation.navigate('PestType');//remove 
    if (this.state.name) {
        if (this.state.password) {
            this.setState({
                showSpinner: true
            });
            const username = this.state.name;
            const userpassword = this.state.password;
             if(username==="admin" && userpassword ==="12345")
                    {
                      alert("admin successful")
                      return  <Redirect  to="/1Bhkservices" />

                    }
            let subpestref = db.collection('register');
            subpestref = subpestref.where('name', '==', username)
            subpestref = subpestref.where('password', '==', userpassword)
            subpestref.get()
                .then(snapshot => {
                    if (snapshot.empty) {
                        console.log('No matching documents.');
                        alert("UserName or Password Does not match");
                        this.setState({
                            showSpinner: false
                        });
                        // navigation.navigate('Login');
                        // alert("login successful")
                        return;
                    }
                    
                    else {
                        console.log('AAYA')
                        this.showSpinner = false;
                        console.log(this.state.name + ' and ' + this.state.password);
                        // const { navigation } = this.props;
                        this.UserNameStr();
                        // navigation.navigate('PestServiceType');
                        // alert("PestServiceType")
                        alert('succesfully')
                    }
                });
        }
        else {
            alert('Please fill password');
            this.showSpinner = false;
        };
    }
    else {
        alert('Please fill data');
        this.showSpinner = false;
    };
}
  handleSubmit = event => { 
    if (this.state.password === this.state.cnfpassword)
    {
      console.log("Match Passwords");
      if ( this.state.name.length > 0 && this.state.mobile.length > 0 && this.state.email.length > 0 && this.state.address.length > 0 ) {
        addItem({  name: this.state.name, mobile: this.state.mobile, email: this.state.email,password: this.state.password, address: this.state.address, checkpolicy:this.state.checkpolicy });
       console.log('Item saved successfully');
       alert("Registeration successful")
        // this.setModalVisible(true);
        this.changeAuthState(STATE_LOGIN)
      
      
      }
      else {
        alert("All feilds are mandatory"); 
      }
    }
    else{
      alert("Sorry Password Does not match"); 
      console.log("Wrong Passwords");
    } 
    event.preventDefault();
  };
  // handleClose = () => {
  //   const { navigation } = this.props; 
  //   this.setModalVisible(false);
  //   // navigation.navigate('Login');

  // }; 

  renderButtonText() {
    const { buttonText } = this.props;

    if (!buttonText && this.isLogin) {
      return 'Login';
    }

    if (!buttonText && this.isSignup) {
      return 'Signup';
    }

    return buttonText;
  }

  render() {
    const {
      showLogo,
      usernameLabel,
      userAddressLabel,
      userEmailLabel,
      usermobileLabel,

      // name,
      
      passwordLabel,

      confirmPasswordLabel,
      children,
     
    } = this.props;

    return (
      <div>
      
        {showLogo && (
          <div className="text-center pb-4">
            <h3>PEST</h3>
            {/* <img
              src={logo200Image}
              className="rounded"
              style={{ width: 60, height: 60, cursor: 'pointer' }}
              alt="logo"
             onClick={onLogoClick}
            /> */}
          </div>
        )}
           {this.isSignup && (
        <Form  key={1} onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for={usernameLabel}>{usernameLabel}</Label>
          <Input onChange={this.handleChangeName} 
            placeholder='Enter your Name'
            type='text' />
        </FormGroup>
        <FormGroup>
          <Label for={userEmailLabel}>{userEmailLabel}</Label>
          <Input onChange={this.handleChangeEmail} 
            placeholder='Enter your@email'
            type='email' />
        </FormGroup>
       
        <FormGroup>
          <Label for={passwordLabel}>{passwordLabel}</Label>
          <Input onChange={this.handleChangePassword} 
            placeholder='Enter your Password' 
            type="password"/>        </FormGroup>
      
          <FormGroup>
            <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
            <Input onChange={this.handleChangeCnfPassword} 
            placeholder='Confirm your Password'
            type="password" />          </FormGroup>
          
       
        <FormGroup>
          <Label for={usermobileLabel}>{usermobileLabel}</Label>
          <Input onChange={this.handleChangeMobile} 
            placeholder='Enter your Phone Number'
            type='number' />
        </FormGroup>
    
         <FormGroup>
          <Label for={userAddressLabel}>{userAddressLabel}</Label>
          <Input onChange={this.handleChangeAddress} 
            placeholder='Enter Address' 
            />        </FormGroup>
          
            {this.isSignup &&(
        <FormGroup check>
          <Label check>
            <Input type="checkbox" onChange={this.state.checkpolicy} />{' '}
            {this.isSignup ? 'Agree the terms and policy' : 'Remember me'}
          </Label>
        </FormGroup>
        )}
        <hr />
        <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
          onClick={this.handleSubmit}>
          {this.renderButtonText()}
        </Button>

        <div className="text-center pt-1">
          <h6>or</h6>
          <h6>
            
              <a href="#login" onClick={this.changeAuthState(STATE_LOGIN)}>
                Login
              </a>
            
              {/* <a href="#signup" onClick={this.changeAuthState(STATE_SIGNUP)}>
                Signup
              </a> */}
            
            
          </h6>
        </div>

        {children}
        </Form>
          )}
           {this.isLogin &&(
        <Form key={2} onSubmit={this.handleSave}>
        <FormGroup>
          <Label for={usernameLabel}>{usernameLabel}</Label>
          <Input onChange={this.handleChangeName} 
            placeholder='Enter your Name'
            type='text' />
        </FormGroup>
        <FormGroup>
          <Label for={userEmailLabel}>{userEmailLabel}</Label>
          <Input onChange={this.handleChangeEmail} 
            placeholder='Enter your@email'
            type='email' />
        </FormGroup>
       
        <FormGroup>
          <Label for={passwordLabel}>{passwordLabel}</Label>
          <Input onChange={this.handleChangePassword} 
            placeholder='Enter your Password' 
            type="password"/>        </FormGroup>
          <hr />
          <Link to="/admindashboard">   
               <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
          onClick={this.handleSave}>
          {this.renderButtonText()}
        </Button>
        </Link>

        <div className="text-center pt-1">
          <h6>or</h6>
          <h6>
            
              {/* <a href="#login" onClick={this.changeAuthState(STATE_LOGIN)}>
                Login
              </a> */}
            
              <a href="#signup" onClick={this.changeAuthState(STATE_SIGNUP)}>
                Signup
              </a>
            
            
          </h6>
        </div>

        {children}
        </Form>
           )}
      </div>

    );
  }
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  showLogo: PropTypes.bool,
  usernameLabel: PropTypes.string,
  userEmailLabel:PropTypes.string,
  userAddressLabel:PropTypes.string,
  usermobileLabel:PropTypes.string,

 
  passwordLabel: PropTypes.string,
  confirmPasswordLabel: PropTypes.string,
  onLogoClick: PropTypes.func,
};

AuthForm.defaultProps = {
  authState: 'LOGIN',
  showLogo: true,
  usernameLabel: 'User Name',
  userEmailLabel: 'Email',
  usermobileLabel: 'Phone Number',


 
  userAddressLabel: 'Address',
 
  passwordLabel: 'Password',
 
  confirmPasswordLabel: 'Confirm Password',

  onLogoClick: () => {},
};

export default AuthForm;
