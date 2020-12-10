import React,{createContext,useState} from 'react'


export const HeaderContext=createContext()

export const  HeaderProvider=({children})=> {
    const [state,setState]=useState({
    college:"",
    subject:'',
    code:'',
    date:'',
    marks:'',
    degree:'',
    sem:''
    })
    // const [inputList,setInputList]=useState([
    //   {question:''}
    // ])
    return (
        <HeaderContext.Provider value={[state,setState]}>
          {children}
        </HeaderContext.Provider>
    )
}
