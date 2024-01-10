import { IconButton, LinearProgress, Modal } from "@mui/material";
import style from "./requestDetailModal.module.scss";
import { Close } from "@mui/icons-material";
const RequestDetailModal = ({ open, onClose, request }) => {
  if (!request) return <LinearProgress />;

  return (
    <Modal open={open} onClose={onClose}>
      <div className={style.modal}>
        <h1>
          جزییات درخواست شماره <strong>{request.id}</strong>
        </h1>
        <div className={style.columns}>
          <div className={style.keys}>
            <span className={style.label}>عنوان</span>
            <span className={style.label}>کاربر</span>
            <span className={style.label}>تاریخ</span>
            <span className={style.label}>توضیحات</span>
          </div>
          <div className={style.values}>
            <span className={style.value}>{request.title}</span>
            <span className={style.value}>{request.user}</span>
            <span className={style.value}>{request.date}</span>
            <span className={style.value} style={{ lineHeight: "1.5rem" }}>
              {request.description}
            </span>
          </div>
        </div>
        <IconButton className={style.closeBtn} onClick={onClose}>
          <Close></Close>
        </IconButton>
      </div>
    </Modal>
  );
};

export default RequestDetailModal;
