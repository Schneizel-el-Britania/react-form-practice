import React from 'react';

export default function Heading(props) {
  const createHeader = (name) => React.createElement(
    name,
    { className: props[name].className },
    props[name].text
  );

  return (
    <div>
      {Object.keys(props).map(createHeader)}
    </div>
  )
}
