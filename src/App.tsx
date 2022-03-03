/*
 * @Author: wangyi
 * @Description:
 * @Date: 2022-02-16 21:29:22
 * @LastEditTime: 2022-03-03 14:48:23
 */
import React, { FC } from 'react';
import {observer} from "mobx-react-lite"
import { ConfigProvider } from "antd"
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import Home from '@/pages/Home';
import About from '@/pages/About';
import useStore from "@/store";
// 项目入口
const App: FC = () => {
  const store = useStore();
  return (
    <ConfigProvider>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default observer(App);
