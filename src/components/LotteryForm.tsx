import { Box, Input, FormControl, FormLabel, FormHelperText } from "@mui/joy";

interface FormProps {
  name: string;
  numbers: number[];
  onNameChange: (name: string) => void;
  onNumberChange: (index: number, value: string) => void;
}

const LotteryForm = ({
  name,
  numbers,
  onNameChange,
  onNumberChange,
}: FormProps) => {
  const handleNumberChange = (index: number, value: string) => {
    if (value.length <= 5) {
      onNumberChange(index, value);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <FormControl sx={{ padding: 1 }}>
        <FormLabel>이름</FormLabel>
        <Input
          sx={{ width: "7rem" }}
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
        />
        <FormHelperText sx={{ fontSize: "0.8rem" }}>
          이름 입력 부탁드려요.
        </FormHelperText>
      </FormControl>
      {numbers.map((num, index) => (
        <FormControl key={index} sx={{ padding: 1 }}>
          <FormLabel>숫자{index + 1}</FormLabel>
          <Input
            sx={{ width: "7rem" }}
            type="number"
            value={num || ""}
            onChange={(e) => handleNumberChange(index, e.target.value)}
          />
          <FormHelperText sx={{ fontSize: "0.8rem" }}>
            10,000~30,000 사이
          </FormHelperText>
        </FormControl>
      ))}
    </Box>
  );
};

export default LotteryForm;
