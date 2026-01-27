import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { jsPDF } from "jspdf";
import { DestinationPackage, DestinationData } from "@/data/itineraries";

interface PDFDownloadButtonProps {
  packageData: DestinationPackage;
  destinationData: DestinationData;
}

const PDFDownloadButton = ({ packageData, destinationData }: PDFDownloadButtonProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN").format(price);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;
    let yPos = margin;

    // Helper function to add new page if needed
    const checkNewPage = (requiredHeight: number) => {
      if (yPos + requiredHeight > pageHeight - margin) {
        doc.addPage();
        yPos = margin;
        return true;
      }
      return false;
    };

    // Header
    doc.setFillColor(255, 107, 0); // Primary orange color
    doc.rect(0, 0, pageWidth, 45, "F");
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text("ALISON HOLIDAYS & EVENTS", margin, 15);
    
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text(packageData.name, margin, 32);
    
    yPos = 55;

    // Package Summary Box
    doc.setFillColor(245, 245, 245);
    doc.roundedRect(margin, yPos, contentWidth, 35, 3, 3, "F");
    
    doc.setTextColor(80, 80, 80);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    
    const col1 = margin + 10;
    const col2 = margin + 55;
    const col3 = margin + 110;
    
    doc.text("Destination:", col1, yPos + 12);
    doc.setFont("helvetica", "bold");
    doc.text(destinationData.name, col1, yPos + 20);
    
    doc.setFont("helvetica", "normal");
    doc.text("Duration:", col2, yPos + 12);
    doc.setFont("helvetica", "bold");
    doc.text(packageData.duration, col2, yPos + 20);
    
    doc.setFont("helvetica", "normal");
    doc.text("Price:", col3, yPos + 12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 107, 0);
    doc.text(`₹${formatPrice(packageData.currentPrice)} per person`, col3, yPos + 20);
    
    yPos += 45;

    // Description
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("About This Package", margin, yPos);
    yPos += 8;
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    const descLines = doc.splitTextToSize(packageData.description, contentWidth);
    doc.text(descLines, margin, yPos);
    yPos += descLines.length * 5 + 10;

    // Highlights
    checkNewPage(40);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(60, 60, 60);
    doc.text("Package Highlights", margin, yPos);
    yPos += 8;
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    packageData.highlights.forEach((highlight) => {
      doc.setFillColor(255, 107, 0);
      doc.circle(margin + 3, yPos - 1.5, 1.5, "F");
      doc.setTextColor(80, 80, 80);
      doc.text(highlight, margin + 10, yPos);
      yPos += 6;
    });
    yPos += 5;

    // Day-by-Day Itinerary
    checkNewPage(20);
    doc.setFillColor(255, 107, 0);
    doc.rect(0, yPos - 5, pageWidth, 12, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Day-by-Day Itinerary", margin, yPos + 3);
    yPos += 18;

    packageData.itinerary.forEach((day) => {
      checkNewPage(60);
      
      // Day number badge
      doc.setFillColor(255, 107, 0);
      doc.circle(margin + 8, yPos + 3, 8, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.text(String(day.day), margin + 8 - (day.day > 9 ? 3 : 2), yPos + 6);
      
      // Day title
      doc.setTextColor(40, 40, 40);
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      const titleLines = doc.splitTextToSize(day.title, contentWidth - 25);
      doc.text(titleLines, margin + 22, yPos + 5);
      yPos += titleLines.length * 5 + 8;
      
      // Day description
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(80, 80, 80);
      const descriptionLines = doc.splitTextToSize(day.description, contentWidth - 5);
      
      // Check if we need a new page for description
      if (yPos + descriptionLines.length * 4 > pageHeight - margin) {
        doc.addPage();
        yPos = margin;
      }
      
      doc.text(descriptionLines, margin + 5, yPos);
      yPos += descriptionLines.length * 4 + 5;
      
      // Day highlights
      if (day.highlights.length > 0) {
        doc.setFontSize(9);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(255, 107, 0);
        doc.text("Highlights:", margin + 5, yPos);
        yPos += 5;
        
        doc.setFont("helvetica", "normal");
        doc.setTextColor(100, 100, 100);
        const highlightsText = day.highlights.join(" • ");
        const highlightLines = doc.splitTextToSize(highlightsText, contentWidth - 10);
        doc.text(highlightLines, margin + 5, yPos);
        yPos += highlightLines.length * 4 + 10;
      }
      
      // Separator line
      doc.setDrawColor(220, 220, 220);
      doc.setLineWidth(0.5);
      doc.line(margin, yPos, pageWidth - margin, yPos);
      yPos += 8;
    });

    // Inclusions & Exclusions
    checkNewPage(50);
    doc.setFillColor(34, 139, 34);
    doc.rect(0, yPos - 5, pageWidth, 12, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("What's Included", margin, yPos + 3);
    yPos += 18;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    packageData.inclusions.forEach((item) => {
      checkNewPage(8);
      doc.setTextColor(34, 139, 34);
      doc.text("✓", margin, yPos);
      doc.setTextColor(60, 60, 60);
      const itemLines = doc.splitTextToSize(item, contentWidth - 15);
      doc.text(itemLines, margin + 10, yPos);
      yPos += itemLines.length * 5 + 2;
    });
    yPos += 10;

    checkNewPage(50);
    doc.setFillColor(200, 80, 80);
    doc.rect(0, yPos - 5, pageWidth, 12, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("What's Not Included", margin, yPos + 3);
    yPos += 18;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    packageData.exclusions.forEach((item) => {
      checkNewPage(8);
      doc.setTextColor(200, 80, 80);
      doc.text("✗", margin, yPos);
      doc.setTextColor(60, 60, 60);
      const itemLines = doc.splitTextToSize(item, contentWidth - 15);
      doc.text(itemLines, margin + 10, yPos);
      yPos += itemLines.length * 5 + 2;
    });

    // Footer on last page
    const footerY = pageHeight - 15;
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, footerY - 5, pageWidth - margin, footerY - 5);
    
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text("ALISON HOLIDAYS & EVENTS | www.alisonholidays.com | +91 95505 04544", margin, footerY);
    doc.text("Terms & Conditions Apply. Prices subject to change.", margin, footerY + 5);

    // Save the PDF
    const fileName = `${packageData.name.replace(/\s+/g, "-").toLowerCase()}-itinerary.pdf`;
    doc.save(fileName);
  };

  return (
    <Button
      variant="outline"
      size="lg"
      onClick={generatePDF}
      className="w-full gap-2"
    >
      <Download className="w-4 h-4" />
      Download PDF Itinerary
    </Button>
  );
};

export default PDFDownloadButton;
