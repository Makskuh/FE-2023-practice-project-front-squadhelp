import React from 'react'

function LiElementsItem({array}) {
  return (
    array.map((values,index) => {
      <li href={array.link} key={values.index}>{values.text}</li>
    })
  )
}

export default LiElementsItem;