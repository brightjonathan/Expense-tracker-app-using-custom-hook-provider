import React, {useContext} from 'react'
import { GlobalContext} from '../Context/GlobalState'

const Transaction = ({e}) => {

    //passing deleteTransaction as a props
    const { deleteTransaction }= useContext(GlobalContext)

    //a terney operation
    const sign = e.amount < 0 ? "-" : "+"

    return (
        <li className={e.amount < 0 ? "minus" : "plus"}>
        {e.text}
        <span>{sign}N{Math.abs(e.amount)}</span><button onClick={()=> deleteTransaction(e.id)} className="delete-btn">x</button>
      </li> 
    )
}

export default Transaction
