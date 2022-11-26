import { HTMLAttributes, Suspense, useMemo } from "react";
import { icons } from "./icons";
import { clsx } from "clsx";

export type IconName = keyof typeof icons;

interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  className?: string;
}

export const Icon = ({ icon, className, ...rest }: Props) => {
  const SvgIcon = useMemo(() => icons[icon], [icon]);

  return (
    <div
      role="img"
      aria-label={icon}
      className={clsx("flex justify-center items-center", className)}
      {...rest}
    >
      <Suspense fallback={null}>
        <SvgIcon className="w-full h-full" />
      </Suspense>
    </div>
  );
};
