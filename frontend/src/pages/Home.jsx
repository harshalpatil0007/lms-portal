import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to LMS</h1>
      <Link to="/login">Student Login</Link>
    </div>
  );
}
