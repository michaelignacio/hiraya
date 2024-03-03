import React from 'react';

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ isOpen, onClose }) => {
  return isOpen ? (
    <div
      className="fixed inset-0 bg-black opacity-50 z-40"
      onClick={onClose}
    ></div>
  ) : null;
};

export default Overlay;
