export interface IProductsData {
    name: string;
    price: string;
    color: string;
    img: string;
}

export interface IIconSwitchProps {
    icon: string;
    onSwitch: () => void;
}

export interface IShopCardProps {
    card: IProductsData
}

export interface IShopItemProps {
    card: IProductsData
}