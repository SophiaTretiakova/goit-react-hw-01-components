import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 250px;
  height: 100%;

  letter-spacing: 3px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  padding: 30px 20px;
  border-radius: 15px;
  background-color: white;
  filter: drop-shadow(0px 10px 20px violet);
`;

export const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

export const DescAddInfo = styled.p`
  color: gray;
  font-size: small;
`;

export const StatsWrapper = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 0;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StatsItemText = styled.span`
  color: rgb(91, 91, 91);
`;
