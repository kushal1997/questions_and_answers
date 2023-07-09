import React from 'react'
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage"
import { RaectAdvanceConcepts, ReactComponents, ReactHooks, ReactIntroduction, ReactPropsAndStates } from '../pages/react';



export const AllRoutes = () => {
  return (


    <Routes>
      <Route path='/' Component={HomePage} />
      {/* <Route path='/' Component={QuestionCards}></Route> */}


      {/* path for react submenu */}
      <Route path='/react/introduction' Component={ReactIntroduction}></Route>
      <Route path='/react/component' Component={ReactComponents}></Route>
      <Route path='/react/props' Component={ReactPropsAndStates}></Route>
      <Route path='/react/hooks' Component={ReactHooks}></Route>
      <Route path='/react/advance_concepts' Component={RaectAdvanceConcepts}></Route>


      
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
    </Routes>

  )
}
