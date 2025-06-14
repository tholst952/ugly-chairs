export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <NavList />
    </nav>
  );

  function Logo() {
    const logoStyle = {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "Space Grotesk",
      // fontFamily: "Delius",
      // fontFamily: "Edu NSW ACT Cursive",
      fontSize: "26px",
      fontWeight: "600",
      color: "#333",
    };

    return (
      <div style={logoStyle}>
        <svg
          style={{ transform: "rotate(6deg)" }}
          fill="#000000"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="32px"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M5,19H6v3a1,1,0,0,0,2,0V19h8v3a1,1,0,0,0,2,0V19h1a2,2,0,0,0,2-2V15a2,2,0,0,0-1.709-1.971,8.552,8.552,0,0,0,1.7-4.981A6.013,6.013,0,0,0,19.349,3.5C17.544,1.6,14.606,1,12,1s-5.551.606-7.355,2.5A6.013,6.013,0,0,0,3,8.047,8.572,8.572,0,0,0,4.7,13.03,2,2,0,0,0,3,15v2A2,2,0,0,0,5,19Zm0-2V15H19v2ZM12,3a12.355,12.355,0,0,1,3.225.4L13.518,13H10.482L8.775,3.4A12.445,12.445,0,0,1,12,3Zm6.994,4.953A6.847,6.847,0,0,1,16.68,13H15.549l1.559-8.77a4.567,4.567,0,0,1,.793.646A4.056,4.056,0,0,1,18.994,7.953ZM6.092,4.878a4.678,4.678,0,0,1,.8-.65L8.451,13H7.313A6.852,6.852,0,0,1,5,7.953,4.06,4.06,0,0,1,6.092,4.878Z"></path>
          </g>
        </svg>

        <span>Ugly Chairs</span>
      </div>
    );
  }

  function NavList() {
    const navListStyle = {
      fontSize: "18px",
    };

    return (
      <div style={navListStyle}>
        <ul className="nav-list">
          <li>
            <a>Our Chairs 🪑</a>
          </li>
          <li>
            <a>Our Customers 👩🏽‍🤝‍👩🏽</a>
          </li>
          <li>
            <a>Bestsellers ⭐</a>
          </li>
          <li>
            <a>Current Stock 🧐</a>
          </li>
        </ul>
      </div>
    );
  }
}
