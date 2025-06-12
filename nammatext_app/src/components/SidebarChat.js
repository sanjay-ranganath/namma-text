import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';
import { useStateValue } from './StateProvider';

const SidebarChat = ({ messages }) => {
    const [seed, setSeed] = useState("");
    const [{ user }, dispatch] = useStateValue();
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])
    return (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/ 
b${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>{user.displayName}</h2>
                <p>{messages[messages.length - 1]?.message}</p>
            </div>
        </div>
    )
}
export default SidebarChat