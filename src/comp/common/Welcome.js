import React from 'react'
import Loader from '../Loading/Loader'
import Header from './Header/Header'

export default function Welcome(props) {
  return (
  <>
  {/* <Loader/> */}
    <Header/>
    {props.children}
  </>
  )
}
