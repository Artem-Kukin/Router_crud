import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Crud from "./components/Crud";
import CreateCard from "./components/CreateCard";
import ViewCard from "./components/ViewCard";
import Start from "./components/Start";
const url = "http://localhost:7070";

function App() {
  const [cards, setCards] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const [cardActive, setCardActive] = useState({});

  useEffect(() => {
    if (isLoader) {
      fetch(url + "/posts")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCards(data);
        });
    }
    setIsLoader(false);
  }, [isLoader]);

  function addCard(props) {
    if (props) {
      fetch(url + "/posts", {
        method: "POST",
        body: JSON.stringify({
          content: props,
        }),
      });
      setIsLoader(true);
    }
  }
  function updateContent(props, id) {
    if (props) {
      fetch(url + `/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          content: props,
        }),
      });
    }
    setIsLoader(true);
  }

  function deleteCard(id) {
    fetch(url + `/posts/${id}`, {
      method: "DELETE",
    });
    setIsLoader(true);
  }

  function viewCard(card) {
    setCardActive(card);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/posts" element={<Crud state={cards} func={viewCard} />} />

        <Route path="/posts/new" element={<CreateCard expand={addCard} />} />

        <Route
          path={`/posts/:id`}
          element={
            <ViewCard
              updateContent={updateContent}
              cardActive={cardActive}
              func={deleteCard}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
