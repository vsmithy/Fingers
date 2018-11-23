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
    <li onClick={() => props.handler('HomeCategories', null)} className="back">Back</li>
    <li onClick={() => jsSetup(props,'Arrays')}><button disabled className="button-disabled">Arrays</button></li>
    <li onClick={() => jsSetup(props,'Strings')}><button disabled className="button-disabled">Strings</button></li>
    <li onClick={() => jsSetup(props,'Dates')}><button disabled className="button-disabled">Dates</button></li>
    <li onClick={() => jsSetup(props,'Objects')}><button disabled className="button-disabled">Objects</button></li>
    <li onClick={() => jsSetup(props,'Regex')}><button className="button-regex">Regex</button></li>
    <li onClick={() => jsSetup(props,'DOM')}><button disabled className="button-disabled">DOM</button></li>
  </ul>
)
export default JsCategories