import clsx from "clsx";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  onPageChanged: Dispatch<SetStateAction<number>>;
  numOfPages: number;
  currentPage: number;
}

export const Pagination = ({
  onPageChanged,
  numOfPages,
  currentPage,
}: Props) => {
  return (
    <nav className="mx-auto">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <button
            onClick={() => {
              onPageChanged((prev) => (prev > 0 ? prev - 1 : prev));
            }}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>
        {Array.from(new Array(numOfPages)).map((_, i) => (
          <li key={i}>
            <button
              onClick={() => {
                onPageChanged(i);
              }}
              aria-current="page"
              className={clsx(
                "leading-tight px-3 h-8 flex items-center justify-center border",
                i === currentPage
                  ? "z-10 text-blue-600  border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 "
                  : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              )}
            >
              {i + 1}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={() => {
              onPageChanged((prev) =>
                prev < numOfPages - 1 ? prev + 1 : prev
              );
            }}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};
