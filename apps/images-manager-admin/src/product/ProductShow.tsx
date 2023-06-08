import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Height" source="height" />
        <TextField label="ID" source="id" />
        <TextField label="URL" source="imgURL" />
        <TextField label="Size" source="itemSize" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Width" source="width" />
      </SimpleShowLayout>
    </Show>
  );
};
