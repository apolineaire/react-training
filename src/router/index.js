import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ZeitSWR from '../components/ZeitSWR/ZeitSWR'
import HomePage from '../components/HomePage/HomePage'

const AppRouter = () => (
   <Switch>
      <Route exact path="/">
         <HomePage />
      </Route>
      <Route path="/swr">
         <ZeitSWR />
      </Route>
      <Route>
         <p>404 Not found</p>
      </Route>
   </Switch>
)
export default AppRouter
