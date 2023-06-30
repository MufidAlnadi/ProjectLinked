"use client"
import useCountries from '@/app/hooks/useCountries'
import React from 'react'
import Heading from '../Heading'
interface JobHeadProps{
    title:string
    locationValue:string
    id:number
}

const JobHead:React.FC<JobHeadProps> = ({
    title, locationValue, id
})=> {
    const {getByValue} = useCountries()
    const location = getByValue(locationValue)

  return (
    <>
    <Heading
    title={title}
    subtitle={`${location?.capital}, ${location?.label} (${location?.region})`}/>
    <div></div>
    </>
  )
}

export default JobHead