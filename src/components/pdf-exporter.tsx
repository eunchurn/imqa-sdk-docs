import { Document, Page, PDFDownloadLink, StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  content: {
    fontSize: 12,
    lineHeight: 1.5,
  },
})

interface PDFDocumentProps {
  content: string
}

const PDFDocument: React.FC<PDFDocumentProps> = ({ content }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.content}>{content}</Text>
      </View>
    </Page>
  </Document>
)

interface PDFDocumentNodeProps {
  children: React.ReactNode
}

const PDFDocumentNode: React.FC<PDFDocumentNodeProps> = ({ children }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.content}>{children}</View>
    </Page>
  </Document>
)

interface PdfExporterProps {
  content: string
}

export const PdfExporter: React.FC<PdfExporterProps> = ({ content }) => (
  <PDFDownloadLink document={<PDFDocument content={content} />} fileName="export.pdf">
    Download PDF
    {/* {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')} */}
  </PDFDownloadLink>
)

interface PdfExporterNodeProps {
  children: React.ReactNode
}
export const PdfExporterNode: React.FC<PdfExporterNodeProps> = ({ children }) => (
  <PDFDownloadLink document={<PDFDocumentNode>{children}</PDFDocumentNode>} fileName="export.pdf">
    Download PDF
    {/* {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')} */}
  </PDFDownloadLink>
)
