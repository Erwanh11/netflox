import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Movies from './pages/MovieList'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
      background-color: grey
    }

    body {
      margin: 70;
    }
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <GlobalStyle />
            <Routes> 
                <Route path="/" element={<Movies />} />
            </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);