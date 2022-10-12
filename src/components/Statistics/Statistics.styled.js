import styled from "styled-components";

export const StatisticsWrapper = styled.div`
margin: 0 auto 30px;
width: 400px;

background-color: ${p => p.theme.colors.white};
border-radius: ${p => p.theme.radii.normal};
box-shadow: 2px 2px 5px ${p => p.theme.colors.secondary};
`;

export const Title = styled.h2`
color: ${p => p.theme.colors.secondary};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.m};
text-transform: uppercase;
text-align: center;
padding: 20px 0;
`;

export const StatsList = styled.ul`
display: flex;
`;

export const StatsItem = styled.li`
padding: 10px 0;
width: 100%;

color: ${p => p.theme.colors.white};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.m};
text-align: center;

:first-child {
  background-color: #${Math.floor(Math.random() * 16777215).toString(16)};
  border-radius: 0 0 0 ${p => p.theme.radii.normal};
};

:nth-child(2) {
  background-color: #${Math.floor(Math.random() * 16777215).toString(16)};
}

:nth-child(3) {
  background-color: #${Math.floor(Math.random() * 16777215).toString(16)};
}
:nth-child(4) {
  background-color: #${Math.floor(Math.random() * 16777215).toString(16)};
}
:last-child {
  background-color: #${Math.floor(Math.random() * 16777215).toString(16)};
  border-radius: 0 0 ${p => p.theme.radii.normal} 0;
}
`;

export const Item = styled.span`
display: block;
margin-bottom: 5px;
`;

