

const Provider = ({children}) => {
   console.log("hello")
  return (
    <div>
        <h1>Provider Start</h1>
        {children}
        <h1>Provider End</h1>
    </div>
  )
}

export default Provider
