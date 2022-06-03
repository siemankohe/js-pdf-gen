window.html2canvas = html2canvas;
window.jsPDF = window.jspdf.jsPDF;

function makePDF() {
    const doc = new jsPDF('landscape');
    doc.text('asdadasdadad', 10, 10);
    doc.save('doc.pdf');
}

