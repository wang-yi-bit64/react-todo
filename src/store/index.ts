/*
 * @Author: wangyi
 * @Description: 
 * @Date: 2022-03-02 18:33:18
 * @LastEditTime: 2022-03-03 17:24:36
 */
import {createContext} from "react"
import Settings from "./settings"

export interface StoreProps {
  settings: Settings
}


const Store = createContext({
  settings: new Settings()
})

export default Store