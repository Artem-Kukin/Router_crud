import { NavLink } from "react-router-dom";
import EditEntry from "./EditEntry";
import { useState } from "react";

function ViewCard({ cardActive, func, updateContent }) {
  const [statusCard, setStatusCard] = useState(true);
  if (statusCard) {
    return (
      <main className="container">
        <div className="user-card">
          <div className="user-card_title">
            <img
              className="user-foto"
              src="./img/chelovek.jpg"
              alt="user-foto"
            />
            <div className="user-name">
              <h3>Name</h3>
              <p>
                Status <span>online time</span>
              </p>
            </div>

            <div>↓</div>
          </div>
          <div className="message">
            <h3>{cardActive.content}</h3>
            <div className="user-card_reaction">
              <div>👍 Нравится</div>
              <div>📢 Комментировать</div>
            </div>
          </div>
          <div className="user-card_edit">
            <button
              onClick={() => {
                setStatusCard(false);
              }}
            >
              Изменить
            </button>

            <NavLink to="/posts">
              <button
                onClick={() => {
                  func(cardActive.id);
                }}
              >
                Удалить
              </button>
            </NavLink>
          </div>
        </div>
      </main>
    );
  } else {
    return <EditEntry updateContent={updateContent} cardActive={cardActive} />;
  }
}

export default ViewCard;
