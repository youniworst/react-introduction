export default function UserInfo(props){
    return (
        <div className="info">
            <span>name: {props.name}</span>
            <span>email: {props.email}</span>
            <span>city: {props.city}</span>
            <span>dob: {props.dob}</span>
        </div>
    )
}