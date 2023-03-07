import React from 'react'

const Footer = ({date}) => {
  return (
    <>
      <footer>
        <p>&copy; {date}</p>
        <p style={{marginTop:'10px'}}>All right reserved</p>
      </footer>
    </>
  )
}

export default Footer