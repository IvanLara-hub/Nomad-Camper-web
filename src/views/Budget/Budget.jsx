import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import AuthContext from "../../contexts/AuthContext";
import { createBudget } from "../../services/BudgetService";

const Budget = () => {
  const { state } = useLocation();
  const { currentUser } = useContext(AuthContext);
  () => {};
  const sendBudget = () => {
    createBudget({
      camper: state.camper._id,
      selectedExtras: state.selectedExtras.map((extra) => {
        return extra._id;
      }),
      user: currentUser.id,
    });
  };

  if (!state) {
    return <Navigate to="/campers" />;
  }

  return (
    <div>
      <div>camper que has comprado {state?.camper.name}</div>
      <Button text="Pedir presupuesto" onClickFn={sendBudget} />
    </div>
  );
};

export default Budget;
