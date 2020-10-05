import React from 'react';
import { Link } from "react-router-dom";

export default function PostsLi(props) {
    return (
        <li >
            <span style={{paddingRight: '32px'}}>{props.data.timeString}</span> 
            <Link to={`/?/post/${props.data.id}`}>{props.data.title}</Link>
        </li>
    )
}