import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 50px auto;
  padding: 12px;
  background: #ca7de3;
`;
export const StatisticsTitle = styled.h2`
  font-size: 24px;
  margin: 0;
  margin-bottom: 18px;
  color: #000000;
`;
export const StatList = styled.ul`
  display: flex;
`;
export const StatItem = styled.li`
  display: grid;
  justify-items: center;
  padding: 6px;
`;
export const ItemLabel = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: white;
`;
export const ItemPercentage = styled.span`
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
`;
