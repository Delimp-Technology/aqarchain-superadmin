import {useSelector} from 'react-redux';
const FullName = () => {
  const result = useSelector(state => state.auth.data);

  const capFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return `${capFirstLetter(result.first_name)} ${capFirstLetter(
    result.last_name,
  )}`;
};
export default FullName;
