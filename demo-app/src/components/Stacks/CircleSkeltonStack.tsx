import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CircleSkeltonStack() {
  const navigate = useNavigate();

  const skeltonCount = 5;
  const markets = [
    {
      name: "shoes",
      url: "https://st.depositphotos.com/2501253/3129/i/950/depositphotos_31296181-stock-photo-shoes.jpg",
    },
    {
      name: "child",
      url: "https://st2.depositphotos.com/1726139/8046/i/950/depositphotos_80466126-stock-photo-dressing-closet-with-clothes-arranged.jpg1",
    },
    {
      name: "sports",
      url: "https://st3.depositphotos.com/3591429/18305/i/1600/depositphotos_183057156-stock-photo-sports-tools-green-grass-concept.jpg",
    },
    {
      name: "stuff",
      url: "https://st2.depositphotos.com/1177973/11355/i/950/depositphotos_113556240-stock-photo-packed-household-goods.jpg",
    },
    {
      name: "electronic",
      url: "https://st3.depositphotos.com/1906253/13854/i/1600/depositphotos_138547830-stock-photo-old-fully-equipped-kitchen.jpg",
    },
  ];
  const pageTo = (page: string) => {
    navigate(page, { replace: true });
  };
  return (
    <Stack
      spacing={1}
      justifyContent="space-between"
      width={"100%"}
      marginBottom={"2rem"}
      direction={{ xs: "column", sm: "column", md: "row" }}
      display={{ xs: "none", sm: "none", md: "inline-flex" }}
    >
      {markets.map((item) => {
        return (
          <Avatar
            id={"link-to-" + item.name}
            onClick={() => {
              pageTo(item.name);
            }}
            alt="Remy Sharp"
            src={item.url}
            sx={{ width: 156, height: 156, cursor: "pointer" }}
          />
        );
      })}
    </Stack>
  );
}
