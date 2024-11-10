import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'
import Program from './components/Programs/Program'
import Gallery from './components/Gallery/Gallery'
import AboutUs from './components/AboutUs/AboutUs'
import Facilities from './components/Facilities/Facilities'
import Admission_section from './components/Admission_section/Admission_section'
import ConatctUs from './components/ContactUs/ConatctUs'
import FAQ_SECTIONS from './components/FAQ_section/FAQ_SECTIONS'
import Menubar from './components/Menubar/Menubar'
import Homepage from './pages/Homepage/Homepage'
import KidsContextProvider from './context/kidsContextProvider'
import { Route,Routes } from 'react-router-dom'
import AdminLoginPage from './pages/AdminLoginPage/AdminLoginPage.JSX'
import TeacherLoginSignUp from './pages/TeacherLoginSignUp/TeacherLoginSignUp'
import ParentAuthPage from './pages/ParentAuthPage/ParentAuthPage'


const App = () => {
  return (
    <div>
      <KidsContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/> }/>
        <Route path='/adminLogin' element={<AdminLoginPage/> }/>
        <Route path='/teacherLogin' element={<TeacherLoginSignUp/> }/>
        <Route path='/parentLogin' element={<ParentAuthPage/> }/>
      </Routes>             
      <Footer/>
      </KidsContextProvider>
    </div>
  )
}

export default App