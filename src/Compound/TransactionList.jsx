import React, {useContext}from 'react'
import { GlobalContext} from '../Context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {

  //passing transactions a s a props
  const { transactions }= useContext(GlobalContext)
  
    return (
        <>
            
      <h3>History</h3>
      <ul className="list">
        {transactions.map((e)=>(<Transaction key={e.id} e={e}/>))}
      </ul>
        </>
    )
}

export default TransactionList
