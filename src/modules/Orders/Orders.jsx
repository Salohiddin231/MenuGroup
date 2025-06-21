import React from "react";
import Header from "../../components/Header/Header";
import { MdEditDocument } from "react-icons/md";
export default function Orders() {
  return (
    <>
      <Header text={"Заказы"} />
      <section className="ord">
        <div className="container">
          <ul>
            <li>
              <div className="card_left_right">
                <p>Официант</p>
                <button>Новый заказ</button>
              </div>
              <h3>Заказ стол №22 </h3>
              <h4>VIP кабинка </h4>

              <div className="card_item">
                <p>1 x Пицца пепперони</p>
                <p>2 x Кола 1л</p>
                <p>1 x Саллад цезарь</p>
              </div>

              <div className="btns">
                <button className="btn2">Принять</button>
                <button className="edit">
                  <MdEditDocument className="icon" />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
