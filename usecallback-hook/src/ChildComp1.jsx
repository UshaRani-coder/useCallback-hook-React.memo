import React from 'react'

const ChildComp1 = ({count}) => {
   console.log("ChildComp1 rendered")
  return (
    <div className='child1'>
      <h3>Item Count: {count} </h3>
    </div>
  )
}

export default React.memo(ChildComp1)
