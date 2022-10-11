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

background-color: #f3f6f9;
border: 1px solid #e4e9f0;
`;

export const StatsItemLabel = styled.span`
display: block;
margin-bottom: 10px;

color: #768696;
font-size: 12px;
`;

export const StatsItemValue = styled.span`
font-weight: 700;
`;