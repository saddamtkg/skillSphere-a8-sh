import HeroSlider from "@/components/home/HeroSlider";
import LearningTipsSection from "@/components/home/LearningTipsSection";
import PopularCoursesSection from "@/components/home/PopularCoursesSection";
import TopInstructorsSection from "@/components/home/TopInstructorsSection";
import TrendingCoursesSection from "@/components/home/TrendingCoursesSection";
import {
  getHeroSlides,
  getLearningTips,
  getPopularCourses,
  getTopInstructors,
  getTrendingCourses,
} from "@/lib/data-fetch";

const homePage = async () => {
  const heroSlides = await getHeroSlides();
  const popularCourses = await getPopularCourses(3);
  const learningTips = await getLearningTips();
  const topInstructors = await getTopInstructors(4);
  const trendingCourses = await getTrendingCourses(4);

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
