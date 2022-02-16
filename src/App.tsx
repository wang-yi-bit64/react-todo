/*
 * @Author: wangyi
 * @Description: 
 * @Date: 2022-02-16 21:29:22
 * @LastEditTime: 2022-02-16 21:40:34
 */
import React,{ FC } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
// 项目入口
const App: FC = () => {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
