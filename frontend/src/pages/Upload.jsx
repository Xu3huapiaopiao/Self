import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Container } from "react-bootstrap";
import { useState, useMemo } from "react";
import PList from "../components/uploadProcess";
import axios from "axios";
import * as XLSX from "xlsx";
import DragBox from "../components/DragBox";

// Css for accept file and reject file
const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function Upload(props) {
  // Excel file upload handling
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);

  // On button submit, set data
  const [excelData, setExcelData] = useState(null);

  // On upload button color states
  const [onUpload, setIsUpload] = useState(false);

  // Upload box show file name state
  const [showFile, setshowFile] = useState(false);

  // File name
  const [fileName, setfileName] = useState();

  // State to set border color on file reject for upload box
  const [borderReject, setborderReject] = useState(false);

  // Ensure that file type is excel / xls
  const fileType = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];

  // Excel file submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet, { raw: false });
      axios
        .post(`/api/v1/upload`, data)
        .then((response) => {
          console.log("done");
        })
        .catch((error) => {
          console.log(error);
        });
      setExcelData(data);
      console.log(data);
    } else {
      setExcelData(null);
    }
  };

  // Excel drop or browse handling
  const onDrop = useCallback((acceptedFiles) => {
    let selectedFile = acceptedFiles[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        setIsUpload(!onUpload);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);
          setIsUpload(!onUpload);
          setshowFile(!showFile);
          setfileName(selectedFile.name);
        };
      } else {
        setExcelFileError("Please select only excel file types");
        setExcelFile(null);
      }
    } else {
      setfileName("wrongfile");
      setborderReject(!borderReject);
      setTimeout(() => {
        setfileName("");
        // setborderReject(!borderReject);
        setborderReject(borderReject);
      }, 3000);
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    fileRejections,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
  });

  const style = useMemo(
    () => ({
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
      ...(borderReject ? rejectStyle : {}),
    }),
    [isDragAccept, isDragReject, borderReject]
  );

  return (
    <div
      style={{
        display: "flex",
        padding: 30,
        backgroundSize: "cover",
        alignItems: "center",
      }}
    >
      <Container
        style={{
          backgroundColor: "#111827",
          marginLeft: 200,
          marginTop: 40,
          width: 700,
          borderRadius: 24,
        }}
      >
        <h2 style={{ color: "white", textAlign: "center", marginTop: 20 }}>
          <u>Upload GeBiz data</u>
        </h2>
        <form className="Upload" onSubmit={handleSubmit}>
          <div {...getRootProps({ className: "dropzone", style })}>
            <input {...getInputProps()} />

            <DragBox
              isDragActive={isDragActive}
              isDragAccept={isDragAccept}
              isDragReject={isDragReject}
              showFile={showFile}
              acceptedFile={fileName}
            />
          </div>
          <button
            type="submit"
            style={{
              color: "white",
              marginTop: 20,
              borderRadius: 15,
              width: 130,
              height: 35,
              backgroundColor: onUpload ? "#A100FF" : "#585C65",
            }}
          >
            Start upload
          </button>
          <div className="uploadProcess">
            <div
              style={{
                width: 600,
                height: 350,
              }}
            >
              <h2 style={{ color: "white", textAlign: "left", marginTop: 0 }}>
                <u>Upload process</u>
              </h2>
              <PList excelData={excelData}/>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Upload;
