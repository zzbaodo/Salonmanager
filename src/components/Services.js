import React, { useState, useEffect } from "react"
import WorkDetails from './WorkDetails'
const Services = () => {
  //   const [moneyEarned, setMoneyEarned] = useState([])
  //   const [tipEarned, setTipEarned] = useState([])
  const [serviceList, setServiceList] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)
  const [showSummary, setShowSummary] = useState(false)
  const [tip, setTip] = useState(undefined)
  const [price, setPrice] = useState(undefined)
  const [service, setService] = useState("")
  const [showDetails, setShowDetails] = useState(false)
  const priceList = {
    null: 0,
    pedi: 35,
    mani: 25,
    fs: 40,
  }
  const [totalTipEarned, setTotalTipEarned] = useState(0)
  const addServiceHandler = (service, tip) => {
    const id = Math.random()
    const newService = {
      id,
      service,
      price,
      tip,
    }
    setServiceList([...serviceList, newService])
  }
  const getTotalMoneyEarned = () => {
    const tipList = serviceList.map((service) => service.tip)
    setTotalTipEarned(tipList.reduce((tot, tip) => tot + tip, 0))
    const moneyList = serviceList.map((service) => service.price)
    setTotalAmount(moneyList.reduce((tot, money) => tot + money, 0))
  }
  const showDetailsHandler = () => {
    setShowDetails(!showDetails)
  }
  const checkSummary = () => {
    setShowSummary(!showSummary)
    getTotalMoneyEarned()
  }
  const tipHandler = (e) => {
    setTip(parseInt(e.target.value))
  }
  const priceHandler = (e) => {
    setPrice(parseInt(e.target.value))
  }

  useEffect(() => {
    getTotalMoneyEarned()
  }, [serviceList])
  return (
    <div>
      <h2>Services</h2>
      <label htmlFor="services">Select a service</label>
      <select
        name="Select a service"
        id="services"
        value={service}
        onChange={(e) => setService(e.currentTarget.value)}
      >
        <option default value="null">
          Select...
        </option>
        <option value="pedi">Pedicure</option>
        <option value="mani">Manicure</option>
        <option value="fs">Fullset</option>
      </select>
      <br />
      <label htmlFor="tips">Tip Amount</label>
      <input type="number" value={tip} onChange={tipHandler} id="tip" />
      <label htmlFor="noTip">Cash or No Tip</label>
      <input type="checkbox" value="0" id="noTip" />

      <h2>Price</h2>
      <label htmlFor="price]">Price</label>
      <input type="number" value={price} onChange={priceHandler} id="price" />
      <br />
      <button onClick={() => addServiceHandler(service, tip, price)}>
        Add
      </button>
      <button onClick={checkSummary}>View Summary</button>
      {showSummary && (
        <div>
          <p>Total: ${totalAmount}</p>
          <p>Tip Total: ${totalTipEarned}</p>
          <button onClick={showDetailsHandler}>See Details and Edit</button>
          {showDetails && <WorkDetails serviceList={serviceList}/>}
        </div>
      )}
    </div>
  )
}

export default Services
