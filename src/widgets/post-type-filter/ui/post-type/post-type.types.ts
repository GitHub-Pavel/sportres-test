import { TypesResponse } from '../../types/post-types.types.ts';
import { PrimitiveAtom } from 'jotai';

export type PostTypeProps = {
  postType: TypesResponse | null;
  atom: PrimitiveAtom<number>;
};
