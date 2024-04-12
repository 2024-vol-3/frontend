"use client";
import {Box, } from "@yamada-ui/react";

const StickyPaper = () => {
  return (
    <>
      <Box h='80px'>
        <Box display='flex' pr='auto' g='10px'>
            <Box zIndex='100' w='30px' h='85px' pt='5px' mt='5px' rounded='3px' bg='#FF6060' color='white' fontSize='20px' textAlign='center' shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px'>
            <p>1</p>
            </Box>
            <Box zIndex='100' w='30px' h='70px' pt='5px' mt='20px' rounded='3px' bg='#FFa070' color='white' fontSize='20px' textAlign='center' shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px'>
            <p>2</p>
            </Box>
            <Box zIndex='100' w='30px' h='55px' pt='5px' mt='35px' rounded='3px' bg='#10E070' color='white' fontSize='20px' textAlign='center' shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px'>
            <p>8</p>
            </Box>
            <Box zIndex='100' w='30px' h='40px' pt='5px' mt='50px' rounded='3px' bg='#00B0FF' color='white' fontSize='20px' textAlign='center' shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px'>
            <p>29</p>
            </Box>
        </Box>
      </Box>
    </>
  );
}

export default StickyPaper;