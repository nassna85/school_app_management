import { ComponentType, useCallback, useState } from "react";

function withHandleResource<T>(Component: ComponentType<T>) {
  return (props: Omit<T, "onChange" | "onReset" | "data" | "setData">) => {
    const [originalResource, setOriginalResource] = useState({});
    const [data, setData] = useState<object>({});

    const onChange = useCallback((changes: object) => {
      setData({ ...data, ...changes });
    }, []);

    const onReset = () => {
      console.log("reset");
      setData(originalResource);
    };

    return (
      <Component
        {...(props as T)}
        onChange={onChange}
        onReset={onReset}
        data={data}
        setData={setData}
      />
    );
  };
}

export default withHandleResource;
