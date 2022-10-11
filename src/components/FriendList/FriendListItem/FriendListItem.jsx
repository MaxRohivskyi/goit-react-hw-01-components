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


