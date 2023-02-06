import { Story } from '@ladle/react'

export const ProjectCard: Story<{
  image: string
  project: string
  description: string
}> = ({ image, project, description }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <img
        className="block mb-6 w-full h-80 border-3 border-indigo-900 rounded-2xl shadow-md object-cover"
        src={image}
        alt=""
      />
      <h2 className="text-2xl md:text-3xl font-extrabold mb-2">{project}</h2>
      <span className="text-lg text-indigo-500">{description}</span>
    </div>
  )
}

ProjectCard.args = {
  project: 'Characters',
  description: 'Fully Rigged',
  image: 'gk-project-01.gif',
}

const data = [
  {
    project: 'Characters',
    description: 'Fully Rigged',
    image: 'gk-project-01.gif',
  },
  {
    project: 'Bots',
    description: 'Procedurally Animated',
    image: 'gk-project-02.jpeg',
  },
  {
    project: 'Props',
    description: 'For interiors, exteriors & characters',
    image: 'gk-project-03.jpeg',
  },
  {
    project: 'Buildings',
    description: 'Modular & Walkable',
    image: 'gk-project-04.jpeg',
  },
  {
    project: 'Game Design Book',
    description: 'Pages added bi-weekly',
    image: 'gk-project-05.jpeg',
  },
  {
    project: '2D & Audio',
    description: 'For interfaces & interactions',
    image: 'gk-project-06.jpeg',
  },
]

export const ProjectList = () => (
  <div className="flex flex-wrap -mx-4 -mb-12">
    {data.map(({ project, description, image }, index) => (
      <ProjectCard
        key={index}
        project={project}
        description={description}
        image={image}
      />
    ))}
  </div>
)

export const ProjectSection: Story<{
  subtitle: string
  title: string
  paragraph: string
}> = ({ subtitle, title, paragraph }) => {
  return (
    <section className="py-26 bg-white relative overflow-hidden">
      <img
        className="absolute top-0 left-0 w-full md:h-full"
        src="pattern-center-dots-color.svg"
        alt=""
      />
      <div className="container px-4 mx-auto relative">
        <div className="flex flex-wrap -mx-4 mb-16 items-center justify-between">
          <div className="w-full lg:w-1/2 xl:w-2/3 px-4 mb-8 lg:mb-0">
            <span className="text-lg font-extrabold text-indigo-500">
              {subtitle}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-3 mb-3">
              {title}
            </h1>
            <p className="text-xl font-extrabold leading-8">{paragraph}</p>
          </div>
          <div className="w-full lg:w-1/2 xl:w-1/3 px-4">
            <div className="flex flex-wrap lg:justify-end">
              <a
                className="inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200"
                href="https://github.com/gamekaiju/platform/projects"
              >
                Get the Sample
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 -mb-8">
          <ProjectList />
        </div>
      </div>
    </section>
  )
}

ProjectSection.args = {
  subtitle: 'Gamekaiju strives to achieve the highest quality.',
  title: 'Designed with your needs in mind',
  paragraph:
    'Get customized assets every month. Gamekaiju adapts them for every subscriber.',
}

ProjectCard.storyName = 'Gamekaiju / Project Card'
ProjectList.storyName = 'Gamekaiju / Project List'
ProjectSection.storyName = 'Gamekaiju / Projects'
