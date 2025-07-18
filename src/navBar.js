import { useState, useEffect } from "react";
import { icons } from "./icons.js";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="nav-bar">
      <Logo />
      {isMobile ? (
        isModalOpen ? (
          <>
            <div
              className="modal-overlay"
              onClick={() => setIsModalOpen(false)}
            />
            <NavListModal onClose={() => setIsModalOpen(false)} />
          </>
        ) : (
          <NavListBtn onClick={() => setIsModalOpen(true)} />
        )
      ) : (
        <NavList />
      )}
    </nav>
  );

  function Logo() {
    return (
      <div className="logo">
        <svg
          style={{ transform: "rotate(6deg)" }}
          fill="#333"
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

  function NavListBtn({ onClick }) {
    return (
      <button className="nav-list-btn" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
        </svg>
      </button>
    );
  }

  function NavListModal({ onClose }) {
    return (
      <div className="nav-list-modal">
        <ul className="modal-list">
          <li>Bestsellers</li>
          <li>Our Chairs</li>
          <li>Current Stock</li>
          <li>Our Customers</li>
        </ul>
      </div>
    );
  }

  function NavList({}) {
    return (
      <div>
        <ul className="nav-list">
          <li>
            <a href="#bestsellers">Bestsellers {icons.trophy}</a>
          </li>
          <li>
            <a href="#our-chairs">Our Chairs {icons.documentCheck}</a>
          </li>
          <li>
            <a href="#current-stock">Current Stock {icons.stackedRectangles}</a>
          </li>
          <li>
            <a href="#our-customers">Our Customers {icons.users}</a>
          </li>
          <li>
            {/* <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="cart-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </button> */}
          </li>
        </ul>
      </div>
    );
  }
}
