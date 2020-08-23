import React, {createContext, useState} from 'react'
export const AirportListContext = createContext()

const AirportListContextProvider  = props =>{
    const [value, setValue] = useState("Choose Airport");
    const [open, setOpen] = useState(false);        

   

    const selectAirport =(e)=>{
        setOpen(!open)
        setValue(e.target.textContent);
      }
    
      const showAirportList =()=>{
        setOpen(!open)
      }

  

    return (
        <AirportListContext.Provider value={{selectAirport,showAirportList, value, open }}>
            {props.children}
        </AirportListContext.Provider>
    )
};

export default AirportListContextProvider