import * as bootstrap from 'bootstrap'; 
import { forwardRef, useImperativeHandle, useRef, type FormEvent } from 'react';
import type { Ref } from 'react';

export interface ModalHandlers {
  show: () => void;
  hide: () => void;
}

interface ModalProps {
  onLogin: (name: string) => void;
}

const Modal = forwardRef<ModalHandlers, ModalProps>(({ onLogin }, ref: Ref<ModalHandlers>) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useImperativeHandle(ref, () => ({
    show: () => {
      if (modalRef.current) {
        const modal = new bootstrap.Modal(modalRef.current);
        modal.show();
      }
    },
    hide: () => {
      if (modalRef.current) {
        const modal = bootstrap.Modal.getInstance(modalRef.current);
        if (modal) modal.hide();
      }
    }
  }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = form.querySelector('#nameInput') as HTMLInputElement;
    const name = nameInput.value;
    onLogin(name);
    
    if (modalRef.current) {
      const modal = bootstrap.Modal.getInstance(modalRef.current);
      if (modal) modal.hide();
    }
  };

  return (
    <div 
      className="modal fade" 
      id="loginModal" 
      tabIndex={-1}
      ref={modalRef}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">Имя</label>
                <input type="text" className="form-control" id="nameInput" required />
              </div>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email</label>
                <input type="email" className="form-control" id="emailInput" required />
              </div>
              <div className="d-flex justify-content-end gap-2">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
                <button type="submit" className="btn btn-primary">OK</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Modal;