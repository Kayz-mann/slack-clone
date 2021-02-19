import React from 'react'
import { useHistory } from 'react-router-dom'
import "./SidebarOption.css"
import db from './firebase';

function SidebarOption({ Icon, title, id, addChannelOption  }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`)
    } else {
      history.push(title);
    }

    };

    

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name")

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
        
      })
    }
  };


    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
            {/* render an Icon if an icon exist */}
            {Icon && <Icon  className="sidebarOption__icon"/>}
            {/* if an icon is passed render out title if no icon make it a channel */}
            {Icon ? ( 
              <h3>{title}</h3> 
            ) : (
              <h3>
                <span className="sidebarOption__hash">#</span>{title}
            </h3>
            )}
        </div>
    )
    
}

export default SidebarOption
