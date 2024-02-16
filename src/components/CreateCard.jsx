import { useState } from "react";
import { NavLink } from "react-router-dom";

function CreateCard({ expand }) {
  const [comment, setComment] = useState();
  return (
    <main className="container">
      <div className="create-card">
        <div className="create-card_title">
          <div>Публикация</div>
          <div>Фото/видео</div>
          <div>Прямой эфир</div>
          <div>Ещё</div>

          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/posts"
          >
            <div>❌Выйти</div>
          </NavLink>
        </div>
        <div className="create-card_post">
          <img src="../img/chelovek.jpg" alt="user-foto" />
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Введите содержание поста"
          />
        </div>

        <NavLink to="/posts">
          <button
            onClick={(e) => {
              if (comment && comment.trim()) {
                expand(comment.trim());
              } else {
                e.preventDefault();
              }
              setComment("");
            }}
          >
            Опубликовать
          </button>
        </NavLink>
      </div>
    </main>
  );
}

export default CreateCard;
