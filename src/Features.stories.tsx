import { Story } from "@ladle/react"

const data = [
  { title: "Title 1", paragraph: "Paragraph 1", image: "icon-bar.svg" },
  { title: "Title 2", paragraph: "Paragraph 2", image: "icon-box.svg" },
  { title: "Title 3", paragraph: "Paragraph 3", image: "icon-message.svg" },
  { title: "Title 4", paragraph: "Paragraph 4", image: "icon-people.svg" },
  { title: "Title 5", paragraph: "Paragraph 5", image: "icon-settings.svg" },
  { title: "Title 6", paragraph: "Paragraph 6", image: "icon-write.svg" },
];

export const FeatureList = () => (
  <div className="flex flex-wrap -mx-4 -mb-12">
    {data.map(({ title, paragraph, image }, index) => (
      <FeatureCard key={index} title={title} paragraph={paragraph} image={image} />
    ))}
  </div>
);

export const FeatureSection: Story<{
  subtitle: string
  title: string
  paragraph: string
}> = ({ subtitle, title, paragraph }) => {
  return (
    <section className="relative py-26">
      <img
        className="absolute top-0 left-0 w-full md:h-full"
        src="pattern-center-dots-color.svg"
        alt=""
      />
      <div className="container px-4 mx-auto relative">
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <span className="text-lg font-extrabold text-indigo-500">
            {subtitle}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-6">
            {title}
          </h1>
          <p className="text-xl font-extrabold leading-8">
            {paragraph}
          </p>
        </div>
        <FeatureList />
      </div>
    </section>
  )
}

FeatureSection.args = {
  subtitle: 'Easy setup',
  title: 'Gain more insight for your product',
  paragraph:
    'With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.',
}

export const FeatureCard: Story<{
  title: string
  paragraph: string
  image: string
}> = ({ title, paragraph, image }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12">
      <div className="h-full py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl text-center">
        <img className="block mx-auto mb-4" src={image} alt="" />
        <h4 className="text-2xl font-extrabold mb-4">{title}</h4>
        <p className="text-lg font-extrabold leading-7">{paragraph}</p>
      </div>
    </div>
  )
}

FeatureCard.args = {
  title: 'Easy setup',
  paragraph:
    'End to End Business Platform, Sales Management, Marketing Automation & Help Desk.',
  image: 'icon-settings.svg',
}
