/**
 * GOOGLE SHEETS INTEGRATION
 * 1. Create a Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Use the simplified doPost code provided in previous instructions.
 * 4. Deploy as a Web App (Access: Anyone, Execute as: Me).
 */

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbysRWWUq4X0u-A_mWr-wyV5hQrhMvkzOiquzTd1NEPjjeXeEyx6ogfQC9I1dCL6YDT0/exec';

export const submitToSpreadsheet = async (formData: Record<string, any>) => {
  if (!GOOGLE_SCRIPT_URL) {
    console.warn('Simtope: Sync target not defined.');
    return { result: 'success' };
  }

  try {
    // We use URLSearchParams to force the browser to send data as 
    // application/x-www-form-urlencoded. This ensures Google Apps Script 
    // populates the 'e.parameter' object correctly.
    const body = new URLSearchParams();
    for (const key in formData) {
      body.append(key, String(formData[key]));
    }

    // no-cors mode is mandatory for Google Apps Script to bypass CORS preflight.
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });

    // In no-cors mode, we cannot read the response, so we assume success if no error is thrown.
    return { result: 'success' };
  } catch (error) {
    console.error('Simtope: Cloud sync failed:', error);
    throw error;
  }
};