import Headline from "@/components/Headline";

const Kanban: React.FC = () => {
  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const drag = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", e.currentTarget.id);
  };

  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text");
    const task = document.getElementById(taskId);
    if (task && e.currentTarget instanceof HTMLElement)
      e.currentTarget.appendChild(task);
  };

  return (
    <div>
      <Headline title="Kanban board" subtitle="Track your projects" />
      <div
        id="app"
        className="flex justify-between p-10 bg-orange-700 m-10 rounded-md shadow"
      >
        <div
          className="column bg-gray-100 p-4 rounded mr-4 text-center flex-1"
          id="todo-column"
          onDrop={drop}
          onDragOver={allowDrop}
        >
          <h2 className="text-lg font-bold mb-2 border-b-2">To Do</h2>
          <div id="todo-tasks">
            <div
              className="task bg-white p-2 mb-2 rounded shadow"
              draggable
              onDragStart={drag}
              id="task1"
            >
              Task 1
            </div>
            <div
              className="task bg-white p-2 mb-2 rounded shadow"
              draggable
              onDragStart={drag}
              id="task2"
            >
              Task 2
            </div>
            <div
              className="task bg-white p-2 mb-2 rounded shadow"
              draggable
              onDragStart={drag}
              id="task3"
            >
              Task 3
            </div>
          </div>
        </div>
        <div
          className="column bg-gray-100 p-4 rounded mr-4 text-center flex-1"
          id="in-progress-column"
          onDrop={drop}
          onDragOver={allowDrop}
        >
          <h2 className="text-lg font-bold mb-2 border-b-2">In Progress</h2>
          <div id="in-progress-tasks"></div>
        </div>
        <div
          className="column bg-gray-100 p-4 rounded mr-4 text-center flex-1"
          id="review-column"
          onDrop={drop}
          onDragOver={allowDrop}
        >
          <h2 className="text-lg font-bold mb-2 border-b-2">Review</h2>
          <div id="review-tasks"></div>
        </div>
        <div
          className="column bg-gray-100 p-4 rounded text-center flex-1"
          id="done-column"
          onDrop={drop}
          onDragOver={allowDrop}
        >
          <h2 className="text-lg font-bold mb-2 border-b-2">Done</h2>
          <div id="done-tasks"></div>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
