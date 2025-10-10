import React from "react";

export default function ListItem({ item }) {
  return (
    <div>
      {item.name}
      <button>클릭</button>
    </div>
  );
}
