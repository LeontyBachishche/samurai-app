import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Dialogs from './component/Dialogs/Dialogs';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import News from './component/News/News';
import Music from './component/Music/Music';
import Profile from './component/Profile/Profile';
import Setting from './component/Setting/Setting';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile state={props.state.profilePage} />} />
            <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/setting' element={<Setting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
