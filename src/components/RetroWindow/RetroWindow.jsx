import './RetroWindow.css';

function RetroWindow({ title, children }) {
  return (
    <div className="window">
      <div className="window-header">
        <span>{title}</span>

        <div className="window-buttons">
          <button></button>
          <button></button>
          <button className="close"></button>
        </div>
      </div>

      <div className="window-body">{children}</div>
    </div>
  );
}

export default RetroWindow;
