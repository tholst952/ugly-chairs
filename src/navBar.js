import { useState, useEffect } from "react";

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

  function NavList() {
    return (
      <div>
        <ul className="nav-list">
          <li>
            <a href="#bestsellers">
              Bestsellers{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="nav-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#our-chairs">
              Our Chairs{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="nav-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#current-stock">
              Current Stock{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="nav-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#our-customers">
              Our Customers{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="nav-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
            </a>
          </li>
          <li>
            <button>
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
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
