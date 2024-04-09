import { Carousel, CarouselSlide } from '@yamada-ui/carousel'
import { Box, Center, Pagination } from '@yamada-ui/react'
import React from 'react'

const SolveForm = () => {
    return (
        <>
        <Box w="full" display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="30px">
            <Carousel index={1}>
                <CarouselSlide as={Center} bg="primary">
                    1
                </CarouselSlide>
                <CarouselSlide as={Center} bg="secondary">
                    2
                </CarouselSlide>
                <CarouselSlide as={Center} bg="warning">
                    3
                </CarouselSlide>
                <CarouselSlide as={Center} bg="danger">
                    4
                </CarouselSlide>
            </Carousel>
            <Pagination total={10} size="lg" />
        </Box>
        </>
    )
}

export default SolveForm