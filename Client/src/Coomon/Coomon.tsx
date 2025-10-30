// Coomon.tsx
import { Box } from "@mui/material";

interface CoomonProps {
  bgColor?: string;           // optional prop
  children?: React.ReactNode; // allows passing JSX/content inside
}

const Coomon: React.FC<CoomonProps> = ({ bgColor = "rgba(131, 58, 180, 1)", children }) => {
  return (
    <>
    <Box
      sx={{
        backgroundColor: bgColor,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:"white"
      }}
    >
      {children}
    </Box>
    </>
  );
};

export default Coomon;
