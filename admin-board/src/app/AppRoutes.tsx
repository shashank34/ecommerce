import React, { Component, Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'


const Signin = lazy(() => import('./general/Signin'));
const Signup = lazy(() => import('./general/Signup'));


const AppRoutes: React.FC = () => {

      return <Suspense fallback=''>
          <Routes>
            {/* <Route exact path="/">
              <Redirect to="/dashboard"></Redirect>
            </Route>
            <Route exact path="/dashboard" component={ Dashboard } /> */}
  
            <Route  path="/signin" element={ <Signin></Signin> } />
            <Route  path="/signup" element={ <Signup></Signup> } />
  
            {/* <Route exact path="/ui-elements/buttons" component={ Buttons } />
            <Route exact path="/ui-elements/dropdowns" component={ Dropdowns } />
            <Route exact path="/ui-elements/icons" component={ Icons } />
  
            <Route exact path="/form/form-elements" component={ FormElements } />
  
            <Route exact path="/charts/chartjs" component={ ChartJs } />
  
            <Route exact path="/tables/basic-table" component={ BasicTable } /> */}
  
          </Routes>
        </Suspense>    
}
  
  export default AppRoutes