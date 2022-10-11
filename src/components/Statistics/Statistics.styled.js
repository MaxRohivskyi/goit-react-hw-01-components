import styled from "styled-components";

export const StatisticsWrapper = styled.div`
margin: 0 auto 30px;
width: 400px;

background-color: #ffffff;
border-radius: 5px;
box-shadow: 2px 2px 5px #10263b;
`;

export const Title = styled.h2`
color: black;
font-size: 16px;
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

color: white;
text-align: center;

:first-child {
  background-color: #${Math.floor(Math.random() * 16777215).toString(16)};
  border-radius: 0 0 0 5px;
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
  border-radius: 0 0 5px 0;
}
`;

export const Item = styled.span`
display: block;
margin-bottom: 5px;
`;

