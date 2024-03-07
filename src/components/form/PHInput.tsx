import { Input } from "antd";

import { Controller } from "react-hook-form";
type TInputProps = {
  label?: string;
  type: string;
  name: string;
};
const PHInput = ({ label, type, name }: TInputProps) => {
  return (
    <>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
      {/* <input type={type} id={name} {...register(name)} />; */}
    </>
  );
};

export default PHInput;
