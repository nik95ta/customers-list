import { FC, ReactNode, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import { Button } from '../../../components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <Button type='close' onClick={onClose}>
          &#x2715;
        </Button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  );
};

export default Modal;
