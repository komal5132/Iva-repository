import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
import KidsContextProvider from './context/kidsContextProvider.jsx'
import { Route,Routes } from 'react-router-dom'
import AdminLoginPage from './pages/AdminLoginPage/AdminLoginPage.jsx'
import TeacherLoginSignUp from './pages/TeacherLoginSignUp/TeacherLoginSignUp.jsx'
import ParentAuthPage from './pages/ParentAuthPage/ParentAuthPage.jsx'



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
        {/* <Route path='/playgroup' element={<PlaygroupPage/> }/>
        <Route path='/PP1Page' element={<PP1Page/> }/>
        <Route path='/PP2Page' element={<PP2Page/> }/>
        <Route path='/PP3Page' element={<PP3Page/> }/> */}
      </Routes>             
      <Footer/>
      </KidsContextProvider>
    </div>
  )
}

export default App