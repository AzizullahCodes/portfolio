// Central Resume Utility
// Automatically imports any PDF file placed inside src/assets/images/resume/

const pdfFiles = import.meta.glob('/src/assets/images/resume/*.{pdf,PDF}', {
  eager: true,
  import: 'default',
});

const pdfList = Object.values(pdfFiles);

// Use the first PDF found in src/assets/images/resume/, fallback to public folder if none found
export const resumePdf = pdfList.length > 0 ? pdfList[0] : '/azizullahResume.pdf';

/**
 * Robust CV download function that forces download as an attachment
 * across all browsers by fetching the file as a Blob.
 */
export const downloadResume = async (e, filename = 'Azizullah-Resume.pdf') => {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }

  try {
    const response = await fetch(resumePdf);
    if (!response.ok) throw new Error('Failed to fetch resume file');
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Cleanup blob URL
    setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
  } catch (err) {
    console.warn('Blob download failed, falling back to direct link:', err);
    const link = document.createElement('a');
    link.href = resumePdf;
    link.setAttribute('download', filename);
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export default resumePdf;
