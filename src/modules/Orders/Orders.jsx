import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { MdEditDocument } from "react-icons/md";
import { OrderModal } from "./Components/OrderModal";
export default function Orders() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <>
      <Header text={"Заказы"} />
      <section className="ord">
        <div className="container">
          <OrderModal open={isModalOpen} onClose={handleCloseModal} />
          <ul>
            <li>
              <div className="card_left_right">
                <p>Официант</p>
                <button onClick={handleOpenModal}>Новый заказ</button>
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
                <button className="edit" onClick={handleOpenModal}>
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
