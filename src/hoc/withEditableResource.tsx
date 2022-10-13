import { ComponentType, useCallback, useState } from "react";

function withHandleResource<T>(Component: ComponentType<T>, resource: object) {
  return (hocProps: T) => {
    const [originalResource, setOriginalResource] = useState(resource);
    const [data, setData] = useState(resource);

    const onChange = useCallback((changes: object) => {
      setData({ ...data, ...changes });
    }, []);

    const onReset = () => {
      setData(originalResource);
    };

    return <Component {...hocProps} onChange={onChange} onReset={onReset} />;
  };
}

export default withHandleResource;
