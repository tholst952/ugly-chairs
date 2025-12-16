export default function CrateModal({ crate, onClose }) {
  return (
    <div className="crate-modal">
      <h2>Chairs in Your Crate</h2>
      <ul>
        {crate.map((chair) => (
          <li key={chair.id}>
            <img src={chair.image} alt={chair.name} width={60} />
            <div>
              <p>{chair.title}</p>
              <p>{chair.price}</p>
              <p className="crate-message">{chair.message}</p>
            </div>
          </li>
        ))}
      </ul>

      <button className="crate-whatever-btn" onClick={onClose}>
        Fine Whatever
      </button>
    </div>
  );
}
