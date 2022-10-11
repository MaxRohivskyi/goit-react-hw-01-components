import PropTypes from 'prop-types';
import { Text, UserName, Avatar, WrapperDescription } from './ProfileDescription.styled';

export const ProfileDescription = ({user: { username, tag, location, avatar }}) => {
    return (
        <WrapperDescription>
            <Avatar
                src={avatar}
                alt={username}
            />
            <UserName>{username}</UserName>
            <Text>@{tag}</Text>
            <Text>{location}</Text>
        </WrapperDescription>
    );
};

ProfileDescription.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
    }),
};