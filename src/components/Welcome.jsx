import React from 'react'

function Welcome(props) {
 console.log(props);

  return (
    <div>
    <h1>Hello,{props.user} from welcome component</h1>  
    </div>
  )
}

export default Welcome
