import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import { MdClose } from "react-icons/md";
import { modalClose } from "../../slice/auth";
const Modal = () => {
  const { modal } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const close = () => {
    dispatch(modalClose());
  };
  return (
    <>
      <div
        className={`modal py-5 px-4 bg-white flex items-end justify-center w-full h-full ${
          modal ? "flex flex-col animating" : "display_none hidden"
        }`}
      >
        <div className="flex items-end rounded-full bg-red-600">
          <MdClose  onClick={close} className="w-8 h-8 text-white"/>
        </div>
        <div className="flex items-center justify-center w-full shadow-xl shadow-black">
          <iframe
            style={{ margin: "40px 0px" }}
            width="560"
            height="315"
            defer
            src="https://www.youtube.com/embed/RKWLu6UHryQ?si=cLV5mYuglyX0QR01"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Modal;
