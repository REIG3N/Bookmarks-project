import React from 'react';

export default function BookSelection({ list }) {
  return (
    <div>
      {list.map((element, index) => (
        <button key={index}>{element}</button>
      ))}
    </div>
  );
}


