/*
 * @Author: wangyi
 * @Description:
 * @Date: 2022-02-16 21:29:22
 * @LastEditTime: 2022-03-03 18:01:33
 */
import React, { FC } from 'react';
import { Provider } from "mobx-react"
import { observer } from "mobx-react-lite"
import { ConfigProvider } from "antd"
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import Home from '@/pages/Home';
import About from '@/pages/About';
import Todo from "@/pages/Todo";
import useStores from "@/hooks/useStores";
// 项目入口
const App: FC = () => {
  const store = useStores();
  console.log(store.settings)
  return (
    <Provider>
      <ConfigProvider>
        <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/todo">Todo</Link>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/todo' element={<Todo />} />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  );
}

export default observer(App);
