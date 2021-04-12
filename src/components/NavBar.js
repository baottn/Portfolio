import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <ul className="flex flex-row space-x-12 justify-center md:justify-end h-1/4">
        <li>
          <a href = '#projects'>Projects</a>
        </li>
        <li>
          <a href = '#contact'>Contact</a>
        </li>
        <li>
          <a href = 'nttb04121999.github.io/images/Bao_Nguyen_Resume.pdf'>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
