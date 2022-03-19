import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import App from '../App'
import TransactionHistory from '../screens/TransactionHistory'

function Router() {
  return (
    <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/transactionHistory' element={<TransactionHistory/>} />
    </Routes>
  )
}

export default Router