import propTypes from 'prop-types';
import { getRandomHexColor } from './getRandomColor';
import {
  ItemLabel,
  ItemPercentage,
  StatisticsTitle,
  StatisticsWrapper,
  StatItem,
  StatList,
} from './Statistics.styled';

export const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <StatisticsWrapper>
      <StatisticsTitle>{title}</StatisticsTitle>
      <StatList>
        {stats.map(statsData => {
          return (
            <StatItem
              key={statsData.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <ItemLabel className="label">{statsData.label}</ItemLabel>
              <ItemPercentage className="percentage">
                {statsData.percentage}%
              </ItemPercentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      label: propTypes.string,
      percentage: propTypes.number,
    })
  ).isRequired,
};
