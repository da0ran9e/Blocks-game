import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  height?: SortOrder;
  id?: SortOrder;
  imgURL?: SortOrder;
  itemSize?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  width?: SortOrder;
};
