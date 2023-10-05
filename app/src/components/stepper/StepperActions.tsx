import { useTheme } from '@emotion/react';
import { View } from 'react-native';
import { Button } from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/native';

const Row = styled.View(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.tokens.spacer,
}));

interface StepperActionsProps {
  canGoBack: boolean;
  canGoNext: boolean;
  onBack: () => void;
  onNext: () => void;
  onDone?: () => void;
}

export const StepperActions: React.FC<StepperActionsProps> = ({
  canGoBack,
  canGoNext,
  onBack,
  onNext,
  onDone,
}) => {
  const theme = useTheme();
  return (
    <Row>
      {canGoBack && (
        <Button
          secondary
          onPress={() => {
            onBack();
          }}
          style={{ flex: 1 }}
          icon={
            <FontAwesomeIcon
              icon={faArrowLeft}
              color={theme.tokens.buttonSecondaryText}
            />
          }>
          Back
        </Button>
      )}

      {canGoNext && (
        <Button
          onPress={() => {
            onNext();
          }}
          style={{ flex: 1 }}
          icon={
            <FontAwesomeIcon
              icon={faArrowRight}
              color={theme.tokens.buttonPrimaryText}
            />
          }>
          Next
        </Button>
      )}

      {!canGoNext && (
        <Button
          onPress={() => {
            if (onDone) {
              onDone();
            }
          }}
          style={{ flex: 1 }}
          icon={
            <FontAwesomeIcon
              icon={faCheck}
              color={theme.tokens.buttonPrimaryText}
            />
          }>
          Done
        </Button>
      )}
    </Row>
  );
};

export default StepperActions;
