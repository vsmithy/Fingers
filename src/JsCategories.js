import React from 'react'

function jsSetup(props, section){
  /*
    * If you navigate to JS/Stuff then this function
    * determines what the heading says and which response checker
    * to use when validating user submission.
  */
  props.handler('Editor', section)

  
  //add editor choice stuff here
  //I should pass the editor details to the Editor component as a prop


}//jsSetup

const JsCategories = (props) => (
  <ul>
    <li onClick={() => props.handler('HomeCategories', null)}>Back</li>
    <li onClick={() => jsSetup(props,'Arrays')}>Arrays</li>
    <li onClick={() => jsSetup(props,'Strings')}>Strings</li>
    <li onClick={() => jsSetup(props,'Dates')}>Dates</li>
    <li onClick={() => jsSetup(props,'Objects')}>Objects</li>
    <li onClick={() => jsSetup(props,'Regex')}>Regex</li>
    <li onClick={() => jsSetup(props,'DOM')}>DOM</li>
  </ul>
)
export default JsCategories