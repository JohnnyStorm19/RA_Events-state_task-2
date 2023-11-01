import { IProductsData } from "../models";
import { ShopItem } from "./ShopItem";

interface IListViewProps {
  products: IProductsData[];
}

export function ListView({ products }: IListViewProps) {
  return (
    <div className="list-container">
      {products.map((product: IProductsData, id) => {
        return <ShopItem key={id} card={product} />;
      })}
    </div>
  );
}
