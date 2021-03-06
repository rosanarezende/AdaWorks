import React from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

import { routes } from '../../routes/constants'

import { ArrowBack } from "@material-ui/icons"
import { Typography } from '@material-ui/core'
import * as S from "./styles"

import Appbar from '../../containers/Appbar'

function NotFoundPage() {
    const dispatch = useDispatch()

    return (
        <>
            <Appbar />
            <S.NFWrapper>
                <Typography variant="h5">
                    Página não encontrada
                </Typography>
                <S.NFLink onClick={() => dispatch(push(routes.home))}>
                    <ArrowBack/> 
                    <Typography variant="inherit"
                        style={ { marginLeft: "10px" }}
                    >
                        Voltar para Home
                    </Typography>
                </S.NFLink>
            </S.NFWrapper>
        </>
    )
}

export default NotFoundPage;
