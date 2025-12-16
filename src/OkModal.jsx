export default function OkModal({ okList, onClose }) {
  return (
    <div className="ok-modal">
      <h2>Your Chairs</h2>
      <ul>
        {okList.map((chair) => (
          <li key={chair.id}>
            <img src={chair.image} alt={chair.name} width={60} />
            <div>
              <p>{chair.title}</p>
              <p>{chair.price}</p>
              <p className="ok-message">{chair.message}</p>
            </div>
          </li>
        ))}
      </ul>

      <button onClick={onClose}>Fine Whatever</button>
    </div>
  );
}
