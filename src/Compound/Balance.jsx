import React,{useContext} from 'react'
import { GlobalContext} from '../Context/GlobalState'

const Balance = () => {

    //passing transactions a s a props
  const { transactions }= useContext(GlobalContext)

  
// const localStorageTransactions = JSON.parse(
//     localStorage.getItem('transactions')
//   );
  

// let transactions1 =
//   localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

  //mapping through the props
  const amounts =  transactions.map((e)=> e.amount)
  

  //calculating total by adding all positive number and approximate it to two decimal places
  const total = amounts.reduce((acc,item)=> (acc += item), 0).toFixed(2)

    return (
        <>
            <h4>Your Balance</h4>
            <h1>N{total}</h1>
        </>
    )
}

export default Balance
