import AddPost from "./AddPost";
import Card from "./Card";

function Crud({ state, func }) {
  return (
    <>
      <main className="container">
        <AddPost />
        {state.map((card) => {
          return <Card key={card.id} card={card} func={func} />;
        })}
      </main>
    </>
  );
}

export default Crud;
