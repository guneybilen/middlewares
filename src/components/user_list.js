import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';

class UserList extends Component {

  componentWillMount = () => {
    this.props.fetchUsers();
  }

  /* 
    this.state.data.map(function(item, i){
      console.log('test');
      return <li key={i}>Test</li>
    })
  */

  renderUser() {
    if (this.props.users[0] === undefined) return <div>Loading...</div>;
    //alert(this.props.users[0]);
    return this.props.users.map(user => {
      // alert(user.name);
      return (
        <div className="card card-block" key={user.id}>
          <h4 className="card-title">{user.name}</h4>
          <p className="card-text">{user.company.name}</p>
          <a href="/" className="btn btn-primary">{user.website}</a>
        </div>
      );
    })
  }

  renderItem(user) {
    if (user === undefined) return <div>Loading...</div>;
    return (
      <div className="card card-block" key={user.id}>
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}</p>
        <a href="/" className="btn btn-primary">{user.website}</a>
      </div>
    );
  }


  render() {
    return (
      <div className="user-list">
        {this.props.users.map(this.renderItem)}
        {this.renderUser()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  // console.log('state.users', state.users)
  return { users: state.users };
}

/* 
const mapDispatchToProps = {
 
}
 */

export default connect(mapStateToProps, actions)(UserList);
