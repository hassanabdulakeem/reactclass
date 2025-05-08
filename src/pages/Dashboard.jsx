import { useEffect } from "react"
import { toast } from "sonner"

const Dashboard = () => {

  useEffect(()=>{
    toast.success("Wleome to dashboard")  
  },[])
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={()=>{
        toast.success("wleomece ")
      }}>Toast</button>
    </div>
  )
}

export default Dashboard
