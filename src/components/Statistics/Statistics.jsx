import propTypes from 'prop-types';

export const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul>
        {stats.map(statsData => {
          return (
            <li key={statsData.id}>
              <span className="label">{statsData.label}</span>
              <span className="percentage">{statsData.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
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
