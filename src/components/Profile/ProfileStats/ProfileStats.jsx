import PropTypes from 'prop-types';
import { StatsItemValue, StatsItemLabel, StatsItem, StatsList } from './ProfileStats.styled'

export const ProfileStats = ({stats: {followers, views, likes}}) => {
    return (
        <StatsList>
            <StatsItem>
                <StatsItemLabel>Followers</StatsItemLabel>
                <StatsItemValue>{followers}</StatsItemValue>
            </StatsItem>
            <StatsItem>
                 <StatsItemLabel>Views</StatsItemLabel>
                <StatsItemValue>{views}</StatsItemValue>
            </StatsItem>
            <StatsItem>
                <StatsItemLabel>Likes</StatsItemLabel>
                <StatsItemValue>{likes}</StatsItemValue>
            </StatsItem>
        </StatsList>
    );
};

ProfileStats.propTypes = {
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};