import * as React from 'react'
import { render } from '@testing-library/react'
import FormIcon from '../src/assets/FormIcon'
import 'jest-canvas-mock'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<FormIcon />)
  })
})
