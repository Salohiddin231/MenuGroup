import React, { useState } from "react";
import StuffUpdate from '../../assets/svg/StuffUpdate.svg';
import StuffTable from './StuffItem/StuffTable';
import Header from '../../components/Header/Header';
import StuffAddModal from './StuffItem/StuffAddModal';
import StuffEditModal from './StuffItem/StuffEditModal';

export default function Stuff() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const openEditModal = () => setShowEditModal(true);

  return (
    <>
      <Header text={'Товары'} />
      <section className="stuff">
        <div className="container">
          <div className="stuff_wrapper">
            <div className="stuff_head">
              <button className="stuff_btn" onClick={() => setShowAddModal(true)}>
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
                    <th>Действия</th>
                  </tr>
                </thead>
                <tbody>
                  <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} onEdit={openEditModal} />
                  <StuffTable classes={"status absent"} num={"#1"} names={"Филе-Миньон"} slock={"Не наличии"} price={"1500с"} fotoupdate={StuffUpdate} onEdit={openEditModal} />
                  <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} onEdit={openEditModal} />
                  <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} onEdit={openEditModal} />
                  <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} onEdit={openEditModal} />
                  <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} onEdit={openEditModal} />
                  <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} onEdit={openEditModal} />
                  <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} onEdit={openEditModal} />
                  <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} onEdit={openEditModal} />
                  <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} onEdit={openEditModal} />
                  <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} onEdit={openEditModal} />
                  <StuffTable classes={"status available"} num={"#1"} names={"Филе-Миньон"} slock={"В наличии"} price={"1500с"} fotoupdate={StuffUpdate} onEdit={openEditModal} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {showAddModal && <StuffAddModal onClose={() => setShowAddModal(false)} />}
      {showEditModal && <StuffEditModal onClose={() => setShowEditModal(false)} />}
    </>
  );
}
