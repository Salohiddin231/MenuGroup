import React from "react";

export function OrderModal({ open, onClose }) {
  if (!open) return null;
  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <form className="Order_modal" onClick={(e) => e.stopPropagation()}>
        <div className="left_right">
          <div className="left">
            <div className="inp">
              <i>Номер стола</i>
              <input type="text" />
            </div>
            <div className="inp2">
              <i>Официант</i>
              <input type="text" />
            </div>
          </div>
          <div className="inp">
            <i>Кабинка</i>
            <input type="text" />
          </div>
        </div>
        <div className="inp2">
          <i>Заказы</i>
          <input className="inp1" type="text" />
        </div>

        <div className="btns">
          <button className="btn1">Сохранить</button>
          <button className="btn2">Рассчитать</button>
        </div>
      </form>
    </>
  );
}
