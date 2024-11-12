import { useState } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

import LotteryTitle from "../components/LotteryTittle";
import LotteryForm from "../components/LotteryForm";
import LotterySubmit from "../components/LotterySubmit";
import { supabase } from "../supabase/supabaseClient";

const LotteryMainPage = () => {
  const [name, setName] = useState("");
  const [numbers, setNumbers] = useState<number[]>(Array(6).fill(0));
  const [isDialogOpen, setIsDialogOpen] = useState(false); // 모달 상태 추가

  const handleNumberChange = (index: number, value: string) => {
    const updatedNumbers = [...numbers];
    updatedNumbers[index] = parseInt(value, 10) || 0;
    setNumbers(updatedNumbers);
  };

  const handleSubmit = async () => {
    const updatedNumbers = numbers.map((num) => {
      if (num === 0) {
        return Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000;
      }
      return num;
    });

    console.log("Submitted name:", name);
    console.log("Submitted numbers:", updatedNumbers);
    const { data, error } = await supabase.from("submissions").insert([
      {
        이름: name,
        숫자1: updatedNumbers[0],
        숫자2: updatedNumbers[1],
        숫자3: updatedNumbers[2],
        숫자4: updatedNumbers[3],
        숫자5: updatedNumbers[4],
        숫자6: updatedNumbers[5],
      },
    ]);

    if (error) {
      console.error("Error saving data:", error);
    } else {
      console.log("Data saved successfully:", data);
      setIsDialogOpen(true);
    }

    setName("");
    setNumbers(Array(6).fill(0));
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          marginBottom: "10%",
        }}
      >
        <LotteryTitle />
        <LotteryForm
          name={name}
          numbers={numbers}
          onNameChange={setName}
          onNumberChange={handleNumberChange}
        />
        <LotterySubmit onSubmit={handleSubmit} />

        <Dialog open={isDialogOpen} onClose={handleDialogClose}>
          <DialogTitle>제출 완료</DialogTitle>
          <DialogContent>
            <DialogContentText>제출이 완료되었습니다.</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              확인
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default LotteryMainPage;
