import { render } from "@testing-library/react";

export default function UserAvatar(props) {
    return (
        <div className="avatar">
            <img src={props.avatar}></img>
        </div>
    )
}