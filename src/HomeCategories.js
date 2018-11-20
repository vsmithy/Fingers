import React from 'react'

const HomeCategories = (props) => (
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li onClick={() => props.handler('JsCategories')}>JS</li>
    <li>Python</li>
  </ul>
)

export default HomeCategories