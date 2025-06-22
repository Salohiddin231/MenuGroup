import Eror from "../../assets/icons/Eror.png";
export  function Error() {
  return (
    <div className="error">
      <div className="eror_modal">
        <img src={Eror} alt="" />
        <p>Ошибка сервера</p>
      </div>
    </div>
  );
}
