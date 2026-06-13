import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Welcome from './components/Welcome'
import { Product } from './components/Product'
import { UserDetails } from './components/UserDetails'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <Welcome name="Yamal" />
      <Welcome name="Lamine" />
      <Welcome name="Gavi" />
      <Product title="Laptop" price={999.99} inStock={true} categories={["Electronics", "Computers"]} />  
       <UserDetails name="Alice" isOnline={true} /> 
       <UserDetails name="Bob" isOnline={false} />  
    </>
  )
}

export default App
