import { Box } from "@mui/material";
import SkeltonStack from "../components/Stacks/CircleSkeltonStack";
import ProperCard from "../components/Stacks/ProperCardsStack";

export default (props: any) => {
    console.log(props)
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      justifyContent="center"
    >
      <Box width={"60vw"}>
        {props.items.map(() => {
          return <ProperCard category={props.category} item={props.item} />;
        })}
      </Box>
    </Box>
  );
};
