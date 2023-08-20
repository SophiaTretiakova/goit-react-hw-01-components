import propTypes from 'prop-types';
import {
  ProfileWrapper,
  DescWrapper,
  UserAvatar,
  DescAddInfo,
  StatsWrapper,
  StatsListItem,
  StatsItemText,
} from './Profile.styled';

export const Profile = ({
  userData: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileWrapper>
      <DescWrapper>
        <UserAvatar src={avatar} alt="User avatar" className="avatar" />
        <p>
          <b>{username}</b>
        </p>
        <DescAddInfo>@{tag}</DescAddInfo>
        <DescAddInfo>{location}</DescAddInfo>
      </DescWrapper>

      <StatsWrapper>
        <StatsListItem>
          <StatsItemText>Followers:</StatsItemText>
          <StatsItemText> {stats.followers}</StatsItemText>
        </StatsListItem>
        <StatsListItem>
          <StatsItemText>Views:</StatsItemText>
          <StatsItemText> {stats.views}</StatsItemText>
        </StatsListItem>
        <StatsListItem>
          <StatsItemText>Likes:</StatsItemText>
          <StatsItemText> {stats.likes}</StatsItemText>
        </StatsListItem>
      </StatsWrapper>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  userData: propTypes.shape({
    username: propTypes.string,
    tag: propTypes.string,
    location: propTypes.string,
    avatar: propTypes.string,
    stats: propTypes.shape({
      followers: propTypes.number,
      views: propTypes.number,
      likes: propTypes.number,
    }),
  }).isRequired,
};
