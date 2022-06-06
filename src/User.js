import { render } from "@testing-library/react";
import React from "react";
import UserAvatar from "./UserAvatar";
import UserInfo from "./UserInfo";
import UserSessionInfo from "./UserSessionInfo";

export default function User(props) {
   return(
       <>
       <UserAvatar avatar={props.user.avatar}/>
       <UserInfo name={props.user.name} email={props.user.email} city={props.user.city} dob={props.user.dob}/>
       <UserSessionInfo/>
       </>
   )
}
