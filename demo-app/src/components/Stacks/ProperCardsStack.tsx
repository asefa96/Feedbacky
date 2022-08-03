import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import { Box, Grid, Stack } from "@mui/material";

interface MediaProps {
  loading?: boolean;
}

function Media(props:any) {
  return (
    <Card>
      <Skeleton sx={{ height: 190 }} animation={false} variant="rectangular" />
      <CardContent>
        <React.Fragment>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
          {props.category}
        </React.Fragment>
      </CardContent>
    </Card>
  );
}

export default function ProperTwoCard(props:any) {
  
  return (
    <Box  marginBottom={"30px"} className="properCard">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Media category={props.category} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Media  category={props.category} item={props.category}  />
        </Grid>
      </Grid>
    </Box>
  );
}
