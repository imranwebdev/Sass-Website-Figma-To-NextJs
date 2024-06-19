"use client";

interface VideoModalProps {
  show: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div style={modalStyle} className="">
      <div style={modalContentStyle} className="m-10 md:m-0 w-[80%]">
        <button style={closeButtonStyle} onClick={onClose}>
          ×
        </button>
        <iframe
          className="w-full h-[250px]   md:w-[560px] md:h-[315px]"
          src="https://www.youtube.com/embed/ZK-rNEhJIDs"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const modalStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyle: React.CSSProperties = {
  position: "relative",
  backgroundColor: "#fff",
  padding: "50px 10px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const closeButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "none",
  border: "none",
  fontSize: "24px",
  cursor: "pointer",
};

export default VideoModal;
