import React from 'react'

const CompB = (props) => {
  return (
    <div>
      <pre>{JSON.stringify(props)}</pre>
      <pre>Age:{this.props.age}</pre>
    </div>
  )
}
export default CompB 