export const uploadImage = (file) => {
    const formData = new FormData();
    formData.append("image", file);
  
    return fetch(`${import.meta.env.VITE_BASE_API_URL}/upload`, {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
  };
  
  export const deleteImage = (filePath) => {
    return fetch(`${import.meta.env.VITE_BASE_API_URL}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filePath }),
    }).then((res) => res.json());
  };
  