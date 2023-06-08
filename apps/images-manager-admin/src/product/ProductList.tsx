import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Height" source="height" />
        <TextField label="ID" source="id" />
        <TextField label="URL" source="imgURL" />
        <TextField label="Size" source="itemSize" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Width" source="width" />
      </Datagrid>
    </List>
  );
};
