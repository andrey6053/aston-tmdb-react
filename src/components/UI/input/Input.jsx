import React from "react";
import "./input.scss"
export default function Input({ type, value, placeholder, setValue }) {
  return <input type={type} value={value} placeholder={placeholder} onChange={setValue} />;
}
