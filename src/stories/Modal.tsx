interface ModalType {
  props: { title: string; context: string };
}

const Modal = ({ props: { title, context } }: ModalType) => {
  return (
    <>
      <div className="w-[200px] h-[50px] absolute z-20 inset-0">
        <h2>{title}</h2>
        <div>{context}</div>
      </div>
    </>
  );
};

export default Modal;
