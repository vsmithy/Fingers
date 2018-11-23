import React, { Component } from 'react'
import { parseResponse } from './responseChecker'

class Editor extends Component {
  constructor(props){
    super(props)

    this.state = {
      currQuestion: 'hai!',
      showHint: false,
    }//state
  }//constructor

  componentDidMount(){
    //get regex questions bank
    //set state with current question
    //the questions should be a generator that moves to the next item automatically if submission passes.

    console.log('componentdidmount')
    const questionForNow = this.props.section === 'Regex' ? 'Hello Keeper of the Watch. The time has come for you to fulfill your destiny! Trapped deep in the jade forest is the panda bear of virtue and strength. Our hero THE HERO is en-route to save it but lurking not far behind is the spoofer magnus STRING-a-nator. We need your mystical powers of regular expressions to defend the gates of the village and keep unwanted strings from entering until THE HERO can save the panda and restore our world to its rightful order. Only those with the righteous blessing of PHONENUMBERNESS can enter. PHONENUMBERNESS enchantments are either (###)###-#### or ###-###-####. Can you write the regex that will keep us safe?' : 'the challenge question would go here.'

    this.setState({ currQuestion: questionForNow })
  }//componentDidMount

  render(){
    const hintView = this.state.showHint ? 'showHint' : 'showHint hidden'
    const hintText = this.props.section === 'Regex' ? 'try something like: /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}1\d{4}/   - with backslashes sprinkled throughout' : 'The hint would go here'
    return (
      <div className="editor">
        <p className="reQuestion">{this.state.currQuestion}</p>
        <span>
          <button onClick={() => this.setState({ showHint: !this.state.showHint })} className="hint">hint</button>
          <p className={hintView}>{hintText}</p>
        </span>
        <form onSubmit={parseResponse} className="answer-form">
          <input type="text"/>
          <button type="submit" className="submit-ans">submit</button>
        </form>
      </div>
    )//return
  }//render
}//Editor

export default Editor