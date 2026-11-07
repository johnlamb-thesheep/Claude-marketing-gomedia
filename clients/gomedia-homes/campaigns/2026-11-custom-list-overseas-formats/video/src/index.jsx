import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {CustomList, DURATION} from './CustomList';

const Root = () => (
  <Composition
    id="C1CustomList"
    component={CustomList}
    durationInFrames={DURATION}
    fps={30}
    width={1080}
    height={1920}
  />
);

registerRoot(Root);
