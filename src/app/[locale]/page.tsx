import {
  AcademicSection,
  ContactSection,
  CoursesSection,
  ProjectsSection,
  SkillsSection,
  WelcomeSection,
} from "@/components/sections";

export default async function Home() {
  return (
    <main className="bg-base-100 min-h-full flex flex-col antialiased overflow-hidden [overflow-anchor:none]">
      <WelcomeSection />
      <div className="pt-20 flex flex-col gap-y-20 overflow-hidden sm:pt-32 sm:gap-y-32 md:pt-40 md:gap-y-40">
        <SkillsSection />
        <ProjectsSection />
        <AcademicSection />
        <CoursesSection />
        <ContactSection />
      </div>
    </main>
  );
}
