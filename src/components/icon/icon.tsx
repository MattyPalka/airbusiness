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

  if (!SvgIcon) return null;

  return (
    <div
      className={clsx("flex items-center justify-center", className)}
      role="img"
      aria-label={icon}
      {...rest}
    >
      <Suspense fallback={null}>
        <SvgIcon className="w-full h-full" />
      </Suspense>
    </div>
  );
};
