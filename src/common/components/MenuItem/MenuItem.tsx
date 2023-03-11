import { Button } from "@mui/material";

interface MenuItemProps {
  label: string;
}

const MenuItem = ({ label }: MenuItemProps) => {
  return (
    <Button color="inherit" sx={{
        margin: "0 10px",
    }}>
      {label}
    </Button>
  );
};

export default MenuItem;