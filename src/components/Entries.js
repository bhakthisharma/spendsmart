import React from 'react'
import './Entries.css'

const Entries = () => {
  
  return (
    <div className='Transaction-entries'>
      <table>
        <thead>
          <tr>
            <td className='Description'>First name</td>
            <td className='Amount'>last name</td>
            <button className='button-remove'>Remove</button>
          </tr>
        </thead>
        <tbody id="tableBody"></tbody>
      </table>
    </div>
  )
}

export default Entries