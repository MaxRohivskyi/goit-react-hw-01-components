import PropTypes from 'prop-types';
import { FriendItemName, FriendItemImg, FriendItemStatus, FriendItemWrapper } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItemWrapper>
      <FriendItemStatus isOnline={isOnline}></FriendItemStatus>
      <FriendItemImg src={avatar} alt={name} />
      <FriendItemName>{name}</FriendItemName>
    </FriendItemWrapper>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};


