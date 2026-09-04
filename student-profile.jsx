import React from "react";

// Functional component that receives data via props
function Student(props) {
  return (
    <div style={styles.card}>
      <div style={styles.avatar}>{props.name.charAt(0)}</div>
      <h2 style={styles.name}>{props.name}</h2>
      <div style={styles.row}>
        <span style={styles.label}>Course</span>
        <span style={styles.value}>{props.course}</span>
      </div>
      <div style={styles.row}>
        <span style={styles.label}>College</span>
        <span style={styles.value}>{props.college}</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Student profiles</h1>
      <div style={styles.container}>
        <Student
          name="Ananya Sharma"
          course="B.Tech Computer Science"
          college="GIET University"
        />
        <Student
          name="Rohit Verma"
          course="B.Sc Physics"
          college="Utkal University"
        />
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f4f5f7",
    padding: "40px 20px",
    fontFamily: "sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "22px",
    fontWeight: 500,
    marginBottom: "28px",
    color: "#222",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    border: "1px solid #e2e2e2",
    padding: "24px",
    width: "240px",
    textAlign: "center",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
  },
  avatar: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    background: "#e6f1fb",
    color: "#0c447c",
    fontSize: "22px",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 12px",
  },
  name: {
    fontSize: "17px",
    fontWeight: 500,
    margin: "0 0 16px",
    color: "#111",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    padding: "6px 0",
    borderTop: "1px solid #eee",
  },
  label: {
    color: "#777",
  },
  value: {
    color: "#222",
    fontWeight: 500,
  },
};
