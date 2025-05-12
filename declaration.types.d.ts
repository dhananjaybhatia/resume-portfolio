// <reference types="@react-three/fiber" />

import { AmbientLight, DirectionalLight, PointLight } from "three";
import { Object3DNode } from "@react-three/fiber";

declare module "@react-three/fiber" {
    interface ThreeElements {
        ambientLight: Object3DNode<AmbientLight, typeof AmbientLight>;
        directionalLight: Object3DNode<DirectionalLight, typeof DirectionalLight>;
        pointLight: Object3DNode<PointLight, typeof PointLight>;
    }
}
