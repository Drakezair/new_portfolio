import MainLayout from '@/modules/Common/Layout/MainLayout';
import { CTASection } from '@/modules/Common/Sections';
import {
  CVsection,
  HeroExperienciaSection,
  SkillsSection,
} from '@/modules/Experiencia/Sections';

const Seo = {
  title: 'Experiencia | Luisandrade.me',
  description: 'Fullstack Developer Senior',
  ogtitle: 'Currículum | Luisandrade.me',
  ogurl: 'https//luisandrade.me/experiencia',
  ogimage: 'https://luisandrade.me/images/profile.JPG',
};

export default function ResumePage() {
  return (
    <MainLayout seo={Seo}>
      <HeroExperienciaSection />
      <SkillsSection />
      <CVsection />
      <CTASection />
    </MainLayout>
  );
}
