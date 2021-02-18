import { Link } from 'react-router-dom';

export default function Profile({onChangePageType }) {
  return (
    <div>
      <h1>PROFILE</h1>
      <Link to="/">Logout</Link>
      <Link to="/todo">Home</Link>
    </div>
  );
}
