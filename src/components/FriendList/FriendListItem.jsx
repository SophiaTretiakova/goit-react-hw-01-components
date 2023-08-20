import {
  FriendsListItem,
  FriendAvatar,
  StatusIndicator,
  StatusBlink,
} from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <FriendsListItem>
      <StatusIndicator is_online={isOnline ? 1 : 0}>
        <StatusBlink is_online={isOnline ? 1 : 0}></StatusBlink>
      </StatusIndicator>
      <FriendAvatar
        className="avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </FriendsListItem>
  );
};
