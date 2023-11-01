import { IShopCardProps } from "../models";
import "../css/Shopcard.css";

export function ShopCard({ card }: IShopCardProps) {
  return (
    <div className="shopcard-container">
      <header className="shopcard-header">
        <h2 className="shopcard-title">{card.name}</h2>
        <span className="shopcard-color">{card.color}</span>
      </header>
      <main className="shopcard-main">
        <img className="shopcard-img" src={card.img} />
      </main>
      <footer className="shopcard-footer">
        <span className="shopcard-price">{card.price}$</span>
        <button className="shopcard-add-btn">Add to card</button>
      </footer>
    </div>
  );
}
