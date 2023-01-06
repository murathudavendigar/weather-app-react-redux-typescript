import { ChangeEvent } from "react";
import { optionType } from "../types";

type Props = {
  term: string;
  options: [];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void; // birşey döndürmüyor. içinde işlem yapıyor sadece
  handleOptionButton: (option: optionType) => void;
  handleSubmit: () => void;
};

const Search = ({
  term,
  options,
  handleChange,
  handleOptionButton,
  handleSubmit,
}: Props): JSX.Element /* ne dönceği */ => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-sky-500  to-gray-300 h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded text-zinc-700">
        <h1 className="text-4xl font-black">John Price</h1>
        <h1 className="text-4xl font-thin">
          Weather <span className="font-black">Forecast</span>
        </h1>
        <p>
          Enter below a place you want to know the weather of and select an
          option from the dropdown
        </p>
        <div className="relative flex mt-10 md:mt-4">
          <input
            type="text"
            value={term}
            onChange={handleChange}
            className="px-2 py-1 rounded-1-md border-2 border-white"
          />
          <ul className="absolute top-9 bg-white  rounded-b-md">
            {options.map((option: optionType, index: number) => (
              <li key={index}>
                <button
                  className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
                  onClick={() => handleOptionButton(option)}>
                  {option.name} {option.country}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="rounded-r-md border-2 border-zinc-200 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer"
            onClick={handleSubmit}>
            Search
          </button>
        </div>
      </section>
    </div>
  );
};

export default Search;
