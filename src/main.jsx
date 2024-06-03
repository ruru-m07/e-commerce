import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/signup/Signup.jsx'
import Login from './components/login/Login.jsx'
import Home from './components/home/Home.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
// import Verification from './components/verification/Verification.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },

      {
        path: '/about',
        element: <div>about</div>
      },

      // {
      //   path: '/verification',
      //   element: <Verification/>
      // },

      {
        path: '/login',
        element: <Login />
      },

      {
        path: '/Signup',
        element: <Signup />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
