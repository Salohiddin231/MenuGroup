import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import TableRow from './TableItem/TableTables';
import TableModal from './TableItem/TableModal';


export default function Table() {
  const [modalOpen, setModalOpen] = useState(false);

  const tableData = [
    { number: '№2', cabin: 'VIP', seats: 5, status: 'available' },
    { number: '№2', cabin: 'VIP', seats: 5, status: 'available' },
    { number: '№2', cabin: 'VIP', seats: 5, status: 'available' },
    { number: '№2', cabin: 'VIP', seats: 5, status: 'available' },
    { number: '№2', cabin: 'VIP', seats: 5, status: 'available' },
    { number: '№2', cabin: 'VIP', seats: 5, status: 'available' },
    { number: '№2', cabin: 'VIP', seats: 5, status: 'available' },
    { number: '№2', cabin: 'VIP', seats: 5, status: 'available' },
    { number: '№2', cabin: 'VIP', seats: 5, status: 'available' },
    { number: '№2', cabin: 'VIP', seats: 5, status: 'available' },
  ];

 

  return (
    <>
      <Header text={'Столы'} />
      <section className="tab">
        <div className="tab_wrapper">
          <div className="table_btn">
            <button onClick={() => setModalOpen(true)}>+ Добавить стол</button>
          </div>
          <div className="tab_table">
            <table className="table_item">
              <thead>
                <tr>
                  <td>Номер стола</td>
                  <td>Кабинка</td>
                  <td>Места</td>
                  <td>Статус</td>
                  <td>Изменить</td>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <TableRow
                    key={index}
                    number={item.number}
                    cabin={item.cabin}
                    seats={item.seats}
                    status={item.status}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <TableModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </section>
    </>
  );
}
