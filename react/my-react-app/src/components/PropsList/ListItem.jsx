import React from "react";

export default function ListItem({ item, onClick }) {
  return (
    <div>
      {item.name}
      <button onClick={onClick}>클릭</button>
    </div>
  );
}
