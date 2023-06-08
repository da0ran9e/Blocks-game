import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  height?: IntNullableFilter;
  id?: StringFilter;
  imgURL?: StringFilter;
  itemSize?: FloatNullableFilter;
  name?: StringNullableFilter;
  width?: IntNullableFilter;
};
