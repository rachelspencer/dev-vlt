import React from "react";
import './Intro.css'
import Panel from "../components/Panel";
import Dropdown from '../components/Dropdown';
import logo from '../images/logo.jpg'

function Intro (){
    return(
        <div className="intro">
            <Panel className="intro-panel">
                <h1>Welcome to the Dev Vault!</h1>
                <p>This vault stores all the valuable web dev content you come across. Close the 50 tabs you have open and save it to your vault!</p>
                <img className="logo" src={logo} alt="logo"/>
            </Panel>
            <Panel className="intro-panel">
                <Dropdown/>
            </Panel>
        </div>
    )
}

export default Intro;