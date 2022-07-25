import { FaFileUpload } from "react-icons/fa";

function DragBox({
  isDragActive,
  isDragAccept,
  isDragReject,
  showFile,
  acceptedFile,
}) {
  if (acceptedFile === "wrongfile") {
    return (
      <div>
        <center>
          <i style={{ marginBottom: 5 }}>
            <FaFileUpload style={{ fontSize: 50 }} />
          </i>
        </center>

        <p>Invalid file type</p>
        <p>Please upload an xls file</p>
      </div>
    );
  } else if (showFile) {
    return (
      <div>
        <center>
          <i style={{ marginBottom: 5 }}>
            <FaFileUpload style={{ fontSize: 50 }} />
          </i>
        </center>

        <p>{acceptedFile}</p>
      </div>
    );
  } else {
    return (
      <>
        {!isDragActive && (
          <div>
            <center>
              <i style={{ marginBottom: 5 }}>
                <FaFileUpload style={{ fontSize: 50 }} />
              </i>
            </center>

            <p>Click / Drag an xls file</p>
          </div>
        )}
        {isDragAccept && (
          <div>
            <center>
              <i style={{ marginBottom: 5 }}>
                <FaFileUpload style={{ fontSize: 50 }} />
              </i>
            </center>

            <p>Drop file to start upload</p>
          </div>
        )}
        {isDragReject && (
          <div>
            <center>
              <i style={{ marginBottom: 5 }}>
                <FaFileUpload style={{ fontSize: 50 }} />
              </i>
            </center>

            <p>Invalid file type</p>
            <p>Please upload an xls file</p>
          </div>
        )}
      </>
    );
  }
}

export default DragBox;
