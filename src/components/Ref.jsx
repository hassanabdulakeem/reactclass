// The useRef hook in React is used to create a mutable/changeable object that persists across renders, and it's primarily utilized for accessing DOM elements and storing values that don't trigger re-renders when modified.

import { useRef } from "react"

const Ref = () => {
    const inputEmailRef = useRef(null)
    const inputNameRef = useRef(null)


    const handleChange = (e)=>{
        
        console.log(inputEmailRef.current.value);
        
    }
    
  return (
    <div>
        <label htmlFor="ggg">Email</label>
        
        <input type="email" name="ggg" id="ggg" ref={inputEmailRef} onChange={handleChange} placeholder="email"  />

        <button>submit</button>
        <br /><br />

        <input type="text" ref={inputNameRef} onChange={handleChange} placeholder="text"/>
    </div>
  )
}

export default Ref