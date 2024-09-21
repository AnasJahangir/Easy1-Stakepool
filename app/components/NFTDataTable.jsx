import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Trait1 from "../assets/Trait1.png";
import Trait2 from "../assets/Trait2.png";
import Trait3 from "../assets/Trait3.png";
import Trait4 from "../assets/Trait4.png";
import Trait5 from "../assets/Trait5.png";
import Image from "next/image";

const createData = (id, trait, collection, name, winner) => {
  return { id, trait, collection, name, winner };
};

const rows = [
  createData(1, Trait1, "CryptoPunks", "Punk #7804", "stake1u86f8f"),
  createData(2, Trait2, "Bored Ape Yacht Club", "Ape #5001", "stake2u86f8f"),
  createData(4, Trait3, "World of Women", "WoW #101", "stake4u86f8f"),
  createData(5, Trait4, "Doodles", "Doodle #256", "stake5u86f8f"),
  createData(6, Trait5, "Art Blocks", "Genesis", "stake3u86f8f"),
];

const NFTDataTable = () => {
  return (
    <TableContainer
      component={Paper}
      className="bg-transparent rounded-lg shadow-lg "
      style={{ background: "none" }}
    >
      <Table>
        <TableHead className="mb-10">
          <TableRow>
            <TableCell className="text-center border-none">
              <span className="text-white border px-6 inline-block mb-10 py-2 font-semibold rounded-xl">
                Trait
              </span>
            </TableCell>
            <TableCell className="text-center border-none">
              <div className="text-white border px-6 inline-block mb-10 py-2 font-semibold rounded-xl">
                Collection
              </div>
            </TableCell>
            <TableCell className="text-center border-none">
              <span className="text-white border px-6 inline-block mb-10 py-2 font-semibold rounded-xl">
                Name
              </span>
            </TableCell>
            <TableCell className="text-center border-none">
              <span className="text-white border px-6 inline-block mb-10 py-2 font-semibold rounded-xl">
                Winner
              </span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              className="hover:bg-[#ffffff09]  transition duration-300"
              sx={{ color: "white" }}
            >
              <TableCell
                component="th"
                scope="row"
                className="text-white flex justify-center  border-b font-semibold border-[#666666] p-4"
                padding="none"
              >
                <Image
                  src={row.trait}
                  alt="nft"
                  className="w-24 rounded-3xl h-24"
                />
              </TableCell>
              <TableCell className="text-white text-center border-b font-semibold border-[#666666] pb-4">
                {row.collection}
              </TableCell>
              <TableCell className="text-white text-center border-b font-semibold border-[#666666] pb-4">
                {row.name}
              </TableCell>
              <TableCell className="text-center border-b font-semibold border-[#666666] pb-4">
                <Tooltip title={row.winner} arrow>
                  <div className="text-[#82B1FF]  h-10 flex justify-center items-end">
                    {row.winner.slice(0, 6) + "..." + row.winner.slice(-3)}
                  </div>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NFTDataTable;