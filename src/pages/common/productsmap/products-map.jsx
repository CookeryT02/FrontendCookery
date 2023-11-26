import { Col, Container, Row } from "react-bootstrap"
import PageHeader from "../../../components/common/page-header/page-header"
import Spacer from "../../../components/common/spacer/spacer"
import "./products-map.scss"

import React from 'react'
import MapCategories from "./map-categories/map-categories"

const ProductsMap = () => {
    return (
        <>
            <PageHeader title="Products MAP" />
            <Spacer />
            <Container>
                <MapCategories />
            </Container>
            <Spacer />

        </>
    )
}

export default ProductsMap