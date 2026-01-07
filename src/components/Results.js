import React from "react";

function Results({ result }) {
  if (!result) return <h3>The field is empty</h3>;

  if (result === 'low') {
    return <h3 className="text-warning">Your guess is Low</h3>;
  }

  if (result === 'high') {
    return <h3 className="text-danger">Your guess is High</h3>;
  }

  return <h3 className="text-success">Correct 🎉</h3>;
}

export default Results;

