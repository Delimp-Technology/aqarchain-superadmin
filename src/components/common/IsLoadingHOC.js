import React, {useState} from 'react';
import Loading from './Loading';

const IsLoadingHOC = (WrappedComponent, LoadingMessage) => {
  const HOC = props => {
    const [loading, setLoading] = useState(true);

    const setLoadingState = isLoading => {
      setLoading(isLoading);
    };
    return (
      <>
        {loading && <Loading />}
        <WrappedComponent {...props} setLoading={setLoadingState} />
      </>
    );
  };
  return HOC;
};

export default IsLoadingHOC;
