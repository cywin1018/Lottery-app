import { Button } from "@mui/joy";

interface SubmitProps {
  onSubmit: () => void;
}

const LotterySubmit = ({ onSubmit }: SubmitProps) => {
  return (
    <Button
      onClick={onSubmit}
      sx={{
        fontSize: "1.25rem", // 글자 크기 확대
        fontWeight: "bold",
        color: "#fff",
        backgroundColor: "#3f51b5",
        padding: "0.7rem 3rem", // 패딩을 더 크게 설정하여 버튼 크기 확대
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
