import React from 'react'

const ChildComp2 = ({price}) => {
    console.log("ChildComp2 rendered")
  return (
    <div className='child2'>
      <h3>Price : {price}</h3>
    </div>
  )
}

export default React.memo(ChildComp2)
