import styled from "styled-components";

export const FriendItemWrapper = styled.li`
display: flex;
align-items: center;
margin-bottom: 15px;
padding: 5px;

background-color: ${p => p.theme.colors.white};
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
box-shadow: 2px 2px 5px ${p => p.theme.colors.secondary};
border-radius: ${p => p.theme.radii.normal};

:last-child {
  margin-bottom: 0;
}
`;

export const FriendItemStatus = styled.span`
margin: 0px 20px;
width: 15px;
height: 15px;

background-color: ${(p) => {
  return p.isOnline ? p.theme.colors.online : p.theme.colors.offline;
}};
border-radius: 50%;
`;

export const FriendItemImg = styled.img`
width: 48px;
`;

export const FriendItemName = styled.p`
margin-left: 5px;

color: ${p => p.theme.colors.secondary};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.m};
`;