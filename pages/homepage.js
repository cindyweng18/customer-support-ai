import './styles/homepage.css';

export default function HomePage() {
  return (
    <div>
        {/* Header Section */}
      <div className="landing">
        <div className="header">
          <h1 className="logo">Boba Broskis</h1>
          <div className="options">
            <h3 className="menu" >↓ Menu ↓</h3>
            <button className="chat"> <a href=''>Chat with Us</a></button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="hero">
          <div className="slogan">
            <p>Grab a Broski</p>
            <p>Cause You're Gonna</p>
            <p>Wanna Share!</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="tea">
        <h1>Menu</h1>
        <p>
          We offer a wide range of delicious boba tea flavors. Explore our menu
          and find your favorite drink! Have questions? Chat with our AI employee!
        </p>
        <div className="teaSelections">
          <div className="milk-tea">
            <h2>Milk Teas</h2>
          </div>
          <div className="tea-latte">
            <h2>Tea Lattes</h2>
          </div>
          <div className="slush-serie">
            <h2>Slush Series</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

