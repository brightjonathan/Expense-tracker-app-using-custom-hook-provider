import {useState, useContext} from 'react'
import { GlobalContext} from '../Context/GlobalState'


const AddTransaction = () => {
  

  //creating state for the input
  const [text,settext] = useState("")
  const [amount, setamount] = useState("")

  //passing transactions a s a props
  const {addTransaction}= useContext(GlobalContext)

  //for the submit Event
  const handleEvent = (e)=>{
      e.preventDefault()

      const newTransaction ={
        id: Math.floor(Math.random()* 1000000),
        text,
        amount: +amount
      }
      addTransaction( newTransaction)
      settext("")
      setamount("")

  }

    return (
        <>
          <h3>Add new transaction</h3>
      <form onSubmit={handleEvent}>
        <div className="form-control">
          <label>Text</label>
          <input 
          value={text}
          onChange={(e)=>settext(e.target.value)}
          type="text"  
          placeholder="Enter text..." 
          />
        </div>
        <div className="form-control">
          <label
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input 
          type="number"
          value={amount}
          onChange={(e)=>setamount(e.target.value)}
          placeholder="Enter amount..." 
           />
        </div>
        <button className="btn">Add transaction</button>
      </form>  
        </>
    )
}

export default AddTransaction
