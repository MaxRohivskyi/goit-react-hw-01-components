import styled from "styled-components";

export const WrapperDescription = styled.div`
padding: 30px 0;
margin: auto;
width: 150px;

text-align: center;
`;

export const Avatar = styled.img`
height: 100%;
border-radius: ${p => p.theme.radii.round};
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
`;

export const UserName = styled.p`
margin: 10px 0px;

color: ${p => p.theme.colors.secondary};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.m};
`;

export const Text = styled.p`
color: ${p => p.theme.colors.secondary};
`;