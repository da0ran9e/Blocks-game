import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <NumberInput step={1} label="Height" source="height" />
        <TextInput label="URL" source="imgURL" />
        <NumberInput label="Size" source="itemSize" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Width" source="width" />
      </SimpleForm>
    </Create>
  );
};
