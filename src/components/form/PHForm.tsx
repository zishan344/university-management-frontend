import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
type TFormConfig = {
  defaultValues?: Record<string, any>;
};
type TFormProps = {
  onSubmit: SubmitHandler<any>;
  children: ReactNode;
} & TFormConfig;
const PHForm = ({ onSubmit, children, defaultValues }: TFormProps) => {
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  const method = useForm(formConfig);
  return (
    <div style={{ marginBottom: "20px" }}>
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    </div>
  );
};

export default PHForm;
