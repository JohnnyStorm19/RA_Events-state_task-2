import { IIconSwitchProps } from "../models";
import '../css/IconSwitch.css'

export function IconSwitch({ icon, onSwitch }: IIconSwitchProps) {
    return (
        <span 
            className='material-symbols-outlined'
            onClick={ onSwitch }
        >
            { icon }
        </span>
    )
}