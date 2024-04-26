import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from './Routes/Routes';
import FirebaseProvider from './Firebase/FirebaseAuth/FirebaseProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
     <RouterProvider router={router}/>
    </FirebaseProvider>
  </React.StrictMode>,
)
