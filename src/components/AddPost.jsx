import { NavLink } from "react-router-dom";

function AddPost() {
  return (
    <div className="add-card">
      <form>
        <NavLink to="/posts/new">
          <button>Создать пост</button>
        </NavLink>
      </form>
    </div>
  );
}

export default AddPost;
