import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import FoodOption from "./component/FoodOption";
import Header from "./component/Header";
import GroceryOption from "./component/GroceryOption";
import DineOption from "./component/DineOption";
import Restaurant from "./component/Restaurant";


function App()
{
    return(
   <>
   <Header />
   <FoodOption/>
   <GroceryOption/>
   <DineOption/>
   <Restaurant/>    
   </>
    )
}







ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
