import React from 'react'
import CompB from './CompB'

const CompA = () => {
  let ename = "vasanth"
  let eage = 22
  let ejob = "web - developer"
  let eloc = ['bangalore', 'chennai']
  return (
    <div>
      <h1>compA</h1>
      <CompB employee={ename} age={eage} job={ejob} location={eloc} />
    </div>
  )
}

export default CompA