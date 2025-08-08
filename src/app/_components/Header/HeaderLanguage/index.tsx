import Image from "next/image"

import iconLanguage from '../images/icon-language.svg';

export const HeaderLanguage = () => {
  return (
    <div className="relative inline-block">
      <Image
        src={iconLanguage}
        alt="Idioma"
        width={50}
        height={50}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none filter invert brightness-0"
      />

      <select
        className="pl-10 pr-0 py-1 
                  bg-transparent 
                  text-transparent sm:text-white 
                  border border-zinc-500 
                  text-xs sm:text-sm 
                  rounded-none sm:rounded-md 
                  h-10 w-10 sm:w-auto 
                  focus:outline-none 
                  "
      >
        <option value="pt">Português</option>
      </select>

    </div>
  )
}