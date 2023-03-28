import { Notification } from 'components/Notification/Notification';
import { Div, List, ListItem } from './StatisticsStyled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Div>
      {total() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <List>
          <ListItem>
            <span>Good:</span> {good}
          </ListItem>
          <ListItem>
            <span>Neutral:</span> {neutral}
          </ListItem>
          <ListItem>
            <span>Bad:</span> {bad}
          </ListItem>
          <ListItem>
            <span>Total:</span> {total()}
          </ListItem>
          <ListItem>
            <span>Positive feedback:</span> {positivePercentage()}%
          </ListItem>
        </List>
      )}
    </Div>
  );
};
