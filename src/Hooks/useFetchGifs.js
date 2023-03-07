import { useEffect, useState } from "react"
import { getGifs } from "../Helpers/getGifs";


function useFetchGifs(category) {
  const [state, setState] = useState({
    data:[],
    loading: true
  });

  useEffect(()=>{

    const load= async()=>{
             const resp= await getGifs(category)
             setState({data:resp,loading:false})
           }
           load()

  },[category])
  // setState(()=>{
  //   data:[1,2,3,4]
  //   loading:false
  // },300)

  return state
}

export default useFetchGifs