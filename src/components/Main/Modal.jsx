import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import { modalClose } from "../../slice/auth";
const Modal = () => {
  const { modal } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const close = () => {
    dispatch(modalClose());
  };
  return (
    <>
      <div
        className={`modal py-5 px-4 bg-white w-full h-full ${modal ? "flex flex-col animating" : "display_none hidden"}`}
      >
        <div className="flex items-end">
          <Button text={"close"} click={close}  />
        </div>
        <div className="flex items-center justify-center w-full">
          <iframe
            style={{margin:"40px 0px"}}
            width="560"
            height="315"
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
