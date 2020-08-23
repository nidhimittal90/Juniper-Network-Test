import React, {useContext} from 'react'
import {AirportListContext}  from '../Context/AirportListContext' 

const Option = ({option}) => {
    const {selectAirport} = useContext(AirportListContext)
    const airportName = option.name +', '+ option.city + '('+ option.code+')'

    return (
        <div>
            <div className="option" id={option.code} onClick={(e)=> selectAirport(e)} >
                <input type="radio" className="radio"  />
                <label >{airportName}</label>
              </div>
        </div>
    )
}
export default Option
