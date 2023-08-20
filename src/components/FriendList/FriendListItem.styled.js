import styled, { keyframes } from 'styled-components';

export const FriendsListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FriendAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const getStatusColor = props => {
  if (props.is_online) {
    return '#0fcc45';
  } else {
    return '#ff323c';
  }
};

export const StatusIndicator = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 10px;

  background-color: ${getStatusColor};
  border-radius: 50%;

  position: relative;
`;

const blinkAnimation = keyframes`
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

export const StatusBlink = styled.span`
  display: block;
  width: 15px;
  height: 15px;

  background-color: ${getStatusColor};
  opacity: 0.7;
  border-radius: 50%;

  animation: ${blinkAnimation} 1s linear infinite;
`;
