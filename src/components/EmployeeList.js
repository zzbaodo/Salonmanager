import React, { useState } from "react"
import Employees from "./Employees"
const EmployeeList = () => {
  return (
    <>
      <h2>Employees</h2>
      <Employees name="John" />
      <Employees name="Suzan" />
      <Employees name="Hen" />
      <Employees name="Tommy" />
      <Employees name="Bao" />
    </>
  )
}

export default EmployeeList
