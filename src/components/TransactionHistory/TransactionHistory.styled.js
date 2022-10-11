import styled from "styled-components";

export const TransactionHistoryWrapper = styled.table`
width: 800px;
margin: 0 auto;

text-align: center;

background-color: #ffffff; 
border-radius: 5px;
box-shadow: 2px 2px 5px #10263b;
border-collapse: separate;
border-spacing: 0;
overflow: hidden;
`;

export const TransactionHistoryThead = styled.thead`
background-color: #00bcd5;
color: white;
`;

export const TransactionHistoryBox = styled.th`
padding-top: 10px;
padding-bottom: 10px;
border-right: 1px solid #e4e4e4;

:last-child {
  border-right: 0;
}

/* :nth-child(2n) {
  background-color: #ecf1f4;
} */
`;

export const TransactionHistoryRow = styled.tr`
:nth-child(2n) {
  background-color: #ecf1f4;
}
`;