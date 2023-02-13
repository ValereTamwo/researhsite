import React from 'react'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import dataJ from '../data/data.json'
function Home() {

    const [data,setData] = useState([])

    const fetch_data = () => {
        fetch('../data/data.json')
            .then((res) => JSON.parse(res))
            .then((data) => {
            setData(data)
        })
    }
    
    useEffect(() => {
        // fetch_data()
        setData(dataJ)
        console.log(dataJ)
    },[])

  return (
    <>
      <Header/>
    </>
  )
}

export default Home