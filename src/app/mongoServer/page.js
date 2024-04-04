import dbConnect from "../../../config/db"
import { userModel } from "../model/users";


dbConnect()



const fetchData = async () =>{
    try {
        const data = await userModel.find()
        console.log('data', data)
        return data
    } catch (error) {
        console.log('error', error)
    }
}
export default async function mongo() {
    const data = await fetchData();
    console.log('data', data)
  
  return (<>
    <div>mongo</div>
    {data?.map((item,i) =>{
      return(
        <div key= {i}>
        <h1>{item.firstName}-{item.lastName}</h1>
        </div>
      )
    })}
    </>
  )
}
