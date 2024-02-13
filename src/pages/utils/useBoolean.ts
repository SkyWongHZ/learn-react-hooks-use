import { useMemo, useState } from 'react';

interface  Actions{
    toggle:()=>void
    setTrue:()=>void
    setFalse:()=>void
}

export default(defaultValue=false):[boolean,Actions]=>{
    const [state,setState]=useState(defaultValue)

    const actions=useMemo(()=>{
        const  toggle=()=>{
            setState(!state)
        }
        const setTrue=()=>{
            setState(true)
        }
        const  setFalse=()=>{
            setState(false)
        }
        return{
            toggle,setTrue,setFalse
        }
    },[])
   
    return [state,actions]
}