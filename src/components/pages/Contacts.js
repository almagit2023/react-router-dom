import React from 'react'
import './Page.css'

export default function Contacts() {
  return (

    <div className='componentStyle'>
    <h1>Contacts</h1>
      <div className='formStyle' >
        <form action="">
          <div>
            <label htmlFor="">First Name</label>
            <input type="text" name="fname" id="fname" />
          </div>

          <div>
            <label htmlFor="">Last Name</label>
            <input type="text" name="lname" id="lname" />
          </div>

          <div>
            <label htmlFor="">Email Addr</label>
            <input type="email" name="email" id="email" />
          </div>

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  )
}
