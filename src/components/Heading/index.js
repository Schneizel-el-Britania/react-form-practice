import React from 'react';

export default function Heading(props) {
  const createHeader = (name) => React.createElement(
    name,
    {
      key:name,
      className: props[name].className,
      title: props[name].text,
    },
    props[name].text
  );

  return (
    <div>
      {Object.keys(props).map(createHeader)}
    </div>
  )
}
