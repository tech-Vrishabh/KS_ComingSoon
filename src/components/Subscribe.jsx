import FlodeskPopup from "../components/FlodeskPopup";

export default function Subscribe() {
  return (
    <div style={styles.page}>
      <FlodeskPopup />
      <h1 style={styles.text}>Loading...</h1>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    background: `
      radial-gradient(circle at 30% 0%, rgba(120,60,190,0.45) 0%, rgba(17,17,17,0) 40%),
      radial-gradient(circle at 80% 20%, rgba(0,160,255,0.35) 0%, rgba(17,17,17,0) 45%),
      linear-gradient(180deg, #0e0e0e 0%, #080808 100%)
    `,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "#bbb" },
};
