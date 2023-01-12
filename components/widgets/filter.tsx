import {} from "@heroicons/react/24/solid";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { forwardRef } from "react";
import tw from "tailwind-styled-components";

export const SearchButton = tw.button`
  px-4
  py-2
  text-white
  bg-blue-500
  border-blue-300
  hover:border-blue-500
  hover:bg-blue-600
  rounded
  border-l
  mr-1
`;

export const ResetButton = forwardRef(function ResetButton(
  props: React.ComponentPropsWithoutRef<"button">,
  ref: React.Ref<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      type="button"
      {...props}
      className="
      px-4
      py-2
      text-black
      bg-slate-50
      hover:border-gray-800
      hover:bg-gray-100
      border-slate-700
      rounded
      items-center
      inline-flex
      justify-center
      border
      "
    >
      <ArrowPathIcon className="h-5 w-5 text-black mr-2" />
      <span>{props.children}</span>
    </button>
  );
});

export const FilterTextInput = tw.input`
  px-4 py-2 flex-1 md:max-w-xs border-gray-300 border mr-2 rounded
`;

export const FilterButton = tw.button`
  px-4
  py-2
  text-white
  bg-blue-500
  border-blue-300
  hover:border-blue-500
  hover:bg-blue-600
  flex items-center justify-center  
  rounded
  border-l
  mr-1
`;

type FilterProps = {
  children: JSX.Element;
  onSearch: () => void;
  onReset: () => void;
  popPositionClass?: string;
};
