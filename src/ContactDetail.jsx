import React from 'react'
import user from "./Component/user.jpg"
import "../src/ContactDetail.css"

const ContactDetail = (props) => {

  return (
    <div className='item pare' style={{display:"flex",justifyContent:"space-between"}}>
      <div style={{display:"flex",justifyContent:"space-between"}} >
        <img className="ui avatar image ch1" src={user} alt="userS" />
        <div className="content ch2" style={{display:"flex",flexDirection:"column"}}>
        <h4>  <div className="header">{props.name}</div></h4>
          
          <div>{props.email}</div>
        </div>
      </div>
      <i className="trash alternate outline icon ch3"
        onClick={() => props.removeContact(props.id)}
        style={{ color: "red", margintop: "7px" }}></i>
    </div>
  )
}

export default ContactDetail
