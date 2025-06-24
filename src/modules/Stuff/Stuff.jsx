import StuffUpdate from '../../assets/svg/StuffUpdate.svg'
import React, { useState } from "react";
import AddStuffImg from '../../assets/svg/AddStuff.svg'
import StuffTable from './StuffItem/StuffTable'
import Header from '../../components/Header/Header'

function StuffModal({ onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal_overlay')) {
      onClose();
    }
  };
  return (
    <>
      <div className="modal_overlay" onClick={handleOverlayClick}>
        <div className="modal_content">
          <div className="modal_wrapper">
            <div className="modal_wrap1">
              <div className="modal_bg">
                <img src={AddStuffImg} alt="" />
              </div>
              <button className="modal_addfoto">+ Добавить фото товара</button>
            </div>
            <div className="modal_wrap2">
              <p>Выберите</p>
              <div className="modal_btn_wrap">
                <button className="modal_btn1">Нету в наличии</button>
                <button className="modal_btn2">В наличии</button>
              </div>
              <div className="modal_input_wrap">
                <div className="modal_inp_wrap1">
                  <label htmlFor="">Название</label>
                  <input type="text" placeholder="Введите название " />
                </div>
                <div className="modal_inp_wrap2">
                  <label htmlFor="">Цена </label>
                  <input type="text" placeholder="Введите цену " />
                </div>
                <div className="modal_inp_wrap3">
                  <label htmlFor="">Категория</label>
                  <input type="text" placeholder="Введите категорию " />
                </div>
              </div>
            </div>
          </div>
          <div className="modal_wrapper2">
            <div className="modal_inp_wrap1">
              <label htmlFor="">Описание</label>
              <input type="text" placeholder="Напишите описание" />
            </div>
            <div className="modal_inp_wrap2">
              <label htmlFor="">Ингредиенты</label>
              <input type="text" placeholder="1." />
            </div>
          </div>
          <div className="modal_btn_wrapper">
            <button className="modal_btn1">Добавить</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default function Stuff() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header text={'Товары'} />
      <section className="stuff">
        <div className="container">
          <div className="stuff_wrapper">
            <div className="stuff_head">
              <button className="stuff_btn" onClick={() => setShowModal(true)}>
                + Добавить товар
              </button>
            </div>
            <div className="stuff_table">
              <table className="stuff_table_item">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Статус</th>
                    <th>Цена</th>
                    <th>Изменить</th>
                  </tr>
                </thead>
                <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} />
                <StuffTable classes={"status absent"} num={"#1"} names={"Филе-Миньон"} slock={"Не наличии"} price={"1500с"} fotoupdate={StuffUpdate} />
                <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} />
                <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} />
                <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} />
                <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} />
                <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} />
                <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} />
                <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} />
                <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} />
                <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} />
                <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} />
              </table>
            </div>
          </div>
        </div>
      </section>
      {showModal && <StuffModal onClose={() => setShowModal(false)} />}
    </>
  );
}