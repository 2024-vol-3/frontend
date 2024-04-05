import { Button } from "@yamada-ui/react";

export default function Card() {
  return (
    <>
      <div
        style={{
          background: "red",
          width: "200px",
          height: "150px",
          margin: "40px",
        }}
      >
        <Button
          style={{
            background: "white",
          }}
        >
          test
        </Button>
      </div>
    </>
  );
}
