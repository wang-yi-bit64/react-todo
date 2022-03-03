/*
 * @Author: wangyi
 * @Description: 
 * @Date: 2022-03-02 16:48:26
 * @LastEditTime: 2022-03-03 18:09:22
 */
import {makeAutoObservable} from "mobx"



class Settings {
  theme = "light"
  language = "zh-CN"
  constructor() {
    makeAutoObservable(this)
  }

  upDateTheme(theme) {
    this.theme = theme
  }
}

export default Settings