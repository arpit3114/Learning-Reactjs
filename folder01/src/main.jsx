import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const AnotherElement = (
  <a href="https://leetcode.com/u/arpit3114" target='_blank'>Visit here</a>
)

const ReactElement = React.createElement(
  'a',
  {href: 'https://leetcode.com/u/arpit3114', target:'_blank'},
  'Come here'
)

createRoot(document.getElementById('root')).render(
  // AnotherElement
  // ReactElement
  <App />
  
)
