import React, { useState } from "react";
import AddStuffImg from '../../../assets/svg/AddStuff.svg';

export default function StuffEditModal({ onClose }) {
  const [status, setStatus] = useState("absent");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal_overlay')) {
      onClose();
    }
  };

  const handleSave = () => {
    // Локальная обработка данных, например, console.log или отправка на сервер
    console.log({ name, price, category, description, ingredients, status });
    onClose();
  };

  const handleDelete = () => {
    // Локальная обработка удаления
    console.log("Удалить товар");
    onClose();
  };

  return (
    <div className="modal_overlay" onClick={handleOverlayClick}>
      <div className="modal_content" onClick={e => e.stopPropagation()}>
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
              <button
                className={`modal_btn1 ${status === "absent" ? "active" : ""}`}
                onClick={() => setStatus("absent")}
              >
                Нету в наличии
              </button>
              <button
                className={`modal_btn2 ${status === "available" ? "active" : ""}`}
                onClick={() => setStatus("available")}
              >
                В наличии
              </button>
            </div>
            <div className="modal_input_wrap">
              <div className="modal_inp_wrap1">
                <label>Название</label>
                <input
                  type="text"
                  placeholder="Введите название"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="modal_inp_wrap2">
                <label>Цена</label>
                <input
                  type="text"
                  placeholder="Введите цену"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
              <div className="modal_inp_wrap3">
                <label>Категория</label>
                <input
                  type="text"
                  placeholder="Введите категорию"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="modal_wrapper2">
          <div className="modal_inp_wrap1">
            <label>Описание</label>
            <input
              type="text"
              placeholder="Напишите описание"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div className="modal_inp_wrap2">
            <label>Ингредиенты</label>
            <input
              type="text"
              placeholder="1."
              value={ingredients}
              onChange={e => setIngredients(e.target.value)}
            />
          </div>
        </div>

        <div className="modal_btn_wrapper">
          <button className="modal_btn1" onClick={handleSave}>Сохранить</button>
          <button className="modal_btn2" onClick={handleDelete}>Удалить</button>
        </div>
      </div>
    </div>
  );
}
