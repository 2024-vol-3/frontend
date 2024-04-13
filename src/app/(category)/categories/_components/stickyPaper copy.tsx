import { useState } from "react";
import { Box } from "@yamada-ui/react";

const StickyPaper = () => {
  const [clickedBoxes, setClickedBoxes] = useState<number[]>([]);
  const transitionDuration = "400ms";
  const transitionTimingFunction = "ease-in-out";
  const handleBoxClick = (boxNumber: number) => {
    if (clickedBoxes.includes(boxNumber)) {
      setClickedBoxes(clickedBoxes.filter((num) => num !== boxNumber));
    } else {
      setClickedBoxes([...clickedBoxes, boxNumber]);
    }
  };
  const isBoxClicked = (boxNumber: number) => clickedBoxes.includes(boxNumber);
  const getTransform = (boxNumber: number) =>
    isBoxClicked(boxNumber) ? "translateY(-50px)" : "none";

  return (
    <>
      <Box h='80px'>
        <Box display='flex' pr='auto' g='10px'>
          <Box
            zIndex='100'
            w='30px'
            h='85px'
            pt='5px'
            mt='5px'
            rounded='3px'
            bg='#FF6060'
            color='white'
            fontSize='20px'
            textAlign='center'
            shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px'
            style={{
              transition: `opacity ${transitionDuration} ${transitionTimingFunction}, transform ${transitionDuration} ${transitionTimingFunction}`,
              transform: getTransform(1),
            }}
            onClick={() => handleBoxClick(1)}
          >
            <p>1</p>
          </Box>
          <Box
            zIndex='100'
            w='30px'
            h='70px'
            pt='5px'
            mt='20px'
            rounded='3px'
            bg='#FFa070'
            color='white'
            fontSize='20px'
            textAlign='center'
            shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px'
            style={{
              transition: `opacity ${transitionDuration} ${transitionTimingFunction}, transform ${transitionDuration} ${transitionTimingFunction}`,
              transform: getTransform(2),
            }}
            onClick={() => handleBoxClick(2)}
          >
            <p>7</p>
          </Box>
          <Box
            zIndex='100'
            w='30px'
            h='55px'
            pt='5px'
            mt='35px'
            rounded='3px'
            bg='#10E070'
            color='white'
            fontSize='20px'
            textAlign='center'
            shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px'
            style={{
              transition: `opacity ${transitionDuration} ${transitionTimingFunction}, transform ${transitionDuration} ${transitionTimingFunction}`,
              transform: getTransform(8),
            }}
            onClick={() => handleBoxClick(8)}
          >
            <p>16</p>
          </Box>
          <Box
            zIndex='100'
            w='30px'
            h='40px'
            pt='5px'
            mt='50px'
            rounded='3px'
            bg='#00B0FF'
            color='white'
            fontSize='20px'
            textAlign='center'
            shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px'
            style={{
              transition: `opacity ${transitionDuration} ${transitionTimingFunction}, transform ${transitionDuration} ${transitionTimingFunction}`,
              transform: getTransform(29),
            }}
            onClick={() => handleBoxClick(29)}
          >
            <p>35</p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StickyPaper;
