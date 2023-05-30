import React, { useState } from "react";
import { createPortal } from 'react-dom';

import Button from "../../components/Button";
import Modal from "../../components/Modal";


export default function Modals() {
  const [open, setOpen] = useState(false);
  const clickOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="container grid px-6 mx-auto">
      <div className="my-12">
        <Button intent="primary" onClick={clickOpen}>
          Click Modal
        </Button>
      </div>
      {/* use createPortal for modal */}
      {open
        ? createPortal(
            <Modal
              onClose={clickOpen}
            >
              <p>test</p>
            </Modal>
            ,
            document.body
          )
        : null}
    </div>
  );
}
