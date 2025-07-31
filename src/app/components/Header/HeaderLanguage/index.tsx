import Image from "next/image"

import iconLanguage from '../images/icon-language.svg';

export const HeaderLanguage = () => {
    return(
        <div className="relative inline-block">
          <Image
            src={iconLanguage}
            alt="Idioma"
            width={50}
            height={50}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none filter invert brightness-0"
          />

          <select className="pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-500 text-white text-sm rounded-md focus:outline-none">
            <option value="pt">Português</option>
          </select>
        </div>
    )
}