import React from 'react'
import { useParams } from 'react-router-dom'

const CountryDetails = () => {
    const params = useParams()
    console.log(params)
  return (
    <h1>CountryDetails</h1>
  )
}

export default CountryDetails