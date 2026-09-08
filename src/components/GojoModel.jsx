/*
Source: https://sketchfab.com/3d-models/satoru-gojo-2915c8b9cecc407cbd8f9005a83ad19d
Title: Satoru Gojo
*/

import { useEffect, useMemo } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { LoopRepeat } from 'three';
import { SkeletonUtils } from 'three-stdlib';
import { playGojoGreeting } from '../utils/portfolioGreeting';

const MODEL_URL = '/Gojo.gltf';
const IDLE_CLIP = 'AS_CP_051_00_Idle_01';

export default function GojoModel(props) {
  const { scene, animations } = useGLTF(MODEL_URL);
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { actions } = useAnimations(animations, clone);

  useEffect(() => {
    const idle = actions[IDLE_CLIP];
    if (!idle) return undefined;

    idle.setLoop(LoopRepeat, Infinity);
    idle.clampWhenFinished = false;
    idle.enabled = true;
    idle.setEffectiveWeight(1);
    idle.reset().fadeIn(0.3).play();

    playGojoGreeting();

    return () => {
      idle.fadeOut(0.2);
      idle.stop();
    };
  }, [actions]);

  return <primitive object={clone} {...props} />;
}

useGLTF.preload(MODEL_URL);
