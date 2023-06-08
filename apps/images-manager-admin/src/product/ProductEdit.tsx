import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <NumberInput step={1} label="Height" source="height" />
        <TextInput label="URL" source="imgURL" />
        <NumberInput label="Size" source="itemSize" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Width" source="width" />
      </SimpleForm>
    </Edit>
  );
};
