export const fileUpload = async (file) => {
  // if (!file) throw new Error("There are not file for upload");
  if (!file) return null;

  const baseURL = "https://api.cloudinary.com/v1_1/journal-app-react/upload";

  const formdata = new FormData();
  formdata.append("upload_preset", "journal");
  formdata.append("file", file);

  try {
    const resp = await fetch(baseURL, {
      method: "POST",
      body: formdata,
    });

    if (!resp.ok) throw new Error("file could not be upload");

    const cloudResp = await resp.json();

    return cloudResp.secure_url;
  } catch (error) {
    // throw new Error(error.message);
    return null;
  }
};
