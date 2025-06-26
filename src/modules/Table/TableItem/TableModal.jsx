import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

export default function TableModal({ isOpen, onClose }) {
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    if (isOpen) {
      // QR-code matni: bu yerda siz istagancha o‘zgartirishingiz mumkin
      QRCode.toDataURL('Стол №2 | Кабинка: VIP | Места: 5')
        .then(url => setQrCode(url))
        .catch(err => console.error(err));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.2)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className="modal-content"
        style={{
          background: '#fff',
          borderRadius: 20,
          padding: 32,
          display: 'flex',
          gap: 32,
          position: 'relative',
          minWidth: 500,
        }}
      >
        <div
          className="modal-qr-section"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              background: '#fff',
              padding: 8,
              borderRadius: 16,
              boxShadow: '0 0 8px #eee',
            }}
          >
            {qrCode ? (
              <img
                src={qrCode}
                alt="QR Code"
                style={{ width: 180, height: 180 }}
              />
            ) : (
              <p>Загрузка QR...</p>
            )}
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
            <button className="tab_iconnnn">
              <span>▶</span>
            </button>
            <button className="tab_iconnnn">
              <span>⟳</span>
            </button>
          </div>
        </div>

        <div
          className="modal-form-section"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            minWidth: 220,
          }}
        >
          <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            Номер стола
            <input
              type="text"
              value="№2"
              readOnly
              style={{
                padding: 8,
                borderRadius: 8,
                border: '1px solid #eee',
              }}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            Кабинка
            <input
              type="text"
              value="VIP"
              readOnly
              style={{
                padding: 8,
                borderRadius: 8,
                border: '1px solid #eee',
              }}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            Места
            <input
              type="number"
              value={5}
              readOnly
              style={{
                padding: 8,
                borderRadius: 8,
                border: '1px solid #eee',
              }}
            />
          </label>
          <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
            <button
              className="modal-save"
              style={{
                background: '#000',
                color: '#fff',
                borderRadius: 50,
                padding: '12px 32px',
                fontWeight: 700,
              }}
            >
              Сохранить
            </button>
            <button
              className="modal-delete"
              style={{
                background: 'none',
                color: '#e6571c',
                border: '1px solid #e6571c',
                borderRadius: 50,
                padding: '12px 32px',
                fontWeight: 700,
              }}
            >
              Удалить
            </button>
          </div>
        </div>

        <button
          className="modal-close"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 12,
            right: 16,
            fontSize: 28,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
