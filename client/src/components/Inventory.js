import React from "react";

import { Table } from "react-materialize";

import { api } from "../utils/api";
import { useUserContext } from "../contexts/UserContext";
import Scroll from "../assets/Scroll.png";
import Bow from "../assets/Bow.png";
import "../styles/table.css";
import "materialize-css";

const Inventory = () => {
  const [state, dispatch] = useUserContext();
  const imgStyle = {
    width: "40px",
    height: "40px",
    align: "center",
  };
  //   console.log(state);
  return (
    <>
      <h4 className="center">INVENTORY</h4>
      <Table>
        <tbody>
          <tr>
            <td>
              {state.user.inventory.scroll ? (
                <img src={Scroll} style={imgStyle} alt="progressLogos1" />
              ) : null}
            </td>
            <td>
              {state.user.inventory.bow ? (
                <img src={Bow} style={imgStyle} alt="progressLogo2" />
              ) : null}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Inventory;
