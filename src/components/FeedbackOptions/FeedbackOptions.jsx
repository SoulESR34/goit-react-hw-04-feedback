import React from 'react';
import PropTypes from 'prop-types';
import { ButtonsContainer, Button } from './FeedbackOptions.style';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsContainer>
      {options.map(opt => {
        return (
          <Button key={opt} name={opt} type="button" onClick={onLeaveFeedback}>
            {opt}
          </Button>
        );
      })}
    </ButtonsContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
