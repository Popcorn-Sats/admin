import englishMessages from 'ra-language-english';

const customEnglishMessages = {
    ...englishMessages,
    dashboard: {
      net_position: 'Net Position',
      monthly_revenue: 'Monthly Revenue',
      monthly_expenditure: 'Monthly Expenditure',
      transaction_summary: 'Transaction Summary',
      new_transactions: 'New Transactions',
      all_transactions: 'See all transactions',
      transaction: {
          items:
              'by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items',
      },
    },
};

export default customEnglishMessages;