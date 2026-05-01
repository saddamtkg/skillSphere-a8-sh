import HeroSlider from "@/components/home/HeroSlider";
import LearningTipsSection from "@/components/home/LearningTipsSection";
import PopularCoursesSection from "@/components/home/PopularCoursesSection";
import TopInstructorsSection from "@/components/home/TopInstructorsSection";
import TrendingCoursesSection from "@/components/home/TrendingCoursesSection";
import {
  getAllCourses,
  getHeroSlides,
  getLearningTips,
  getTopInstructors,
} from "@/lib/data-fetch";

export const metadata = {
  title: "Home",
  description:
    "Discover popular courses, top instructors, learning tips, and trending skills on SkillSphere.",
};

const homePage = async () => {
  const [heroSlides, courses, learningTips, topInstructors] = await Promise.all([
    getHeroSlides(),
    getAllCourses(),
    getLearningTips(),
    getTopInstructors(4),
  ]);

  const sortedCourses = [...courses].sort((a, b) => b.rating - a.rating);
  const popularCourses = sortedCourses.slice(0, 3);
  const trendingCourses = sortedCourses.slice(0, 4);

  return (
    <div>
      <HeroSlider slides={heroSlides} />
      <PopularCoursesSection courses={popularCourses} />
      <LearningTipsSection tips={learningTips} />
      <TopInstructorsSection instructors={topInstructors} />
      <TrendingCoursesSection courses={trendingCourses} />
    </div>
  );
};

export default homePage;
