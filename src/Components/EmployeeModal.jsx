import { Modal, Box } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "46%",
  height: "30%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

function EmployeeModal({ open, handleClose }) {
  return (
    <>
      {/* <button onClick={handleOpen}>Open modal</button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="adding-new-employee"
        aria-describedby="adding-new-employee-form"
      >
        <Box sx={style}>
          <h2>Employee added with success</h2>
          <button onClick={handleClose}>Close</button>
        </Box>
      </Modal>
    </>
  );
}

export default EmployeeModal;
