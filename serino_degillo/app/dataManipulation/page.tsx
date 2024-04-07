"use client";

import React, { useState } from "react";

import { errorData, groupByStatus, invalidData, validData } from '@/lib/dataManipulation.js'

type Props = {}

export const DataManipulation: React.FC<Props> = props => {
  const [output, setOutput] = useState('')

  const handleGroupByStatus = (type: 'valid' | 'invalid' | 'error') => {
    const dataSources = {
      valid: validData,
      invalid: invalidData,
      error: errorData
    }
    const data = dataSources[type]
    const result = groupByStatus(data)
    setOutput(JSON.stringify(result, null, 2))
  }

  return <>
    <div className="w-full mx-auto text-center">
      <p>Select from the 3 options</p>

      <div className="*:mx-2">
        <button onClick={() => handleGroupByStatus('valid')}>Valid Data</button>
        <button onClick={() => handleGroupByStatus('invalid')}>Invalid Data</button>
        <button onClick={() => handleGroupByStatus('error')}>Error Data</button>
      </div>

      <textarea className="mt-4 text-black" value={output} readOnly cols={80} rows={30} />
    </div>
  </>
}

export default DataManipulation
