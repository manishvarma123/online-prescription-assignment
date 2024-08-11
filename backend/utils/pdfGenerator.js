const PDFDocument = require('pdfkit');
const fs = require('fs');

exports.generatePdf = async (prescription) => {
  const doc = new PDFDocument();
  const pdfPath = `./pdfs/prescription-${Date.now()}.pdf`;
  doc.pipe(fs.createWriteStream(pdfPath));

  doc.text('Prescription', { align: 'center' });
  doc.moveDown();
  doc.text(`Care Instructions: ${prescription.careInstructions}`);
  doc.text(`Medicines: ${prescription.medicines}`);

  doc.end();
  return pdfPath;
};
