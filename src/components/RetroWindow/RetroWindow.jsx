import './RetroWindow.css';

function RetroWindow({ title, children }) {
  return (
    <div className="window">
      <div className="window-header">
        <span>{title}</span>

        <div className="window-buttons">
          <button><i class="fa-solid fa-minus"></i></button>
          <button><i class="fa-regular fa-square"></i></button>
          <button className="close"><i class="fa-solid fa-xmark"></i></button>
        </div>
      </div>

      <div className="window-body">{children}</div>
    </div>
  );
}

export default RetroWindow;
