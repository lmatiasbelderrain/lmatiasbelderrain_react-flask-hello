export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      },
    ],
    profile: {},
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_hello":
      return {
        ...store,
        message: action.payload,
      };

    case "add_task":
      const { id, color } = action.payload;

      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        ),
      };
    case "profile":
      return {
        ...store,
        profile: action.payload,
      };
    default:
      throw Error("Unknown action.");
  }
}
export const login = async (usuario, dispatch) => {
  try {
    const response = await fetch(
      "https://psychic-halibut-v6rq94w4xqxg2xwqw-3001.app.github.dev/api/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario),
      }
    );
    if (response.status == 200) {
      const data = await response.json();
      console.log(data);
      localStorage.setItem("token", data.access_token);
      dispatch({
        type: "profile",
        payload: data.user,
      });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
