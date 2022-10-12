import styled from "styled-components";

export const StatsList = styled.ul`
display: flex;
align-items: center;
width: 100%;
`;

export const StatsItem = styled.li`
padding: 15px 0;
width: 100px;

text-align: center;

background-color: ${p => p.theme.colors.accent};
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
`;

export const StatsItemLabel = styled.span`
display: block;
margin-bottom: 10px;

color: ${p => p.theme.colors.primary};
font-size: ${p => p.theme.fontSizes.xs};
`;

export const StatsItemValue = styled.span`
color: ${p => p.theme.colors.secondary};
font-weight: ${p => p.theme.fontWeights.bold};
`;