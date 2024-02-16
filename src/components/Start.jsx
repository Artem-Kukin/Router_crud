import { NavLink } from "react-router-dom";

function Start() {
  return (
    <main className="container">
      <div className="add-card">
        <form>
          <NavLink to="/posts/new">
            <button>Создать пост</button>
          </NavLink>
        </form>
      </div>
    </main>
  );
}

export default Start;
