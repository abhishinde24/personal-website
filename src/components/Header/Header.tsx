import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1>Abhishek Shinde</h1>
      <h2>technical blog</h2>
      <br />
      <Link to="/">Home</Link>
      &nbsp;&nbsp;
      <Link to="/about">About Me</Link>
      &nbsp;&nbsp;
      <Link to="/blog">Blog</Link>
      &nbsp;&nbsp;
      <Link to="/contact">Contact</Link>
    </header>
  )
}

export default Header
