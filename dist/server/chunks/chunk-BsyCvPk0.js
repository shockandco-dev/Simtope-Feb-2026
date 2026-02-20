const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbysRWWUq4X0u-A_mWr-wyV5hQrhMvkzOiquzTd1NEPjjeXeEyx6ogfQC9I1dCL6YDT0/exec";
const submitToSpreadsheet = async (formData) => {
  try {
    const body = new URLSearchParams();
    for (const key in formData) {
      body.append(key, String(formData[key]));
    }
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body.toString()
    });
    return { result: "success" };
  } catch (error) {
    console.error("Simtope: Cloud sync failed:", error);
    throw error;
  }
};
export {
  submitToSpreadsheet as s
};
