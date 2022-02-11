import React from 'react'
import './Setting.css'
import { useSelector } from "react-redux";

export default function Setting() {
    const username = useSelector((state) => state.userStore.name);
  return (
      <div>Setting {username}</div>
  )
}
