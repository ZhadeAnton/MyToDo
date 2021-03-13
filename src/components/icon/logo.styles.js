import styled from 'styled-components'
import {CheckDouble} from '@styled-icons/boxicons-regular/CheckDouble'

export const HeaderLogo = styled(CheckDouble)`
  display: flex;
  color: ${(props) => (props.blue ? 'blue' : 'white')};
`

export const LogoWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  display: inline-block;
`
