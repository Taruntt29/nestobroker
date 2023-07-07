import { Image } from 'react-bootstrap';

const Avatar = ({ avatarSrc, size }) => {
  return <Image width={size} height={size} src={avatarSrc} roundedCircle />;
};
export default Avatar;
