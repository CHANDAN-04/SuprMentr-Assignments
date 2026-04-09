const BASE_URL = "https://dummyjson.com/products";

// GET ALL (with pagination + sorting)
export const getProducts = async ({ limit = 12, skip = 0, sortBy, order }) => {
  let url = `${BASE_URL}?limit=${limit}&skip=${skip}`;

  if (sortBy) url += `&sortBy=${sortBy}&order=${order}`;

  const res = await fetch(url);
  return res.json();
};

// SEARCH
export const searchProducts = async (query) => {
  const res = await fetch(`${BASE_URL}/search?q=${query}`);
  return res.json();
};

// SINGLE PRODUCT
export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};

// CATEGORY LIST
export const getCategories = async () => {
  const res = await fetch(`${BASE_URL}/category-list`);
  return res.json();
};

// PRODUCTS BY CATEGORY
export const getByCategory = async (category) => {
  const res = await fetch(`${BASE_URL}/category/${category}`);
  return res.json();
};

// ADD PRODUCT
export const addProduct = async (data) => {
  const res = await fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// UPDATE PRODUCT
export const updateProduct = async (id, data) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// DELETE PRODUCT
export const deleteProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
