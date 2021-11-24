const foo = () => {
  return (dispatch) => {
    dispatch({
      type: "SETDATA",
      payload: { user: "muhammad ali", name4: "khan", name5: "ahmed" },
    });
  };
};

export default foo;
