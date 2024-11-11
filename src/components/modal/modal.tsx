import { ReactNode, useRef } from "react";
import { Icon } from "../icon";
import clsx from "clsx";
import { useOnClickOutside } from "usehooks-ts";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: VoidFunction;
  title: string;
}

export const Modal = ({ children, isOpen, onClose, title }: Props) => {
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, onClose);

  return (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabIndex={-1}
      aria-hidden={isOpen}
      className={clsx(
        isOpen ? "flex bg-gray-300 bg-opacity-50" : "hidden",
        "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      )}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full" ref={modalRef}>
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow ">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
            <h3 className="text-xl font-semibold text-gray-900 ">{title}</h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
              data-modal-hide="static-modal"
            >
              <Icon icon="Cross" className="w-3 h-3" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-4 md:p-5 space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );
};
