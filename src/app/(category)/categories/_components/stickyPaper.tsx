import { useState } from "react";
import { Box } from "@yamada-ui/react";

type StickyPaperProps = {
  paper_num: number;
};

const StickyPaper = (props: StickyPaperProps) => {
  const { paper_num } = props;
  const [count, setCount] = useState(paper_num);

  const boxes = [
    { value: 1, height: 85, bg: "#FF6060" },
    { value: 7, height: 70, bg: "#FFa070" },
    { value: 16, height: 55, bg: "#10E070" },
    { value: 35, height: 40, bg: "#00B0FF" },
  ];

  return (
    <>
      <Box h='80px'>
        <Box display='flex' pl='auto' g='10px' justifyContent='flex-end'>
          {boxes.map((box, index) =>
            index >= boxes.length - count ? (
              <Box
                key={index}
                zIndex='100'
                w='30px'
                h={`${box.height}px`}
                pt='5px'
                mt='5px'
                rounded='3px'
                bg={box.bg}
                color='white'
                fontSize='20px'
                textAlign='center'
                shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px'
              >
                <p>{box.value}</p>
              </Box>
            ) : (
              <div key={index} style={{ width: "30px" }}></div>
            )
          )}
        </Box>
      </Box>
    </>
  );
};

export default StickyPaper;
