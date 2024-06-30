import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
useGLTF.preload("/nasa_earth.glb");
export default function Globe(props) {
    const group = useRef(null);
    const { animations, scene } = useGLTF("/nasa_earth.glb");
    const { actions } = useAnimations(animations, scene);
    useEffect(() => {
        console.log(actions);
    }, []);
    return (_jsx("group", Object.assign({ ref: group, scale: 0.0108 }, props, { children: _jsx("primitive", { object: scene }) })));
}
