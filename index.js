const express = require("express");
const app = express();
const path = require("path");
// import pkg from 'pdf-to-printer';
const { PDFDocument } = require("pdf-lib");
const { writeFileSync, readFileSync } = require("fs");
// const { print } = pkg;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/smartcard-form", (req, res) => {
  res.render("smartcard-form");
});

app.get("/visa-form", (req, res) => {
  res.render("visa-form");
});

app.post("/smartcard-form", (req, res) => {
  const smData = req.body;
  //   const pdfDoc = PDFDocument.load(
  //     readFileSync(
  //       path.resolve(path.join(__dirname, "InputData"), "smartCardForm.pdf")
  //     )
  //   );

  console.log(smData);

  const date = new Date(smData.birthday);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  console.log(smData.birthday);

  console.log(day);

  //   const form = pdfDoc.getForm();

  //   const fieldNames = form.getFields().map((f) => f.getName());
  //   console.log({ fieldNames });

  //   form.getTextField("Name").setText(smData.name);
  //   form.getTextField("FatherName").setText(smData);
  //   form.getTextField("BirthDay").setText(smData);
  //   form.getTextField("BirthMonth").setText(smData);
  //   form.getTextField("BirthYear").setText(smData);
  //   form.getTextField("BirthPlace").setText(smData);
  //   form.getTextField("Relegion").setText(smData);
  //   form.getRadioGroup("Gender").select(smData);
  //   form.getCheckBox("FactoryWorker").check();
  //   form.getTextField("PassportNo").setText(smData);
  //   form.getTextField("WorkingCountry").setText("မလေးရှား");
  //   form.getTextField("wCompanyName").setText(smData);
  //   form.getTextField("wCompanyAddress").setText(smData);
  //   form.getTextField("fagencyName").setText(smData);
  //   form.getTextField("lAgencyName").setText(smData);
  //   form.getTextField("phNo").setText();

  //   const pdfBytes = pdfDoc.save();
  //   writeFileSync(
  //     path.resolve(path.join(__dirname, "OutputData"), "output.docx"),
  //     pdfBytes
  //   );
  // print("assets/Smart Card Form Final.pdf").then(console.log);
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
