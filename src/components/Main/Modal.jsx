import { useSelector } from "react-redux";

const Modal = () => {
  const {modal} = useSelector((state)=> state.auth)
  return (
    <>
      <div
        className={`modal bg-white w-full h-full ${
          modal ? "flex" : "hidden"
        }`}
      >
        Modal
      </div>
    </>
  );
};

export default Modal;
