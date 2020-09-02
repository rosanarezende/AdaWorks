import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

import { routes } from '../../routes/constants'

import logoImg from '../../assets/image/logo.svg'

import * as S from "./styles"

function AccessPage() {
    const dispatch = useDispatch()
    const goToHome = push(routes.home)
    const goToLogin = push(routes.login)

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if(token){
            const timer = setTimeout(() => {
                dispatch(goToHome)
            }, 1000)
            return () => clearTimeout(timer)
        }
        else {
            const timer = setTimeout(() => {
                dispatch(goToLogin)
            }, 1000)
            return () => clearTimeout(timer)
        }

    }, [dispatch, goToHome, goToLogin])

    return (
      <S.AcessWrapper>
        <S.AcessLogo src={logoImg} alt="logo"/>
      </S.AcessWrapper>
    )
}

export default AccessPage
