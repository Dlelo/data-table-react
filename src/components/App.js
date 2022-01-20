import React, { Component } from 'react'
import BankContainer from './BankContainer'

class App extends Component {
  render () {
    return (
      <div className='ui raised segment'>
        <div className='ui center aligned segment violet inverted'>
          <h2>PBP Expense Calculator</h2>
        </div>

        <BankContainer />
      </div>
    )
  }
}

export default App
