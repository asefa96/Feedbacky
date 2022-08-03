import { Routes, Route } from "react-router-dom";
import Child from "../pages/Child";
import Stuff from "../pages/Stuff";
import Home from "../pages/Home";
import Sports from "../pages/Sports";
import Electronic from "../pages/Electronic";

export default (props: any) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home category={"Home item"} items={props.items} />}
      />
      <Route
        path="sports"
        element={<Sports category={"Sport item"} items={props.items} />}
      />
      <Route
        path="child"
        element={<Child category={"Child item"} items={props.items} />}
      />
      <Route
        path="shoes"
        element={<Child category={"Shoes item"} items={props.items} />}
      />
      <Route
        path="stuff"
        element={<Stuff category={"Stuff item"} items={props.items} />}
      />
      <Route
        path="electronic"
        element={
          <Electronic category={"Electronic item"} items={props.items} />
        }
      />
      <Route
        path="*"
        element={<Home category={"Unable page"} items={props.items} />}
      />
    </Routes>
  );
};
