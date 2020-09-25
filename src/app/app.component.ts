import { Component } from '@angular/core';
import { PdfService } from './pdf.service';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      PDF Generator with PDFMake
    </mat-toolbar>
  <hr />
    <button (click)="generatePdf()" mat-raised-button color="primary">
      Generate PDF
    </button>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-pdf-generator';

  constructor(private pdfService: PdfService) {
  }

  generatePdf() {
    this.pdfService.generatePdf();
  }
}
