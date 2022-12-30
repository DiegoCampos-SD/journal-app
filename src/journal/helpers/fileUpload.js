export const fileUpload = async (file) => {
  if (!file) throw new Error("No file to upload");
  const cloudUrl = "https://api.cloudinary.com/v1_1/dlqivqvyi/upload";
  const formData = new FormData();
  formData.append("upload_preset", "journal-app");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("image uploading failed");

    const cloudResp = await resp.json();

    return cloudResp.secure_url;
  } catch (error) {
    console.log(error);
    throw Error(error.message);
  }
};
