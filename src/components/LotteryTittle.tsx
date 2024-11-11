import { Typography } from "@mui/material";

const LotteryTitle = () => {
  return (
    <Typography
      variant="h2"
      sx={{
        fontWeight: "bold",
        color: "#3f51b5",
        textAlign: "center",
        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
      }}
    >
      SCCC 복권 이벤트
    </Typography>
  );
};

export default LotteryTitle;
