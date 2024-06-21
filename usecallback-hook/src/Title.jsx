import React from 'react'

const Title = () => {
    console.log("Title rendered")
  return (
    <div>
      <h1>React.memo and useCallback hook</h1>
    </div>
  )
}

export default React.memo(Title)
