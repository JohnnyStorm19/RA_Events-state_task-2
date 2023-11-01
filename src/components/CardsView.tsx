import { IProductsData } from "../models";
import { ShopCard } from "./ShopCard";

interface ICardsViewProps {
  products: IProductsData[];
}

export function CardsView({ products }: ICardsViewProps) {
  return (
    <div className="cards-container">
      {products.map((product: IProductsData, id) => {
        return <ShopCard key={id} card={product} />;
      })}
    </div>
  );
}
