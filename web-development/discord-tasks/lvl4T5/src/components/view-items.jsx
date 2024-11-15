function ViewItems({ list, setList }) {
  function handleDelete(index) {
    let temp = [...list];
    temp.splice(index, 1);
    setList(temp);
  }
  function handleDone(index) {
    let temp = [...list];
    temp[index].done = 1;
    setList(temp);
  }
  function handleRedoTask(index) {
    let temp = [...list];
    temp[index].done = 0;
    temp[index].count++;
    setList(temp);
  }
  return (
    <div className="">
      {list.map((item, index) => {
        return (
          <div className="border w-fit p-3 my-2 rounded mx-auto" key={index}>
            <p className="d-inline-block">{item.todo}</p>
            <button
              className="btn btn-danger mx-3 d-inline-block"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
            {(!item.done && (
              <button
                className="btn btn-success mx-3 d-inline-block"
                onClick={() => handleDone(index)}
              >
                Done
              </button>
            )) || (
              <button
                className="btn btn-primary mx-3 d-inline-block"
                onClick={() => handleRedoTask(index)}
              >
                Redo
              </button>
            )}
            <p className="small text-secondary pt-2">
              Task completed {item.count} times
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ViewItems;
