import React, { useState } from 'react';

const withLoader = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    return (
      <div>{loading ? <p>Loading...</p> : <WrappedComponent {...props} />}</div>
    );
  };
};

export default withLoader;
