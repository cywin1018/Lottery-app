import { Button } from "@mui/joy";

interface SubmitProps {
  onSubmit: () => void;
}

const LotterySubmit = ({ onSubmit }: SubmitProps) => {
  return (
    <Button
      onClick={onSubmit}
      sx={{
        fontSize: "1.25rem",
        fontWeight: "bold",
        color: "#fff",
        backgroundColor: "#3f51b5",
        padding: "0.7rem 2.3rem",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        "&:hover": {
          backgroundColor: "#2c3e9a",
        },
      }}
    >
      제출
    </Button>
  );
};

export default LotterySubmit;
