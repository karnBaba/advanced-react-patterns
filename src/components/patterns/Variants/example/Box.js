import React from 'react'
import styled from 'styled-components'

import { space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf } from 'styled-system'

const themed = key => props => props.theme[key]

const Box = styled('div')({
  boxSizing: 'border-box'
},
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  themed('Box')
)

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...alignSelf.propTypes,
}

export default Box;