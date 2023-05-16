export const fileUpload = async (file) => {
  if (!file) throw new Error("There are not file for upload");

  const baseURL = "https://api.cloudinary.com/v1_1/journal-app-react/upload";

  const formdata = new FormData();
  formdata.append("upload_preset", "journal");
  formdata.append("file", file);

  try {
    const resp = await fetch(baseURL, {
      method: "POST",
      body: formdata,
    });

    console.log(resp);
    if (!resp.ok) throw new Error("file could not be upload");

    const cloudResp = await resp.json();
    console.log({ cloudResp });

    return cloudResp.secure_url;
  } catch (error) {
    throw new Error(error.message);
  }
};
