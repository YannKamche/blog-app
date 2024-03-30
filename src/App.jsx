import { useEffect, useState } from 'react'
import React from 'react'
import { About, AddEditBlog, Auth, Details, Home, NotFound } from './pages/index'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './style.scss'
import './media-query.css'
import Header from './components/Header'
import { auth } from './firebase'
import { signOut } from 'firebase/auth'

const App = () => {
  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);

   const navigate = useNavigate();


   useEffect(() => {
     auth.onAuthStateChanged((authUser) => {
       if (authUser) {
         setUser(authUser);
       } else {
         setUser(null);
       }
     });
   }, []);
  
   const handleLogout = () => {
     signOut(auth).then(() => {
       setUser(null);
       setActive("login");
       navigate("/auth");
     });
   };

  return (
    <div>
      <Header setActive={setActive} active={active} user={user} handleLogout={handleLogout}/>
      <ToastContainer position='top-center'/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/detail/:id' element={<Details />} />
        <Route path='/create' element={<AddEditBlog />} />
        <Route path='/update/:id' element={<AddEditBlog />} />
        <Route path='/about' element={<About />} />
        <Route path='/auth' element={<Auth setActive={setActive} setUser={setUser}/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
