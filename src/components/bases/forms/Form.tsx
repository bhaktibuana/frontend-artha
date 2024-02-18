import React, { ReactNode } from "react";
import { ConfigProvider, Form } from "antd";
import { FormInstance } from "antd/es/form/Form";

import { FormWrapper, FormContent } from "@/components/bases/forms/FormStyle";

interface IBaseFormProps {
  children?: ReactNode;
  form?: FormInstance;
  id: string;
  layout?: "vertical" | "horizontal";
  formData: object;
  onFormFinish: (isError: boolean, values?: object) => void;
}

const BaseForm: React.FC<IBaseFormProps> = (props) => {
  const {
    children,
    form,
    id = "",
    layout = "vertical",
    formData = {},
    onFormFinish,
  } = props;

  const onFinish = (values: object): void => {
    onSubmit(false, values);
  };

  const onFinishFailed = (): void => {
    onSubmit(true);
  };

  const onSubmit = (isError: boolean, values?: object): void => {
    onFormFinish(isError, values);
  };
  return (
    <>
      <FormWrapper>
        <Form
          form={form}
          id={id}
          layout={layout}
          initialValues={formData}
          autoComplete="off"
          noValidate
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <ConfigProvider theme={{ token: {} }}>
            <FormContent>{children}</FormContent>
          </ConfigProvider>
        </Form>
      </FormWrapper>
    </>
  );
};

export default BaseForm;
