import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Conditional from "./components/conditional"
import Main from './components/main';
import axios from "axios"
import {Link} from 'react-router-dom';
const fontSize2 = 20;
const marginTopValue = 10;


class App extends Component {
  state = {
    loggedIn: false,
    username: "",
    redirect: false,
    redirectTo: null,
    component: null
  }

 updateUser = (userObject) => {
  this.setState(userObject)
}

componentDidMount(){
  axios.get("/user")
    .then((response, error) => {
      if (error) {
        console.log(error.message)
      }
      else if (response.data==="no user logged in") {
        this.setState({
          loggedIn: false
        })
      }
      else {
        this.setState({
          loggedIn: true
        })
      }
    })
}

logout = () => {
  axios.get("user/logout")
  .then((response, error) => {
    if (error) {
      console.log(error.message)
    }
    else {
      console.log(response)
      this.setState({
        loggedIn: false,
        firstName: "",
        lastName: "",
        username: ""
      })
    }
  })
}

  render() {
    return (
      <div className="demo-big-content">
    <Layout>
          <Conditional if={this.state.loggedIn===true}>
          <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">
              <img src="/images/logo100.png" className="logoImage" alt="logo"></img></Link>} scroll>
            <Navigation className="navRef">
              <Link style={{ fontSize: fontSize2, marginTop : marginTopValue }} to="/search">Search</Link>
              <Link style={{ fontSize: fontSize2, marginTop : marginTopValue }} to="/userForm">Track an Application</Link>
              <Link style={{ fontSize: fontSize2, marginTop : marginTopValue }} to="/applications">My Applications</Link>
              <Link style={{ fontSize: fontSize2, marginTop : marginTopValue }} to="/about">About Us</Link>
              <Link style={{ fontSize: fontSize2, marginTop : marginTopValue }} to="/contact">Contact</Link>
              <Link style={{ fontSize: fontSize2, marginTop : marginTopValue }} to="/login" onClick={this.logout}>Logout</Link>
            </Navigation>
            </Header>
          </Conditional>
          <Conditional if={this.state.loggedIn===false}>
            <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">
              <img src="/images/logo100.png" className="logoImage" alt="logo"></img></Link>} scroll>
              <Navigation >
                <Link style={{ fontSize: fontSize2, marginTop : marginTopValue }} to="/register">Register Today</Link>
                <Link style={{ fontSize: fontSize2, marginTop : marginTopValue }} to="/login">Log In</Link>
                <Link style={{ fontSize: fontSize2, marginTop : marginTopValue }} to="/about">About Us</Link>
                <Link style={{ fontSize: fontSize2, marginTop : marginTopValue }} to="/contact">Contact</Link>
              </Navigation>
            </Header>
          </Conditional>
          <Drawer title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">
              <img src="/images/logo100.png" className="logoImage" alt="logo"></img></Link>}>
          <Conditional if={this.state.loggedIn===true}>
            <Navigation>
                <Link to="/search">Search</Link>
                <Link to="/userForm">Track an Application</Link>
                <Link to="/applications">My Applications</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login" onClick={this.logout}>Logout</Link>
            </Navigation>
          </Conditional>
          <Conditional if={this.state.loggedIn === false}>
                <Navigation>
                <Link to="/about">About Us</Link>
                <Link to="/register">Register Today</Link>
                <Link to="/login">Log In</Link>
                <Link to="/about">Contact</Link>
              </Navigation>
            </Conditional>
          </Drawer>
        <Content>
            <div className="page-content" />
            <Main loggedIn={this.state.loggedIn} />
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;