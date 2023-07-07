import React from "react";
import './Intro.css'
import Panel from "../components/Panel";
import Dropdown from '../components/Dropdown';
import logo from '../images/logo.jpg'

function Intro (){
    return(
        <div className="intro">
            <Panel>
                <h1>Welcome to the Dev Vault!</h1>
                <p1>This vault stores all the valuable content you come across. Time to close the 50 tabs you have open!</p1>
                <img className="logo" src={logo} alt="logo"/>
            </Panel>
            <Panel>
                <Dropdown></Dropdown>
            </Panel>
        </div>
    )
}

export default Intro;