import React from 'react'
import '../../CSSFiles/NavBarButton.css'
import {AuthContext} from '../../Contexts/AuthorizationContext'

const STYLES = [
    "btn--primary",
    "btn--outline"
]

const SIZES = [
    "btn--medium",
    "btn--large"
]
//Used for signing out.
export const NavBarButton = ({
    children,
    buttonStyle,
    buttonSize
}) => {
    const {loggedIn, setLoggedIn} = React.useContext(AuthContext)
    const onClick = () => {
        setLoggedIn(false)
    }

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
     
    const checkButtonSize = SIZES.includes(buttonStyle) ? buttonSize : SIZES[0];

    
    return (
        <button className = {`btn ${checkButtonStyle} ${checkButtonSize}`}  
        onClick={onClick} type= 'button'>
            {children}
        </button>
        
    )

}