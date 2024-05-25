import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { RouterProvider, createBrowserRouter,Route,Router } from 'react-router-dom';
import './index.css'
// import Form from './Form.jsx';
// import Success from './Success.jsx';

// const router=createBrowserRouter([
//   {
//     path:'/',
//     children:[{
//       path:'',
//       element:<Form/>
//     },{
//       path:'success',
//       element:<Success/>
//     }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App/>
  </React.StrictMode>,
)
