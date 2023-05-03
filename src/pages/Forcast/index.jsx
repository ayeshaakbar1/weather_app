import React, { useState } from "react";
import { CssBaseline, Container } from "@mui/material";
import Form from "../../components/Form";
import Result from "../../components/Result";
const Forcast = () => {
  const [result, setResult] = useState({});
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ marginTop: "110px" }}>
        <Form setResult={setResult} />
        <Result result={result} />
      </Container>
    </>
  );
};

export default Forcast;
