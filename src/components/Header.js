const Header = ({ title }) => {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'Lookout on the Pier',
}

export default Header