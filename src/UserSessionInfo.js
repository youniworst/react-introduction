import React from "react";

export default class UserSessionInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startedAt: UserSessionInfo.getDate(),
            time: 0,
        }
    }
    static getDate() {
        const date = new Date();
        return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({time: this.state.time + 1})
        },1000)
    }
    render() {
        return (
            <div className="session">
                <span>Session started at: {this.state.startedAt}</span> 
                <span>Session time in second: : {this.state.time}</span> 
            </div>
        )
    }
}