import { IShopItemProps } from "../models"
import '../css/Shopitem.css'

export function ShopItem({ card }: IShopItemProps) {
    return (
        <div className="shopitem-container">
            <img className="shopitem-img" src={card.img} />
            <h2 className="shopitem-title">{card.name}</h2>
            <span className="shopitem-color">{card.color}</span>
            <span className="shopitem-price">{card.price}$</span>
            <button className="shopitem-add-btn">Add to card</button>
        </div>
    )
}