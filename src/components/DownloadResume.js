import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const DownloadResume = ({ link }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadMessage, setDownloadMessage] = useState(null);

  const handleDownload = (e) => {
    e.preventDefault();
    setIsDownloading(true);
    // Redirect to the Google Drive link
    window.location.href = link;
    setDownloadMessage("Downloading...");

    // Assuming that the download completes successfully after the redirection,
    // clear the download message after a delay
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadMessage(null);
    }, 2000); // Adjust the delay as needed
  };

  return (
    <Col lg={12}>
      <div className="resume-bx">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Download My Resume :</h3>
            {isDownloading && <Alert>{downloadMessage}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleDownload}>
              <div className="download-btn-bx">
                <button type="submit" disabled={isDownloading}>
                  {isDownloading ? "Downloading..." : "Download Resume"}
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
