import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchUser} from '../actions'


class  UserHeader extends React.Component {

    componentDidMount(){
        
        this.props.fetchUser(this.props.userId);
    }
    render(){
        const user= this.props.users;
       if(!user){
           return <div>sdjifsd</div>
       }
        return <div>{user.name}</div>
       
    }   

}

const mapStateToprops=(state)=>{
  return {
      users:state.users 
  }
}


export default connect(mapStateToprops,
    {fetchUser}
    )(UserHeader);