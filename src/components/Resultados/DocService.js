import { savePDF } from '@progress/kendo-react-pdf';

class DocService {
  createPdf = (html) => {
    savePDF(html, { 
      paperSize: 'auto',
      fileName: 'Resultados.pdf',
      margin: 40
    })
  }
}

const Doc = new DocService();
export default Doc;