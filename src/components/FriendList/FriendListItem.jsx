export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className="item">
      <span className="status">
        <span className="blink"></span>
        {isOnline ? 'online' : 'offline'}
      </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
