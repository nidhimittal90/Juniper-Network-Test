import React, { useState, useEffect, Suspense, useContext } from "react";
import {AirportListContext}  from '../Context/AirportListContext' 
import Loader from './Loader'
import useInfiniteScroll from "../Hooks/useInfiniteScroll";
const Option = React.lazy(() => import("./Option"));

export default function Dropdown() {
const {open, value, showAirportList} = useContext(AirportListContext)
const [airports, setAirports] = useState()
const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems,'dropdown')
const [items, setItems] = useState(10)

    useEffect(() => {
      fetchJsonFile()
    }, [])

    async function fetchJsonFile() {
        await fetch('Airport.json')
        .then(res =>  res.json())
        .then(json => {
            setAirports(json)
            })
        
      }

      function fetchMoreListItems() {
        setTimeout(() => {
          setItems(items+10)
          setIsFetching(false);
        }, 2000);
      }

return (
      <div className="select-box ">

        <div id="dropdown" className={open ? "options-container active":"options-container"}>
        <Suspense fallback={<Loader />}>
        {airports != null && airports.length >0 ? airports.slice(0,items).map((n) =>  <Option option = {n} key = {n.code} />
            ): null }
          </Suspense>
          {isFetching && 'Fetching more airports...'}
        </div> 
       

        <div className="selected" onClick = {()=> showAirportList(!open)}>
          {value}
        </div>
      </div>

);
}