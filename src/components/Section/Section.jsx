import { Component } from "react";

export default class Section extends Component {

    render() {
        const { title, children } = this.props;

        return <div style={{
            padding: "20px"
        }}>< h2 >{title}</h2>{children}</div>;
    }
}