import {
  Progress as ProgressX,
  ProgressProps as ProgressPropsX,
  ConfigProvider,
} from "antd";

type ProgressProps = ProgressPropsX & {};
// type token = {

// }

// type Progress = {};

export const Progress = (props: ProgressProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Progress: {},
        },
        token: {},
      }}
    >
      <ProgressX {...props} />
    </ConfigProvider>
  );
};

export default Progress;
