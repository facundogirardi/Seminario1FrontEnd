import { savePDF } from '@progress/kendo-react-pdf';

class DocService {
  createPdf = (html) => {
    savePDF(html, { 
      paperSize: 'Letter',
      fileName: 'Resultados.pdf',
      margin: 3
    })
  }
}

const Doc = new DocService();
export default Doc;