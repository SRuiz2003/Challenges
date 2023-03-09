import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {FirstApp} from "./Challenge02_FirstApp/FirstApp"
import {SubsReset} from "./Challenge03_ Counter Subs&Reset/Subs&Reset"
import {GifExpertApp} from "./Challenge04_CategoryList/CategoryComp"
import { Counter } from './Challenge03_ Counter Subs&Reset/Counter'
import { BreakingBad } from './Challenge08_BreakingBad/BreakingBad'
import { GifGrid } from './Challenge05_GetGifs/GifGrid'
//import {Father} from './Challenge9/Father'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp/>
    <SubsReset value={1}/>
    <Counter value={0}/>
    <GifExpertApp/>
    <BreakingBad/>
    <GifGrid category={"Praise the sun"}/>
    
  </React.StrictMode>,
)
