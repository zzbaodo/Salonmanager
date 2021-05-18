import React, { useState } from "react"
import Services from "./Services"
const EmployeeList = ({ name }) => {
  const [show, setShow] = useState(false)
  const onClick = () => {
    setShow(!show)
  }

  return (
    <>
      <ul>
        <li onClick={onClick}>{name}</li>
      </ul>
      {show && <Services />}
    </>
  )
}

export default EmployeeList
