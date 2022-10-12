import styled from "styled-components";

export const TransactionHistoryWrapper = styled.table`
width: 800px;
margin: 0 auto;

text-align: center;

background-color: ${p => p.theme.colors.white};
border-radius: ${p => p.theme.radii.normal};
box-shadow: 2px 2px 5px ${p => p.theme.colors.secondary};
border-collapse: separate;
border-spacing: 0;
overflow: hidden;
`;

export const TransactionHistoryThead = styled.thead`
background-color: ${p => p.theme.colors.primary};
color: ${p => p.theme.colors.white};
`;

export const TransactionHistoryBox = styled.th`
padding-top: 10px;
padding-bottom: 10px;

border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};;

:last-child {
  border-right: 0;
}
`;

export const TransactionHistoryRow = styled.tr`
:nth-child(2n) {
  color: ${p => p.theme.colors.text};
  
  background-color: ${p => p.theme.colors.background};
}
`;