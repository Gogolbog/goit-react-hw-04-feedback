import {
  FeedbackButton,
  FeedbackOption,
  FeedbackOptionsContainer,
} from './FeedbackOptionStyled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsContainer>
      {options.map(option => {
        return (
          <FeedbackOption key={option}>
            <FeedbackButton onClick={onLeaveFeedback} option={option}>
              {option}
            </FeedbackButton>
          </FeedbackOption>
        );
      })}
    </FeedbackOptionsContainer>
  );
};
