function AddItem({ list, setList }) {
  function AddNewItem() {
    class ListItem {
      constructor(value) {
        this.todo = value;
        this.done = 0;
        this.count = 0;
      }
    }

    let item = new ListItem(document.getElementById("get-item").value);

    console.log("Adding New Item to list: ", item);
    if (item.todo.length <= 3) {
      window.alert("Item should contain atleast 3 characters");
    } else {
      setList([...list, item]);
    }
  }

  return (
    <div className="p-3">
      <input
        type="text"
        className="bg-dark text-light border-0 border-bottom"
        id="get-item"
        placeholder="Enter todo item"
      />
      <button
        className="m-2 p-0 fs-1 px-3 btn btn-outline-success"
        onClick={AddNewItem}
      >
        +
      </button>
    </div>
  );
}

export default AddItem;
