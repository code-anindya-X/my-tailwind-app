import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import BmiCalculator from '../components/BmiCalculator'
import Weather from '../components/Weather/Weather'

const RoutesModule = () => {
  return (
    <>
        <Routes>
            {/* <Route path="/" element={<BmiCalculator />} /> */}
            <Route path="/" element={<Weather />} />
        </Routes>
    </>
  )
}

export default RoutesModule
