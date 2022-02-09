import React from 'react'
import './MoneyTab.scss'

function MoneyTab(props) {
  return (
    <div className='tab'>
        <span className='serial-num'>{props.index}</span>
        <p className='money-value'>{props.value}</p>
    </div>
  )
}

export default MoneyTab