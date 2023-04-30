import React, { Component, Suspense, lazy } from 'react'

import { Outlet,
    RouterProvider,
    Link,
    createReactRouter,
    createRouteConfig, } from '@tanstack/react-router'

const Signin = lazy(() => import('./general/Signin'));

const Signup = lazy(() => import('./general/Signup'));
    
const rootRoute = createRouteConfig(
//     {
//     component: () => (
//       <>
//         <div>
//           <Link to="/">Home</Link> <Link to="/signUp">sign Up</Link>
//         </div>
//         <hr />
//         <Outlet />
//       </>
//     )
//   }
  );

  const indexRoute = rootRoute.createRoute({
    path: '/',
    component: Signin,
  })

  const signInRoute = rootRoute.createRoute({
    path: '/signin',
    component: Signin,
  })
  
  const signUpRoute = rootRoute.createRoute({
    path: '/signup',
    component: Signup,
  })

  const routeConfig = rootRoute.addChildren([indexRoute, signInRoute, signUpRoute]);

  const router = createReactRouter({ routeConfig })


  const AppTackRoutes: React.FC = () => { 
    return <>
        <RouterProvider router={router} />
      </>
  }

  export default AppTackRoutes