import React, { forwardRef } from "react"

import { routes } from "../../routes/constants"

import MenuItemPersonalized from "../../components/MenuItemPersonalized"

function MenuItensCompany() {
    return (
        <>
            <MenuItemPersonalized
                text="CADASTRAR ALGUMA COISA"
                path={routes.signup}
            />
        </>
    )
}

export default forwardRef(MenuItensCompany);
