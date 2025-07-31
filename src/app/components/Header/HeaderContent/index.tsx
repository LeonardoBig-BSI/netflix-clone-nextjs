import Image from "next/image";

import iconLanguage from "../images/icon-language.svg";
import { Button } from "../../Button";
import { Header } from "..";
import { ReactNode } from "react";

export const HeaderContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-[1280px] px-6 py-4 flex justify-between items-center mx-auto">
        {children}
    </div>
  );
};
