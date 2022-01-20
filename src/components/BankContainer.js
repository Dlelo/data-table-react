import React, {useMemo, useState} from 'react'
import {useTable, useGlobalFilter} from 'react-table'
import SAMPLE_DATA from './sample_data.json'
import {COLUMNS} from './columns'
import './../assets/table.css';
import Filter from './Filter'

const BankContainer = ()=> {

  const currentransactions={
    transactions: [{
       id: 1,
       posted_at: '2017-02-28 11:00:00',
       description: 'Leather Pants, Gap co.',
       category: 'Fashion',
       amount: -20000
   },
   {
       id: 2,
       posted_at: '2017-02-29 10:30:00',
       description: "Paycheck from Bob's Burgers",
       category: 'Income',
       amount: 100000
   },
   {
       id: 3,
       posted_at: '2017-05-24 10:53:00',
       description: "'Pair Programming Illuminated' by Laurie Williams and Robert Kessler",
       category: 'Entertainment',
       amount: -1498
   },
   {
       id: 4,
       posted_at: '2017-05-24 08:52:00',
       description: "Medium Iced Cold Brew, Gregory's Coffee",
       category: 'Food',
       amount: -365
   }
],
activeCategory: 'All'
}
 const [displayTransactions, updateTranscations]= useState(currentransactions)

        console.log(displayTransactions);

        // used memo hook ensures data is not recreated on every render - better perfromance.

        const columns=useMemo(()=> COLUMNS, [])
        const data =useMemo(()=> SAMPLE_DATA, [])


        // to use this initial defined data const data =useMemo(()=> displayTransactions.transactions, [])

        const transactionTable=useTable({
          columns,
          data,
        }, useGlobalFilter)

        const{
          getTableProps,
          getTableBodyProps,
          headerGroups,
          rows,
          prepareRow,
          state,
          setGlobalFilter,
        } = transactionTable

        const{globalFilter} = state





        return (
          <div className='ui grid container'> {
            <div className='table-container'>
             <Filter filter={globalFilter} setFilter={setGlobalFilter}/>
             <table {...getTableProps()}>
            <thead>
              {// Loop over the header rows
              headerGroups.map(headerGroup => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {// Loop over the headers in each row
                  headerGroup.headers.map(column => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {// Render the header
                      column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            {/* Apply the table body props */}
            <tbody {...getTableBodyProps()}>
            {// Loop over the table rows
            rows.map(row => {
            // Prepare the row for display
            prepareRow(row)
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {// Loop over the rows cells
                row.cells.map(cell => {
                  // Apply the cell props
                  return (
                    <td {...cell.getCellProps()}>
                      {// Render the cell contents
                      cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
            })}
            </tbody>
            </table>
            </div>



              } </div>

                    )
                }


export default BankContainer