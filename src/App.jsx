import { useState } from 'react'
import './App.css'
import Productcard from './Productcard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
<h1> Ecommerce Products </h1>
<div className='profilecard'>
<Productcard  title = {"Latest Smartphone"} url = {"https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price = { "$999"} description = {"State-of-the-art smartphone with a 6.5 display and advanced camera features"} />
<Productcard  title = {"Speaker"} url = {"https://images.unsplash.com/photo-1598034989845-48532781987e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price = { "$49.9"} description = {"Compact and waterproof speaker with 10 hours of battery life"} />
<Productcard  title = {"Bluetooth Speaker"} url = {"https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price = { "$49.9"} description = {"Compact and waterproof speaker with 10 hours of battery life"} />
<Productcard  title = {"developer Laptop"} url = {"https://images.unsplash.com/photo-1611532736579-6b16e2b50449?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price = { "$59.99"} description = {"Enjoy crystal clear sound and comfort with these wireless headphones, perfect for daily use and travel"} />
<Productcard  title = {"Office laptop"} url = {"https://images.unsplash.com/photo-1528562014890-9cc833b10c23?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price = { "$59.99"} description = {"Enjoy crystal clear sound and comfort with these wireless headphones, perfect for daily use and travel"} />
<Productcard  title = {"Latest Smartphone"} url = {"https://images.unsplash.com/photo-1596742578443-7682ef5251cd?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price = { "$999"} description = {"State-of-the-art smartphone with a 6.5 display and advanced camera features"} />
<Productcard  title = {"Headphones"} url = {"https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price = { "$59.99"} description = {"Enjoy crystal clear sound and comfort with these wireless headphones, perfect for daily use and travel"} />
<Productcard  title = {"Headphones"} url = {"https://images.unsplash.com/photo-1472393365320-db77a5abbecc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price = { "$59.99"} description = {"Enjoy crystal clear sound and comfort with these wireless headphones, perfect for daily use and travel"} />
<Productcard  title = {"Bluetooth Speaker"} url = {"https://images.unsplash.com/photo-1529911684551-bfe3a8553f19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price = { "$49.9"} description = {"Compact and waterproof speaker with 10 hours of battery life"} />
<Productcard/>
<Productcard/>
<Productcard/>
<Productcard/>
<Productcard/>
<Productcard/>
<Productcard/>
<Productcard/>
<Productcard/>
<Productcard/>
<Productcard/>
<Productcard/>
<Productcard/>
<Productcard/>
    </div>
    </div>
  )
}

export default App
