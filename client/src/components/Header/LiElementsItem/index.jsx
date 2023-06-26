import React from 'react';
function LiElementsItem({ obj,array}) {
  return array.map((item,index,arr) => {
    const {LINK} = obj
    return (
      <li key={item}>
        <a href={LINK}>{item}</a>
      </li>
    );
  });
}

export default LiElementsItem;
