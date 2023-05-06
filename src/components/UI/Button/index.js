import { Button } from "@mui/material";

import styles from "./styles.module.scss";

export default function ButtonUI({ children, type }) {
  return (
    <div>
      {type === "primary" ? (
        <Button
          variant="contained"
          color="primary"
          style={{
            borderRadius: "50px",
            background: "#ffc400",
            color: "rgba(1, 65, 255)",
          }}
        >
          {children}
        </Button>
      ) : type === "secondary" ? (
        <Button
          variant="outlined"
          color="primary"
          style={{
            borderRadius: "50px",
            borderColor: "#ffc400",
            color: "#fff",
          }}
        >
          {children}
        </Button>
      ) : (
        ""
      )}
      {/* <Button /> */}
    </div>
  );
}
