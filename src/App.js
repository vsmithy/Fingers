import React, { Component } from 'react';
import './App.css';
import HomeCategories from './HomeCategories'
import JsCategories from './JsCategories'
import Editor from './Editor'

function getView(select, handler){
  /*
   * This function chooses which component to render
  */
  
  let viewChoice = <HomeCategories handler={handler} /> //the default view

  switch(select){
    case 'HomeCategories':
      viewChoice = <HomeCategories handler={handler} />
      break
    case 'JsCategories':
      viewChoice = <JsCategories handler={handler} />
      break
    case 'Editor':
      viewChoice = <Editor handler={handler} />
      break
    default:
      viewChoice = <HomeCategories  handler={handler} />
  }
  return viewChoice
}//getView

class App extends Component {
  constructor(props){
    super(props)
    this.handleView = this.handleView.bind(this)
    this.state = {
      view: 'HomeCategories',
      heading: 'finger excercises. lets get started.'
    }//state
  }//constructor

  handleView(choice, heading){
    heading ? this.setState({ view: choice, heading: heading }) : this.setState({ view: choice })
  }//handleView

  render() {
    const { view, heading } = this.state
    
    return (
      <div className="App">
        <h1 className="header">{heading}</h1>
        { getView(view, this.handleView) }
      </div>
    )//return
  }//render
}//App

export default App