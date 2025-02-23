import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import styles from "./modal.module.css";

export default function Modal({ isOpen, onClose, content }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className={styles.dialogOverlay}>
        <DialogPanel className={styles.dialogPanel}>
          <button className={styles.dialogButton} onClick={onClose}>
            X
          </button>
          {content && (
            <>
              <div className={styles.dialogContent}>
                <div>
                  <DialogTitle className={styles.dialogTitle}>
                    <img
                      src={"/" + content.icon}
                      width={content.iconSize}
                      height={content.iconSize}
                    />
                    <h2>{content.title}</h2>
                  </DialogTitle>
                  <Description className={styles.dialogDescription}>
                    <p>{content.description}</p>
                  </Description>
                </div>
                <img src={content.image} className={styles.dialogPhoto} />
              </div>
            </>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
