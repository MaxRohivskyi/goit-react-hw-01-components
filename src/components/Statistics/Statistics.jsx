import PropTypes from 'prop-types';
import { Item, StatsItem, StatsList, Title, StatisticsWrapper } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper>
      {title && <Title>Upload stats</Title>}
        <StatsList>
          {stats.map(({ id, label, percentage }) => {
            return (
              <StatsItem key={id}>
                <Item>{label}</Item>
                <Item>{percentage}%</Item>
              </StatsItem>
            );
          })}
      </StatsList>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};