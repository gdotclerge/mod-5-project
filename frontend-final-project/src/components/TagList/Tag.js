import React from 'react'



const tag = (props) => {

  return (
    <div>
      <button onClick={ (e) => props.handleTagRemoval(props.tag) } >X</button>
      {props.tag.name}
    </div>
  )

}


export default tag
