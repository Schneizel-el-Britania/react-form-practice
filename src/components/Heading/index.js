import React from 'react'

export default function Heading(props) {
  const { h2, h3 } = props;
  return (
    <div>
      {h2 && <h2 className={h2.className}>{h2.text}</h2>}
      {h3 && <h3 className={h3.className}>{h3.text}</h3>}
    </div>
  )
}
