import { Title } from './styles';
import PropTypes from 'prop-types';

const TitleComponet = (props) => {
  const { color, variant, fontSize, marginText } = props;
  return (
    <Title
      color={color}
      variant={variant}
      fontSize={fontSize}
      marginText={marginText}
    >
      {props.children}
    </Title>
  );
};

TitleComponet.defaultProps = {
  color: '#466623',
  marginText: '0px',
};

TitleComponet.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.oneOf(['title', 'subtitle']),
  fontSize: PropTypes.string,
  marginText: PropTypes.string,
};

export default TitleComponet;
