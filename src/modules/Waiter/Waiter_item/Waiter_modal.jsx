import { FaUser } from "react-icons/fa";

export default function Waiter_modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const stopProp = (e) => e.stopPropagation();

  return (
    <div className="modal_overlay2" onClick={onClose}>
      <div className="modal_content2 big" onClick={stopProp}>
        <div className="modal_header">
          <div className="photo_upload">
            <div className="photo_circle"><FaUser className="user_icon" /></div>
            <button className="photo_btn">Добавить фото</button>
          </div>
        </div>

        <div className="modal_form2">
          <div className="form_column">
            <label>Имя</label>
            <input type="text" placeholder="Саша" />

            <label>Номер телефона</label>
            <input type="text" placeholder="+996 722 220 555" />

            <label>Роль</label>
            <input type="text" placeholder="Официант" />
          </div>

          <div className="form_column">
            <label>Фамилия</label>
            <input type="text" placeholder="Сергеев" />

            <label>Пароль</label>
            <input type="password" placeholder="Password123" />
          </div>

          <p className="close" onClick={onClose}>&times;</p>
        </div>

        <div className="modal_buttons bottom">
          <button className="btn_save">Сохранить</button>
          <button className="btn_delete">Удалить</button>
        </div>
      </div>
    </div>
  );
}
