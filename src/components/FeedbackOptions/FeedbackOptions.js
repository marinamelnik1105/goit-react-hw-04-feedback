import PropTypes from 'prop-types';
import { Btn } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <Btn type="button" onClick={onLeaveFeedback}>
        good
      </Btn>
      <Btn type="Btn" onClick={onLeaveFeedback}>
        neutral
      </Btn>
      <Btn type="Btn" onClick={onLeaveFeedback}>
        bad
      </Btn>
    </div>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
