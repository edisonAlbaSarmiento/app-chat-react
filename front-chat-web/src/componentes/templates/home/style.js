import styled from 'styled-components';
import { Layout } from 'antd';
import { prop } from 'styled-tools';

const { Header, Footer, Content } = Layout;

export const ContentTempleate = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainLayout = styled(Layout)``;

export const HeaderLayout = styled(Header)`
  background-color: ${prop('theme.color.white')};
  display: flex;
  justify-content: flex-end;
`;
export const ContentLayout = styled(Content)`
  background-color: yellow;
`;

export const FooterLayout = styled(Footer)`
  background-color: green;
`;
