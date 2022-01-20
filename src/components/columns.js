// step 2 used to define columns and map each data item to a specific column under each row
export const COLUMNS = [{
        Header: 'Posted At',
        accessor: 'posted_at'
    },
    {
        Header: 'Description',
        accessor: 'description'
    },
    {
        Header: 'Category',
        accessor: 'category',
        filter: "fuzzyText"
    },
    {
        Header: 'Amount',
        accessor: 'amount'
    },

]