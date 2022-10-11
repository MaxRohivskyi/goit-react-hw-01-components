import PropTypes from 'prop-types';
import { TransactionHistoryRow, TransactionHistoryBox, TransactionHistoryThead, TransactionHistoryWrapper } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryWrapper>
      <TransactionHistoryThead>
        <TransactionHistoryRow>
          <TransactionHistoryBox>Type</TransactionHistoryBox>
          <TransactionHistoryBox>Amount</TransactionHistoryBox>
          <TransactionHistoryBox>Currency</TransactionHistoryBox>
        </TransactionHistoryRow>
      </TransactionHistoryThead>
      
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionHistoryRow key={id}>
            <TransactionHistoryBox>{type}</TransactionHistoryBox>
            <TransactionHistoryBox>{amount}</TransactionHistoryBox>
            <TransactionHistoryBox>{currency}</TransactionHistoryBox>
          </TransactionHistoryRow>
        ))}
      </tbody>
    </TransactionHistoryWrapper>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }
    )
  ),
};