import IconSearch from "../../src/assets/icon-search.svg";
import Image from "next/image";





export const Search = () => {
  return (
    <div className="flex items-center gap-4">
      <Image src={IconSearch} alt="icon search" />
      <input className=" bg-transparent outline-none text-white placeholder:text-white " placeholder="Buscar" type="text"/>
    </div>
  );
};
