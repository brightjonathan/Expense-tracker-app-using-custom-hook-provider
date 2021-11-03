import React,{createContext, useReducer} from 'react'
import { useState } from 'react'
import AppReducer from './AppReducer'

//initial state
const initialState = {
    transactions: []
}



//using create constext
export const GlobalContext = createContext(initialState)

//using provider in passing props to any components
//provider component
export const GlobalProvider =  ({children}) =>{
 const [state, dispatch] = useReducer(AppReducer, initialState)

 //actions for deleting
 const deleteTransaction = (id) => {
     
    dispatch({
        type: "DELETE_TRANSACTION",
        payload: id
    })
 }

 //action for adding a transaction
 const addTransaction = (transaction) => {
     
    dispatch({
        type: "ADD_TRANSACTION",
        payload: transaction
    })
 }


 return(<GlobalContext.Provider value={{transactions: state.transactions, 
 deleteTransaction,  addTransaction }}>
    { children }
 </GlobalContext.Provider>)
}








