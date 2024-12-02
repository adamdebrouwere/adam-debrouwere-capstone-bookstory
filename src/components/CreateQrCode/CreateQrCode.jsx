import "./CreateQrCode.scss";
import QrCode from "qrcode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CreateQrCode({ qrCodeUrl, setQrCodeUrl, qrCodeId, showQr }) {
  const navigate = useNavigate();

  const generateQrCode = async (data) => {
    try {
      const qrCodeImageUrl = await QrCode.toDataURL(data);
      setQrCodeUrl(qrCodeImageUrl);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  useEffect(() => {
    if (qrCodeId) {
      generateQrCode(`http://localhost:5173/comments/${qrCodeId}`);
    }
  }, [qrCodeId]);

  function handlePrintQrCode() {
    if (qrCodeId) {
      // let dialogueOpened = false;

      // window.addEventListener("beforeprint", () => {
      //   dialogueOpened = true;
      // });

      // window.addEventListener("afterprint", function () {
      //   if (!dialogueOpened) {
      //     navigate(`/booktale/${qrCodeId}`);
      //   }
      // });
      window.print();
    }
  }

  function handleGoToBooktale() {
    if (qrCodeId) {
      navigate(`/booktale/${qrCodeId}`)
    }
  }

  return (
    <div>
      {showQr && (
        <div className="qr-code">
          <p className="qr-code__copy">
            Print out this QR code and paste it in your book to start a
            Booktale!
          </p>
          <img
            className="qr-code__image"
            src={qrCodeUrl}
            alt="Generated QR Code"
          />
          <div className="qr-code__button-container">
            <button className="qr-code__button" onClick={handlePrintQrCode}>
              Print QR Code
            </button>
            <button className="qr-code__button" onClick={handleGoToBooktale}>
              Go to Booktale
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateQrCode;
