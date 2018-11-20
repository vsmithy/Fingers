import React, { Component } from 'react'
import { parseResponse } from './responseChecker'

class Editor extends Component {
  render(){
    return (
      <React.Fragment>
        <h2>I am the stuff of legends...</h2>
        <form onSubmit={parseResponse}>
          <input type="text"/>
          <button type="submit">submit</button>
        </form>
      </React.Fragment>
    )//return
  }//render
}//Editor

export default Editor