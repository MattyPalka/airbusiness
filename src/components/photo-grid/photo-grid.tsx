import clsx from "clsx";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  images: string[];
}

export const PhotoGrid = ({ images }: Props) => {
  const [open, setOpen] = useState(false);
  if (!images.length) {
    return null;
  }

  return (
    <>
      <div className="grid grid-cols-[65%,_45%] grid-rows-[1fr,_1fr] gap-2 h-[500px] rounded-lg overflow-hidden">
        {images.map((image, i) => (
          <div
            onClick={() => setOpen(true)}
            key={image}
            className={clsx(
              i % 3 === 0 ? "row-span-2" : "",
              "max-h-full",
              "relative"
            )}
          >
            <img
              src={image}
              className="w-full h-full object-center object-cover absolute inset-0"
            />
          </div>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((image) => ({ src: image }))}
      />
    </>
  );
};
