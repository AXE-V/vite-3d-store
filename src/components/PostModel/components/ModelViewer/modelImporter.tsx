import { GroupProps, useFrame, useThree } from '@react-three/fiber';
import { ReactElement, RefObject, useEffect, useRef, useState } from 'react';
import { path } from '../../../../utils/path';
import { PostModel } from '../../../../redux/slices/data/post';
import * as THREE from 'three';

type ModelImporter = Pick<PostModel['post'], 'zip_name' | 'user_id'>;
export const modelImporter = (post: ModelImporter) => {
  const [Model, setModel] = useState<{ (props: GroupProps): JSX.Element } | null>(null);
  const { getName } = path;

  useEffect(() => {
    try {
      const pathModel = `/public/models/data/${post.user_id}/${getName(post.zip_name)}/scene.tsx`;
      import(`${pathModel}`).then((d) => {
        const modelProps: GroupProps = { scale: 30 };
        d.Model as RefObject<JSX.Element>;
        setModel(() => d.Model(modelProps));
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return Model;
};