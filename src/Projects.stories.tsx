import { Story } from "@ladle/react"

const data = [
  { project: "Title 1", description: "Paragraph 1", image: 'photo-1.jpg' },
  { project: "Title 2", description: "Paragraph 2", image: 'photo-2.jpg' },
  { project: "Title 3", description: "Paragraph 3", image: 'photo-3.jpg' },
  { project: "Title 4", description: "Paragraph 4", image: 'photo-4.jpg' },
  { project: "Title 5", description: "Paragraph 5", image: 'photo-1.jpg' },
  { project: "Title 6", description: "Paragraph 6", image: 'photo-2.jpg' },
];

export const ProjectList = () => (
  <div className="flex flex-wrap -mx-4 -mb-12">
    {data.map(({ project, description, image }, index) => (
      <ProjectCard key={index} project={project} description={description} image={image} />
    ))}
  </div>
);

export const ProjectSection: Story<{
  subtitle: string
  title: string
  paragraph: string
}> = ({ subtitle, title, paragraph }) => {
  return (
    <section className="bg-orange-200 py-26">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 mb-16 items-center justify-between">
          <div className="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
            <span className="text-lg font-extrabold text-orange-500">{subtitle}</span>
            <h1 className="md:text-4xl font-extrabold font-heading mt-3 mb-3 text-5xl">{title}</h1>
            <p className="text-xl font-extrabold leading-8">{paragraph}</p>
          </div>
          <ButtonStack buttonOne="npm i -g appkaiju" buttonTwo="npx appkaiju" />
        </div>
        <div className="flex flex-wrap -mx-4 -mb-8">
          <ProjectList />
        </div>
      </div>
    </section>
  )
};

ProjectSection.args = {
  subtitle: 'Subtitle',
  title: 'Title',
  paragraph: 'Paragraph',
}

export const ButtonStack: Story<{
  buttonOne: string
  buttonTwo: string
}> = ({ buttonOne, buttonTwo }) => {
  return (
    <div className="w-full lg:w-1/3 xl:w-1/3 px-4">
      <div className="flex flex-wrap justify-end">
        <a className="inline-block w-full md:w-auto mb-2 md:mb-0 lg:mb-2 md:mr-6 lg:mr-0 xl:mr-6 xl:mb-0 py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200" href="#">{buttonOne}</a>
        <a className="inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200" href="#">{buttonTwo}</a>
      </div>
    </div>
  )
}

ButtonStack.args = {
  buttonOne: 'npm i -g appkaiju',
  buttonTwo: 'npx appkaiju',
}

export const ProjectCard: Story<{
  project: string
  description: string
  image: string
}> = ({ project, description, image }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <img className="block mb-6 w-full h-80 border-3 border-indigo-900 rounded-2xl shadow-md object-cover" src={image} alt="" />
      <h2 className="text-2xl md:text-3xl font-extrabold mb-2">{project}</h2>
      <span className="text-lg text-orange-500">{description}</span>
    </div>
  )
}

ProjectCard.args = {
  project: 'Easy setup',
  description: 'End to End Business Platform.',
  image: 'photo-1.jpg',
}
