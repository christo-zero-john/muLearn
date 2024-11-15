function AddItem({ list, setList }) {
  function AddNewItem() {
    let item = document.getElementById("get-item").value;
    console.log("Adding New Item to list: ", item);
    if (item.length <= 10) {
      window.alert("Item should contain atleast 10 characters");
    } else {
      setList([...list, item]);
    }
  }

  return (
    <div className="p-3">
      <input
        type="text"
        className=""
        id="get-item"
        placeholder="Enter todo item"
      />
      <button
        className="m-2 p-1 px-3 btn btn-outline-success"
        onClick={AddNewItem}
      >
        +
      </button>
    </div>
  );
}

export default AddItem;
