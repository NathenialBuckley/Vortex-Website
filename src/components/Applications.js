import { useEffect, useState } from "react"
import { Routes, useNavigate } from "react-router-dom"
import 'animate.css'
import { Container, Row } from "react-bootstrap"
import { FormInput } from "./FormInput"

export const Applications = () => {
    return <div className="app">
        <form>
            <FormInput />
            <FormInput />
            <FormInput />
            <FormInput />
            <FormInput />
            <FormInput />
            <FormInput />
        </form>
    </div>
}