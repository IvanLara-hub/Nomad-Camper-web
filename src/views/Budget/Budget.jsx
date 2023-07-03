import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { createBudget } from "../../services/BudgetService";
import "./Budget.css";

const Budget = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const calculateTotal = (state) => {
    const camperPrice = state.camper.price;
    const extrasPrice = state.selectedExtras.reduce(
      (accumulator, extra) => accumulator + extra.price,
      0
    );
    return camperPrice + extrasPrice;
  };

  const sendBudget = () => {
    const extrasIds = state.selectedExtras.map((extra) => {
      return extra._id;
    });

    createBudget({
      camper: state.camper._id,
      selectedExtras: extrasIds,
    }).then(() => {
      navigate("/budget/sentemail");
    });
  };

  if (!state) {
    return <Navigate to="/campers" />;
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">
          Pack camperización seleccionado {state?.camper.name}
        </h3>
      </div>
      <div className="card-body">
        <div className="camper-card">
          <img
            className="camper-image"
            src={state?.camper.img}
            alt={state?.camper.name}
          />
          <div className="camper-info">
            <h4 className="camper-name">{state?.camper.name}</h4>
            <p className="camper-category">{state?.camper.category}</p>
          </div>
        </div>
        <div className="extras-card">
          {state?.selectedExtras.map((extra) => (
            <div className="extra">
              <img className="extra-image" src={extra.img} alt={extra.name} />
              <div className="extra-info">
                <h4 className="extra-name">{extra.name}</h4>
                <p className="extra-description">{extra.description}</p>
                <p className="extra-price">{extra.price}€</p>
              </div>
            </div>
          ))}
          <div className="total">
            <p>Total: {calculateTotal(state)}€</p>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <Button
          className="button"
          text="Pedir presupuesto"
          onClickFn={sendBudget}
        />
      </div>
    </div>
  );
};

export default Budget;

