import { useState } from "react";
import { NavLink } from "react-router-dom";

function EditEntry({ cardActive, setStatusCard, updateContent }) {
  const [cardNewContent, setCardNewContent] = useState(cardActive.content);

  return (
    <main className="container">
      <div className="edit-entry">
        <div className="edit-entry_content">
          <div className="edit-entry_title">
            <h2>Редактировать публикацию</h2>
            <div onClick={() => setStatusCard(true)}>❌</div>
          </div>
          <div className="edit-entry_post">
            <img src="./img/chelovek.jpg" alt="user-foto" />

            <input
              type="text"
              value={cardNewContent}
              onChange={(e) => setCardNewContent(e.target.value)}
            />

            <div>😀</div>
          </div>
          <div className="edit-entry_reaction">
            <div>Фото/видео</div>
            <div>Отметить друзей</div>
            <div>Чувства/действия</div>
            <div>Отметить посещение</div>
            <div>GIF</div>
          </div>
          <div className="edit-entry_save">
            <NavLink to="/posts">
              <button
                onClick={() => {
                  setCardNewContent(cardNewContent);
                  updateContent(cardNewContent, cardActive.id);
                }}
              >
                Сохранить
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EditEntry;
