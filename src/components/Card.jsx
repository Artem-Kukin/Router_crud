import { NavLink } from "react-router-dom";

function Card({ card, func }) {
  return (
    <div className="user-card">
      <div className="user-card_title">
        <img className="user-foto" src="./img/chelovek.jpg" alt="user-foto" />
        <div className="user-name">
          <NavLink to={`/posts/${card.id}`}>
            <h3 style={{ cursor: "pointer" }} onClick={() => func(card)}>
              Name (нажмите, чтобы посмотреть)
            </h3>
          </NavLink>

          <p>
            Status <span>online time</span>
          </p>
        </div>

        <div>↓</div>
      </div>
      <div className="message">
        <h4>Ваше сообщение: {card.content}</h4>
        <div className="user-card_reaction">
          <div>👍 Нравится</div>
          <div>📢 Комментировать</div>
        </div>
      </div>

      <div className="user-card_comments">
        <img src="./img/chelovek.jpg" alt="user-foto" />
        <input placeholder="Написать комментарий" type="text" />
        <div>😀</div>
        <div>📷</div>
        <div>📼</div>
        <div>📜</div>
      </div>
    </div>
  );
}

export default Card;
