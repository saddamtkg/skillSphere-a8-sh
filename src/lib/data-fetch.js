const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://skillsphere-server-sh.onrender.com";

// This helper handles all common fetch logic.
const requestJson = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    cache: "force-cache",
    next: { revalidate: 120 },
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

// Get all courses.
export const getAllCourses = async () => {
  return requestJson("/courses");
};

// Search courses by title text.
export const searchCoursesByTitle = async (searchText) => {
  if (!searchText?.trim()) return getAllCourses();
  return requestJson(`/courses?q=${encodeURIComponent(searchText.trim())}`);
};

// Get one course by id.
export const getCourseById = async (courseId) => {
  const response = await fetch(`${API_BASE_URL}/courses/${courseId}`, {
    cache: "force-cache",
    next: { revalidate: 120 },
    headers: {
      "Content-Type": "application/json",
    },
  });

  // This returns null if course id is not found.
  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

// Get top rated courses for popular section.
export const getPopularCourses = async (limit = 3) => {
  const courses = await getAllCourses();
  return [...courses].sort((a, b) => b.rating - a.rating).slice(0, limit);
};

// Get trending courses list.
export const getTrendingCourses = async (limit = 6) => {
  const courses = await getAllCourses();
  return [...courses].sort((a, b) => b.rating - a.rating).slice(0, limit);
};

// Get courses by category name.
export const getCoursesByCategory = async (category) => {
  if (!category?.trim()) return [];
  return requestJson(`/courses?category=${encodeURIComponent(category.trim())}`);
};

// Get all instructors.
export const getAllInstructors = async () => {
  return requestJson("/instructors");
};

// Get top instructors by rating.
export const getTopInstructors = async (limit = 4) => {
  const instructors = await getAllInstructors();
  return [...instructors].sort((a, b) => b.rating - a.rating).slice(0, limit);
};

// Get all hero slider data.
export const getHeroSlides = async () => {
  return requestJson("/heroSlides");
};

// Get all learning tips data.
export const getLearningTips = async () => {
  return requestJson("/learningTips");
};
