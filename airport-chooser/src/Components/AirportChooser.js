import React, {useState, useCallback} from 'react'
import Dropdown from './Dropdown'
const AirportChooser = () => {
    const [isSending, setIsSending] = useState(false)
    const [show, setShow] = useState(false)
    const showAirport = useCallback(async () => {
        if (isSending) return
        setIsSending(true)
        setShow(true)
      }, [isSending]) ;

      

    return (
        <div>
            <div className ="button">
            <button className="btn add-task-btn" name="Airport Chooser" disabled={isSending} onClick={showAirport}>Airport Chooser</button>
            </div>
            {show ?  
                <Dropdown  />
            : null}
        </div>
    )
}

export default AirportChooser
