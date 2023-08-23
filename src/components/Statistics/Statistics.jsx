import PropTypes from 'prop-types';
import {StatisticContainerStyle } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, count}) => {
    return (
        <StatisticContainerStyle>
            <li className="statistic-text">Good: {good}</li>
            <li className="statistic-text">Neutral: {neutral}</li>
            <li className="statistic-text">Bad: {bad}</li>
            <li className="statistic-text">Total: {total}</li>
            <li className="statistic-text">Positive feedback: {count.toFixed(0)}%</li>
        </StatisticContainerStyle>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
};