import React from "react";
import {connect} from "react-redux";
import Navbar from "./Navbar";


let mapStateToProps = (state) =>{
    return {
        state: state
    }
}
let mapDispatchToProps = () =>{return{}}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps ) (Navbar)

export default NavbarContainer;
