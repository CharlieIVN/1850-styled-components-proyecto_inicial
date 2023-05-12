import React from "react";
import themeOn from "../../assets/images/themeOn.svg"
import themeOff from "../../assets/images/themeOff.svg"
import {icon} from "../UI"


export default (tema) => {
    const claro = <icon src={themeOn} alt= "Tema claro"/>
    const oscuro = <icon src={themeOff} alt= "Tema oscuro"/>

    return <> {tema ? oscuro : claro}</>;
}