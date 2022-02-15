import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { useData } from "../DataContext";
import React from "react";
import MainContainer from "./MainContainer";
import Paper from "@material-ui/core/Paper";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

const Result = () => {
  const { data } = useData();
  const navigate = useNavigate();

  const entries = Object.entries(data)
    .filter((entry) => entry[0] !== "files")
    .filter((entry) => entry[0] !== "hasPhone");
  const { files } = data;
  const toStart = () => {
    navigate("/");
  };
  return (
    <MainContainer typoMessage=" 👨‍💻👹🌃Result㊙️🐒⛩️">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry[0]}>
                <TableCell component="th" scope="row">
                  {entry[0]}
                </TableCell>
                <TableCell align="right">{entry[1]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PrimaryButton onClick={toStart}>StartOver</PrimaryButton>
    </MainContainer>
  );
};

export default Result;
