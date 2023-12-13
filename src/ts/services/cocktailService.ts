import {ICocktail} from "../models/ICocktail";
import {IDrinks} from "../models/IDrinks";
import {get} from "./serviceBase";

export const searchCocktail = async (
  searchText: string
): Promise<ICocktail[]> => {
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchText;
  const data = await get<IDrinks>(url);
  console.log(data.drinks);

  return data.drinks;
};
