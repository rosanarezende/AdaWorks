import React, { forwardRef } from "react"

import { routes } from "../../routes/constants"

import MenuItemPersonalized from "../../components/MenuItemPersonalized"

function MenuItensUser() {
    return (
        <>
            <MenuItemPersonalized
                text="CADASTRAR ALGUMA COISA"
                path={routes.signup}
            />
        </>
    )
}

export default forwardRef(MenuItensUser);
