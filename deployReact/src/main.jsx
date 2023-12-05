import './main.scss'
import './firebase'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import BlogPage from './Pages/BlogPage'
import HomePage from './Pages/HomePage'
import BlogsPage from './Pages/BlogsPage'
import MonstersPage from './Pages/MonstersPage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import BlogAddPage from './Pages/BlogAddPage'
import BlogEditorPage from './Pages/BlogEditorPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <main className="container">
            <Header/>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='blog' element={<BlogsPage/>}/>
              <Route path='blog/:id' element={<BlogPage/>}/>
              <Route path='monsters' element={<MonstersPage/>}/>
              <Route path='login' element={<LoginPage/>}/>
              <Route path='signup' element={<SignupPage/>}/>
              <Route path='admin/add' element ={<BlogAddPage/>}/>
              <Route path='admin/:id' element ={<BlogEditorPage/>}/>
              <Route path='*' element={<HomePage/>}/>
            </Routes>
            <Footer/>
          </main>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)