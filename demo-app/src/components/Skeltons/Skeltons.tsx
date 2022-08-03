import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Skelton() {
  return (
    <Stack spacing={1}>
      <Skeleton
        animation={false}
        variant="rectangular"
        width={"60vw"}
        height={200}
      />
      <Skeleton animation={false} variant="text" width={"60vw"} />
      <Skeleton animation={false} variant="text" width={"60vw"} />
    </Stack>
  );
}
