import styled from 'styled-components';

export const FriendListWrapper = styled.ul`
  width: 240px;
  height: 100%;

  letter-spacing: 3px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  padding: 30px 30px;
  border-radius: 15px;
  background-color: white;
  filter: drop-shadow(0px 10px 20px violet);
`;

export const FriendsListItem = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;
