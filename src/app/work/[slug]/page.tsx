import Project from '@/components/ProjectCard';
import { projects } from '../../../../data';
import MaskCursor from '@/components/Cursor';

const ProjectsPage: React.FC<{ params: any }> = ({ params }) => {
  const filteredData = projects.filter((project) => project.title.toLowerCase().replace(' ', '-') === params.slug);

  return (
    <div className='text-black'>
      <MaskCursor />
      {filteredData.length > 0 ? (
        filteredData.map((usecase, index) => (
          <Project
            key={index}
            title={usecase.title}
            overview={usecase.overview}
            heroimage={usecase.heroimage}
            liveSite={usecase.liveSite}
            HeroTags={usecase.HeroTags}
            Background={usecase.Background}
            BackgroundText={usecase.BackgroundText}
            BackgroundImage={usecase.BackgroundImage}
            BackgroundConclusion={usecase.BackgroundConclusion}
            BackgroundConclusionImage={usecase.BackgroundConclusionImage}
            SolutionTitle={usecase.SolutionTitle}
            SolutionText={usecase.SolutionText}
            SolutionTags={usecase.SolutionTags}
            SolutionImages={usecase.SolutionImages}
            UserTestingTitle={usecase.UserTestingTitle}
            UserTestingText={usecase.UserTestingText}
            UserTestingImages={usecase.UserTestingImages}
            FinalThoughtsTitle={usecase.FinalThoughtsTitle}
            FInalThoughtsText={usecase.FInalThoughtsText}
            NextCaseImage={usecase.NextCaseImage}
            NextCaseLink={usecase.NextCaseLink}
          />
        ))
      ) : (
        <p>No usecase found with ID: {params.slug}</p>
      )}
    </div>
  );
}

export default ProjectsPage;
