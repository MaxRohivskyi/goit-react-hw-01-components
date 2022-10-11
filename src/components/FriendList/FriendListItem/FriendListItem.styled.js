import styled from "styled-components";

export const FriendItemWrapper = styled.li`
display: flex;
align-items: center;
margin-bottom: 15px;
padding: 5px;

background-color: #ffffff;
border: 1px solid #10263b;
box-shadow: 2px 2px 5px #10263b;
border-radius: 5px;

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

font-size: 16px;
font-weight: 700;
`;