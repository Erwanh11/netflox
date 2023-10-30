import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Movies from './pages/MovieList'
import { createGlobalStyle } from 'styled-components'
import SearchMovie from './pages/Search'

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
                <Route path="/Search" element={<SearchMovie />} />
            </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);