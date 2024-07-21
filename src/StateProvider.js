// import React,{createContext, useContext,useReducer} from "react"


// //prepares the datalayer
// export const StateContext = createContext();


// //wrap our app and provide data layer
// export const StateProvider = ({reducer,initialState,children})=>{
//     <StateContext.Provider value = {useReducer(reducer,initialState)}>
//         {children}
//     </StateContext.Provider>
// };

// //pull info from the data layer
// export const useStateValue = ()=> useContext(StateContext);

import React, { createContext, useContext, useReducer } from "react";
import reducer,{ initialState } from "./reducer.js";
export const StateContext = createContext();




export const StateProvider = ({ children }) => (

  
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

// import React, { createContext, useContext, useReducer } from "react";

// // Prepares the data layer
// export const StateContext = createContext();

// // Wrap our app and provide the data layer
// export const StateProvider = ({ reducer, initialState, children }) => (
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );

// // Pull info from the data layer
// export const useStateValue = () => useContext(StateContext);