import React from "react";
import Avatar from "./Avatar";

const UserAvatar = ({ withJobTitle }) => {
  return (
    <div style={{ display: "flex",padding:'.5rem' }}>
		<Avatar size={"48px"} />
      	<div style={{ display:"flex", flexDirection:'column',padding:'0 .5rem' }}>   
        <p style={{ fontWeight: "700", fontSize: "24px", color:"black"}}>
          Alexa Siri
        </p>
		{withJobTitle && <span style={{fontSize:'12px'}}>Frontend Developer at Spacex</span>}
      </div>
      
    </div>
  );
};

export default UserAvatar;
