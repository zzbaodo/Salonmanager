import React from "react"

const WorkDetails = ({ serviceList }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Service Name</th>
          <th>Amount</th>
          <th>Tip</th>
        </tr>
      </thead>
      <tbody>
        {serviceList.map((service) => (
          <tr key={service.id}>
            <td>{service.service}</td>
            <td>{service.price}</td>
            <td>{service.tip}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default WorkDetails
