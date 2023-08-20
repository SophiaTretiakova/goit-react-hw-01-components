import { FriendListItem } from './FriendListItem';
import propTypes from 'prop-types';
import { FriendListWrapper } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrapper>
      {friends.map(friendListItem => {
        return (
          <FriendListItem
            key={friendListItem.id}
            friend={friendListItem}
          ></FriendListItem>
        );
      })}
    </FriendListWrapper>
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
