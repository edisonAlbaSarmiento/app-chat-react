import styled from 'styled-components';
import { prop } from 'styled-tools';

const DivisionLine = styled.div`
  width: ${prop('width', '100%')};
  margin: ${prop('margin', '1rem 0')};
  border-bottom: 0.7px solid ${prop('color', prop('theme.color.gray'))};
`;

export default DivisionLine;
