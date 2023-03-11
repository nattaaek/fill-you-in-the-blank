import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface MenuItemProps {
  label: string;
  externalLink?: boolean;
  externalLinkUrl?: string;
  handleClick?: () => void;
}

const MenuItem = ({ label, externalLink, externalLinkUrl, handleClick }: MenuItemProps) => { 
  if (externalLink && externalLinkUrl) {
    return (
        <Button onClick={handleClick} color="inherit" sx={{
            margin: "0 10px",
        }}>
            <Link to={externalLinkUrl} target="_blank" style={{ textDecoration: 'none' }}>
                {label}
            </Link>
        </Button>

      );
  }
  return (
    <Button onClick={handleClick} color="inherit" sx={{
        margin: "0 10px",
    }}>
      {label}
    </Button>
  );
};

export default MenuItem;