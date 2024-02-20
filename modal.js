const Modal = ({
	isOpen,
	onClose,
	title = "",
	content = "",
	icon,
	buttonLabel = "x",
	style = {},
}) => {
	if (!isOpen) return null;

	return (
		<div className="modal" style={style.modal}>
			<div className="modalBody" style={style.body}>
				{icon && <img src={icon} alt="Modal Icon" />}
				<h2 style={style.title}>{title}</h2>
				<div>{content}</div>
				<button onClick={onClose} className="closeButton" style={style.button}>
					{buttonLabel}
				</button>
			</div>
		</div>
	);
};

export default Modal;
