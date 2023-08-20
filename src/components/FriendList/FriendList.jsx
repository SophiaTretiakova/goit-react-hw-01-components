import { FriendListItem } from './FriendListItem';
import propTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friendListItem => {
        return (
          <FriendListItem
            key={friendListItem.id}
            friend={friendListItem}
          ></FriendListItem>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      isOnline: propTypes.bool,
      avatar: propTypes.string,
      name: propTypes.string,
    })
  ),
};
