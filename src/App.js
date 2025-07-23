import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import FoodOption from "./component/FoodOption";
import Header from "./component/Header";
import Home from "./component/Home";
import GroceryOption from "./component/GroceryOption";
import DineOption from "./component/DineOption";
import Restaurant from "./component/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantMenu from "./Component/RestaurantMenu";

function App()
{
    return(
   <>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
        <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
       </Routes>
       </BrowserRouter>   
   </>
    )
}







ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
