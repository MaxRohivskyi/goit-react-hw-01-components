import { ProfileDescription } from './ProfileDescription/ProfileDescription';
import { ProfileStats } from './ProfileStats/ProfileStats';
import { WrapperProfile } from './Profile.styled';

export const Profile = ({user}) => {
    return (
        <WrapperProfile>
            <ProfileDescription user={user} />
            <ProfileStats stats={user.stats} />
        </WrapperProfile>
    );
};