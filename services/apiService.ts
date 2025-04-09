const API_BASE_URL = 'http://localhost:3001/api'; 

export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Erreur lors de la requête sur ${endpoint}`, error);
    throw error;
  }
};

export const getCategories = async () => {
  return await fetchData('/categories');
};

export const getProjects = async () => {
  return await fetchData('/projects');
};

export const getUsers = async () => {
  return await fetchData('/users');
};

export const getProjectsByCategory = async (categoryId: number) => {
  return await fetchData(`/projects/categories/${categoryId}`);
}

export const getGalleriesByProject = async (projectId: number) => {
  return await fetchData(`/galleries/projects/${projectId}`);
}