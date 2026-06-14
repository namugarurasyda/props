import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Welcome from './components/Welcome'
import { Product } from './components/Product'
import { UserDetails } from './components/UserDetails'
import { Alert } from './components/Alert'  
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
       <Alert>
        <p>Your changes have been made</p>
      </Alert>
      <Alert type='error'>
        <p>something is wrong</p>
      </Alert>
      <Alert type='warning'>
        <p>Be careful!</p>
      </Alert>
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
