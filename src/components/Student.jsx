import React from "react"

const Student = ({ data }) => {
  return (
    <div>
      <div>{data?.enrollment}</div>
      <div>{data?.facultyName}</div>
      <div>{data?.facultyNumber}</div>
      <div>{data?.reason}</div>
      <div>{data?.studentName}</div>
      <div>{data?.studentsNumber}</div>
    </div>
  )
}

export default Student
