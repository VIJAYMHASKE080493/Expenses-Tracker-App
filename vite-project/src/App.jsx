import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header' >
          <header>
            <h3>Expense Tracker</h3>
          </header>
      </div>
      <div className='name'>
        <h1>Hello, Vijay Mhaske</h1>
      </div>
      <div className='ExpensesName'>
        <div className='T-Budge'>
          <p>Total Budget</p>
          <h2>$20,000</h2>
        </div>
        <div className='T-Expense'>
          <p>Total Expense</p>
          <h2>$12,205</h2>
        </div>
        <div className='Remaninig-B'>
          <p>Remanining Budget</p>
          <h2>$12,205</h2>
        </div>
      </div>
      
      <div className='Categaries'>
        <input type="text" placeholder='Search'/>
        <button className='active'>All Expenses</button>
        <button>Food Drinks</button>
        <button>Groceries</button>
        <button>Travel</button>
        <button>Health</button>
        <button className='add-budget'>Add Budget</button>
        <button className='Add-Expenses'>Add Expenses</button>
      </div>
    </>
  )
}

export default App
