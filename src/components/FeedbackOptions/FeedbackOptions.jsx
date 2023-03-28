import { Component } from "react";
import { FeedbackButton, FeedbackOption, FeedbackOptionsContainer } from "./FeedbackOptionStyled";


export default class FeedbackOptions extends Component {

    render() {
        const { options, onLeaveFeedback } = this.props;

        return <FeedbackOptionsContainer>{options.map(option => { return <FeedbackOption key={option}><FeedbackButton onClick={onLeaveFeedback} option={option}>{option}</FeedbackButton></FeedbackOption> })}</FeedbackOptionsContainer>;
    }
}