import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Form from './Form.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <Routes>
  <Route path='/' element={ <StrictMode>
    <Form />
  </StrictMode> }>
    <Route  path='/' element={ <Form />} ></Route>
    <Route  path='/form' element={<Form />} ></Route>


  </Route>

 
 </Routes>
  </BrowserRouter>,
)
