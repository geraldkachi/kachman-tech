import React from 'react'
interface IProps {
    color: string
}
const ColoredLine = ({color}: IProps) => {
  return (
    <div className={`${color} w-[160px] h-[2px]`}></div>
  )
}

export default ColoredLine
