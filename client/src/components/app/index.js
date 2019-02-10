import React, { Component } from 'react';
import Users from '../../components/users';
import GenericPoll from '../../components/genericpoll';

class App extends Component {
  render() {
    return (
	<div>
      <div>
        <Users />
      </div>
	  <div><br /><br /></div>
      <div>
        <GenericPoll />
      </div>	  
	 </div>
    );
  }
}

export default App;
