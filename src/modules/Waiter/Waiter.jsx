import { useEffect, useState } from "react";
import { MdEditDocument } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import Header from "../../components/Header/Header";
import Waiter_modal from "./Waiter_item/Waiter_modal"; // Убедись, что путь правильный
import "../../assets/scss/modules/_wait.scss";

export default function Waiter() {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);


  return (
    <>
      <Header text="Официанты" />

      <section className="wait">
        <button onClick={() => setModalOpen(true)} className="wait_add">
          + Добавить Официанта
        </button>
        <button>Ali</button>

        <ul className="wait_list">
          <li className="wait_item">
            <span className="wait_span hr_lini">ID</span>
            <span className="wait_span hr_lini">Фамилия</span>
            <span className="wait_span hr_lini">Имя</span>
            <span className="wait_span hr_lini">Изменить</span>
          </li>

          <li className="wait_item">
            <p className="wait_suptitle hr_lini">#1</p>
            <p className="wait_suptitle hr_lini">Тыныбекова</p>
            <p className="wait_suptitle hr_lini">Айсулуу</p>
            <div className="wait_edi_delet">
              <button className="btn_edit hr_lini1" onClick={() => setModalOpen(true)}>
                <MdEditDocument />
              </button>
              <button className="btn_delet hr_lini1" onClick={() => setDeleteModalOpen(true)}>
                <RiDeleteBinFill />
              </button>
            </div>
          </li>
        </ul>
      </section>

      <Waiter_modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {deleteModalOpen && (
        <div className="delet_overlay2" onClick={() => setDeleteModalOpen(false)}>
          <div className="delet_modal" onClick={(e) => e.stopPropagation()}>
            <p className="delet_title">
              Вы точно уверены, что хотите удалить учётную запись?
            </p>
            <div className="delet_group">
              <button className="delet_otmen" onClick={() => setDeleteModalOpen(false)}>
                Отменить
              </button>
              <button className="delet_podver">
                Подтвердить
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
