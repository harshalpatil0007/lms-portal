import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>LMS Portal</h2>

      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/courses" style={styles.link}>Courses</Link>

      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#1e293b",
    color: "white"
  },
  link: {
    marginLeft: "15px",
    color: "white",
    textDecoration: "none"
  }
};
