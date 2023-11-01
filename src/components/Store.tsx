import { useState } from "react";
import { IconSwitch } from "./IconSwitch";
import { CardsView } from "./CardsView";
import { ListView } from "./ListView";

import { products } from "../data/products-data";


export function Store() {
    const [iconState, setIconState] = useState('view_module');

    const handleIconClick = (iconState: string) => {
        iconState === 'view_module' ? setIconState('view_list'): setIconState('view_module');
    }

    return (
        <div className="store-container">
            <IconSwitch 
                icon={ iconState } 
                onSwitch={ () => handleIconClick(iconState) }
            />
            { iconState === 'view_list' ? <CardsView products={ products } /> : <ListView products={ products } /> }
        </div>
    )
}