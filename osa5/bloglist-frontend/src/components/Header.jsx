const Header = ({ text, top }) => {
  return top ? <h1>{text}</h1> : <h2>{text}</h2>
}

export default Header