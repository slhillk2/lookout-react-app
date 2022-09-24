import main_logo from '../assets/logo/main_logo.png'

const Header = ({ title }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto nav-pills">
          <li className='nav-item active'> <a className='nav-link'>Home</a></li>
          <li className='nav-item'> <a className='nav-link'>Gallery</a></li>

          <a>
          <img src={main_logo} id='logo' alt="lookout logo" />
          </a>

          <li className='nav-item'> <a className='nav-link'>Contact</a></li>
          <li className='nav-item'> <a className='nav-link'>Menu</a></li>
        </ul>
      </div>
      
      <div class="nav-collapse">
        <ul class="nav">
          
        </ul>
      </div>
      
    </nav>
  )
}

Header.defaultProps = {
    title: 'Lookout on the Pier',
}

export default Header