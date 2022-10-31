import React from "react";
import Solution_hero from "../Compoment/Solution_page/Solution_hero";
import Greener from "../Compoment/Solution_page/Greener";
import How_we from "../Compoment/Solution_page/How_we";
import Nutrition from "../Compoment/Solution_page/Nutrition";
import Wall_Tranined from "../Compoment/Solution_page/Wall_Trained";
import Entire from "../Compoment/Solution_page/Entire";
import Management from "../Compoment/Solution_page/Management";
import Measure from "../Compoment/Solution_page/Measure";
import Paddock from "../Compoment/Solution_page/Paddock_slider";
import Interested from "../Compoment/Interested";
import {BackButton }from "../Compoment/Backbtn";

const Solution = () =>{
    return(
     <>
        <BackButton />
        <div className="main-content for_numbers_icrement" id="paddock_section">
            <Solution_hero />
            <Greener />
            <How_we />
            <div id="nutrition_section">
                <Nutrition />
            </div>
            <Wall_Tranined />
            <Entire />
            <div id="management_section">
                <Management />
            </div>
            <Measure />
            <Paddock />
            <Interested />
         </div>
     </>
    )
};

export default Solution;