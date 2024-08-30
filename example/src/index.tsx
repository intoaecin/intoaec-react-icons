import React from 'react'
import ReactDOM from 'react-dom/client'
import { FormIcon } from '../../src/index'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div style={{ border: '1px solid', height: 500, width: 500 }}>
      <FormIcon />
    </div>
  </React.StrictMode>,
)
