import React, { useEffect, useState } from 'react';


const PopUp = () => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const createCookie = () => {
      let maxAge = ';max-age=10';
      let path = ';path=/';
      document.cookie = 'modalpopup=displayed' + maxAge + path;
    };

    const displayModal = () => {
      if (document.cookie.indexOf('modalpopup') === -1) {
        setModalVisible(true);
        createCookie();
      }
    };

    const timer = setTimeout(() => {
      displayModal();
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      {modalVisible && (
        <div className="modal__overlay" />
      )}
      <div className={`modal ${modalVisible ? 'active' : ''}`}>
        <div className="modal__close-btn" onClick={closeModal}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="modal__left">
          <p>Special<span>Sale</span></p>
          <div className="modal__discount">
            <p>Save up to<span>45%</span></p>
          </div>
        </div>
        <div className="modal__right">
          <p className="modal__text">
            Get access to the <br />
            best books on designing
          </p>
          <p className="modal__info">Click below</p>
          <a className="modal__button" onClick={closeModal}>
            Get Discount
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopUp;