import { useState ,useMemo} from "react";

interface  Actions<T>{
    set:(value:T)=>void
    setLeft:()=>void
    setRight:()=>void
    toggle:()=>void
}

export default(defaultValue=false,reverseValue:any)=>{
    const [state,setState]= useState(defaultValue,)

    const actions=useMemo(()=>{
        const toggle=()=>{
            console.log('state:',state,state===defaultValue);
            setState(s=>{
                console.log('s:',s);
                return s===defaultValue?reverseValue:defaultValue
            })
        }
        const set=(value:any)=>{
            setState(value)
        }
        const setLeft=()=>{
            setState(defaultValue)
        }
        const setRight=()=>{
            setState(reverseValue)
        }
        return{set,setLeft,setRight,toggle}
    },[])
    return [state,actions]
}
 