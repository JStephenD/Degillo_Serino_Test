"use client";

import React, { useState } from "react";

type Props = {
  children: React.ReactNode
  headerText: string
}

export const Question1: React.FC<Props> = props => {
  const { children, headerText } = props

  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    setClicks(clicks + 1)
  }

  return <>
    <div className="mx-auto w-full text-center" onClick={handleClick}>
      <h2>My Component ({clicks} clicks)</h2>
      <h3 className="py-4">{headerText}</h3>
      <p>Problems:</p>
      <ul className="list-decimal list-inside">
        <li>the use of `refs` in this component is deprecated on latest version of react</li>
        <li>* after converting into functional component, there wasn't much problems</li>
      </ul>
      {children}
    </div>
  </>
}

export default Question1
