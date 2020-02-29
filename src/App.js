import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AppRouter from './router'
import Nav from './router/Nav/Nav'

function App() {
   return (
      <Router>
         <div>
            <div className="App">
               <header className="App-header">
                  <Nav />
               </header>
            </div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <div className="App-Content">
               <AppRouter />
            </div>
         </div>
      </Router>
   )
}

export default App
