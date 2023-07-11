import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
    const [reactRotated, setreactRotated] = useState(false);
    const [reactSubMenu, setreactSubMenu] = useState(false);

    const onReactClick = () => {
        setreactRotated(!reactRotated);
        setreactSubMenu(!reactSubMenu);
    }

    const [inforRotated, setinforRotated] = useState(false);
    const [inforSubMenu, setinforSubMenu] = useState(false);

    const onInforClick = () => {
        setinforRotated(!inforRotated);
        setinforSubMenu(!inforSubMenu);
    }

    const [oracleRotated, setoracleRotated] = useState(false);
    const [oracleSubMenu, setoracleSubMenu] = useState(false);

    const onOracleClick = () => {
        setoracleRotated(!oracleRotated);
        setoracleSubMenu(!oracleSubMenu);
    }
    const sidebar = (e) => {
        e.preventDefault();
        document.querySelector(".sidebar").classList.toggle("hidden");

    }

    const activeClass = "text-base block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white ";

    return (
        <div className=' bg-gray-900  '>
            <>
                <span
                    className="absolute text-white text-4xl top-2 left-4 cursor-pointer"
                    onClick={sidebar}
                >
                    <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md" />
                </span>
                <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-slate-900 ">
                    <div className="text-gray-100 text-xl">
                        <div className="p-2.5 mt-1 ml-2 flex items-center">
                            <a href="https://www.dayacs.com/" target='blanck'>
                                <img width="200" height="20" src="https://www.dayacs.com/images/logoupDCS.png" alt="logo-img"></img>

                            </a>
                            <i
                                className="bi bi-x-lg cursor-pointer ml-6 lg:hidden"
                                onClick={sidebar}
                            />
                        </div>
                        <div className="my-2 bg-gray-600 h-[3px]" />
                    </div>

                    <NavLink to="/" end>
                        <div
                            className=" menu p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer active:bg-blue-800  hover:bg-blue-600 text-white"

                        >
                            <img width="30" height="30" src="https://img.icons8.com/color/30/home--v1.png" alt="home--v1" />
                            <div className="flex justify-between w-full items-center">


                                <div className={({ isActive }) => isActive ? activeClass : ''}>
                                    <span className="text-[15px] ml-4 text-gray-200 font-bold">
                                        Home Page
                                    </span>
                                </div>




                            </div>
                        </div>
                    </NavLink>

                    {/* informatica  */}
                    <div
                        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                        onClick={onInforClick}
                    >
                        <img width="30" height="30" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/30/external-configuration-artificial-intelligence-kiranshastry-lineal-color-kiranshastry.png" alt="external-configuration-artificial-intelligence-kiranshastry-lineal-color-kiranshastry"/>
                        <div className="flex justify-between w-full items-center">
                            <span className="text-[15px] ml-4 text-gray-200 font-bold">
                                Informatica
                            </span>
                            <div className={inforRotated ? 'rotate-180' : 'rotate-0'}>
                                <span className="text-sm " id="arrow">
                                    <i className="bi bi-chevron-down" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={inforSubMenu ? 'hidden' : 'show, bg-slate-700'}>
                        <div
                            className=" text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
                            id="subReactMenu"
                        >
                            <NavLink to="/informatica/dwh" className={({ isActive }) => isActive ? activeClass : ''}>
                                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                                    DWH
                                </h1>
                            </NavLink>
                            <NavLink to="/informatica/questions" className={({ isActive }) => isActive ? activeClass : ''}>
                                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                                    Infom. Questions
                                </h1>
                            </NavLink>
                            <NavLink to="/informatica/scenario_based_ques" className={({ isActive }) => isActive ? activeClass : ''}>
                                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                                    Scenario Based Que.
                                </h1>
                            </NavLink>
                        </div>
                    </div>
                    <hr></hr>

                    {/* oracle */}
                    <div
                        className=" menu p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                        onClick={onOracleClick}
                    >
                        <img width="30" height="30" src="https://img.icons8.com/plasticine/30/oracle-pl-sql--v3.png" alt="oracle-pl-sql--v3"/>
                        <div className="flex justify-between w-full items-center">
                            <span className="text-[15px] ml-4 text-gray-200 font-bold">
                                Oracle
                            </span>
                            <div className={oracleRotated ? 'rotate-0' : 'rotate-180'}>
                                <span className="text-sm " id="arrow">
                                    <i className="bi bi-chevron-down" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={oracleSubMenu ? 'show, bg-slate-700' : 'hidden'} >
                        <div
                            className=" text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold bg-slate-700"
                            id="subReactMenu"
                        >
                            <NavLink to="/oracle/questions" className={({ isActive }) => isActive ? activeClass : ''}>
                                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                                    Questions

                                </h1>
                            </NavLink>

                            <NavLink to="/oracle/query_questions" className={({ isActive }) => isActive ? activeClass : ''}>
                                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                                    Query Based Que.

                                </h1>
                            </NavLink>

                            <NavLink to="/oracle/programming_sql" className={({ isActive }) => isActive ? activeClass : ''}>

                                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                                    PL/SQL
                                </h1>
                            </NavLink>


                        </div>
                    </div>
                    <hr></hr>

                    {/* reactjs */}
                    <div
                        className=" menu p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                        onClick={onReactClick}
                    >
                        <img width="30" height="30" src="https://img.icons8.com/offices/30/react.png" alt="react" />
                        <div className="flex justify-between w-full items-center">
                            <span className="text-[15px] ml-4 text-gray-200 font-bold">
                                React JS
                            </span>
                            <div className={reactRotated ? 'rotate-0' : 'rotate-180'}>
                                <span className="text-sm " id="arrow">
                                    <i className="bi bi-chevron-down" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={reactSubMenu ? 'show, bg-slate-700' : 'hidden'} >
                        <div
                            className=" text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold bg-slate-700"
                            id="subReactMenu"
                        >
                            <NavLink to="/react/introduction" className={({ isActive }) => isActive ? activeClass : ''}>
                                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                                    Introduction

                                </h1>
                            </NavLink>

                            <NavLink to="/react/component" className={({ isActive }) => isActive ? activeClass : ''}>
                                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                                    Components

                                </h1>
                            </NavLink>

                            <NavLink to="/react/props" className={({ isActive }) => isActive ? activeClass : ''}>

                                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                                    Props & States
                                </h1>
                            </NavLink>

                            <NavLink to="/react/hooks" className={({ isActive }) => isActive ? activeClass : ''}>
                                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                                    Hooks
                                </h1>
                            </NavLink>

                            <NavLink to="/react/advance_concepts" className={({ isActive }) => isActive ? activeClass : ''}>
                                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                                    Advance Concepts
                                </h1>
                            </NavLink>


                        </div>
                    </div>
                    <hr></hr>

                </div>
            </>



        </div>
    )
}
