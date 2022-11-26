import { lazy as _lazy } from "react";

function lazy(importFn: Function) {
  return _lazy(async () => {
    const m = await importFn();
    return { default: m.ReactComponent };
  });
}

export const icons = {
  Ambulance: lazy(async () => import("./assets/ambulance.svg")),
  Car: lazy(async () => import("./assets/car.svg")),
  GraduationCap: lazy(async () => import("./assets/graduation-cap.svg")),
  Hamburger: lazy(async () => import("./assets/hamburger.svg")),
  Heart: lazy(async () => import("./assets/heart.svg")),
  HeartSolid: lazy(async () => import("./assets/heart-solid.svg")),
  Home: lazy(async () => import("./assets/home.svg")),
  Paw: lazy(async () => import("./assets/paw.svg")),
  Rugby: lazy(async () => import("./assets/rugby.svg")),
  Scissors: lazy(async () => import("./assets/scissors.svg")),
  Star: lazy(async () => import("./assets/star.svg")),
  StarSolid: lazy(async () => import("./assets/star-solid.svg")),
};
