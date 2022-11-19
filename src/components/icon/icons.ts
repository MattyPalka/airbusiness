import { lazy as _lazy } from "react";

function lazy(importFn: Function) {
  return _lazy(async () => {
    const m = await importFn();
    return { default: m.ReactComponent };
  });
}

export const icons = {
  Star: lazy(async () => import("./assets/star.svg")),
  StarSolid: lazy(async () => import("./assets/star-solid.svg")),
  Heart: lazy(async () => import("./assets/heart.svg")),
  HeartSolid: lazy(async () => import("./assets/heart-solid.svg")),
};
