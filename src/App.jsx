
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'
import { useState } from 'react'

function App() {
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>

      <h1 className=' text-center text-4xl font-bold my-8 '>Hot Hot Cold Coffee: {coffees.length}</h1>


      <div className='grid md:grid-cols-2 gap-4 w-11/12  mx-auto'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees = {coffees}
            setCoffees = {setCoffees}
          ></CoffeeCard>)
        }
      </div>

     <div className="text-center my-8"> <Link to='/addCoffee' className='btn'>Add a new coffee</Link></div>
    </div>
  )
}

export default App
