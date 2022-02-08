const Menu = () => {
  return (
    <div className="burger" style={{padding:"8px 16px",marginRight:"12px", position:"fixed", zIndex:"1", top:"0", right:"0", background:"white"}}>
        <p style={{fontWeight:"34px"}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30.86"
        height="36"
        fill="black"
        class="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
      </p>
    </div>
  );
};

export default Menu;
