import {useSelector} from 'react-redux';
import {capFirstLetter} from '../../utils/utils';
const FullName = () => {
  const result = useSelector(state => state.auth.data);

  return `${capFirstLetter(result.first_name)} ${capFirstLetter(
    result.last_name,
  )}`;
};
export default FullName;
