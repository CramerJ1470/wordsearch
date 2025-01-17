import { createContext } from "react";

const RenderOnceContext =createContext({
    renderOnce:0,
    setRenderOnce:() => {}
});

export default RenderOnceContext;