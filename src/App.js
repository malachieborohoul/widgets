import React from "react";
// import Accordion from "./components/Accordion";
import Search from "./components/Search";
// const items=[
//     {
//         title: "What is React?",
//         content: "React is a frontend javascript framework"
//     },
//     {
//         title: "Why use React?",
//         content: "React is favorite JS libraries"
//     },
//     {
//         title: "How do you use React?",
//         content: "By creating components"
//     },
// ];
export default ()=>{
    return <div className="app">
        {/* <Accordion items={items}/> */}
        <Search/>
    </div>
};