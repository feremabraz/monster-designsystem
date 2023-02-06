import { Story } from '@ladle/react'

export const Features = ({ features }: { features: string[] }) => {
  return (
    <>
      {features.slice(0, features.length).map((feature, index) => (
        <div key={index} className="flex mb-4 items-start">
          <img
            className="block w-7 h-7 mr-2 object-contain"
            src="circle-icon-green.svg"
            alt=""
          />
          <span className="text-lg font-extrabold">{feature}</span>
        </div>
      ))}
    </>
  )
}

Features.args = {
  features: ['Get good at it.'],
}

export const PricingTier: Story<{
  name: string
  price: string
  description: string
  features: string[]
}> = ({ name, price, description, features }) => {
  return (
    <div className="max-w-md mx-auto bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
      <div className="px-6 pt-12 lg:px-12 pb-10 border-b-3 border-indigo-900">
        <h2 className="text-2xl font-extrabold mb-6">{name}</h2>
        <div className="flex items-start mb-6">
          <span className="pr-1 text-lg font-extrabold">$</span>
          <span className="text-4xl sm:text-5xl font-extrabold">{price}</span>
          <span className="pl-1 text-lg font-extrabold self-end">/mo</span>
        </div>
        <p className="text-lg font-extrabold leading-7 mb-8">{description}</p>
        <a
          className="inline-block w-full py-4 px-6 mb-4 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
          href="#"
        >
          Get Started
        </a>
        <a
          className="inline-block w-full py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200"
          href="#"
        >
          Learn More
        </a>
      </div>
      <div className="p-6 lg:px-12 pt-10 pb-12">
        <Features features={features} />
      </div>
    </div>
  )
}

PricingTier.args = {
  name: 'Supporter',
  price: '10',
  description: 'Basic features for up to 5 users.',
  features: ['Get monthly perks.', 'Some other great feature.'],
}

export const Pricing: Story<{
  subtitle: string
  title: string
  description: string
}> = ({ subtitle, title, description }) => {
  return (
    <section className="py-26 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <span className="text-lg font-extrabold text-indigo-500">
            {subtitle}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-6">
            {title}
          </h1>
          <p className="text-xl font-extrabold leading-8">{description}</p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
            <PricingTier
              name="Small"
              price="5"
              description="Small price."
              features={['Feature 1', 'Feature 2']}
            />
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
            <PricingTier
              name="Medium"
              price="10"
              description="Medium price."
              features={['Feature 1', 'Feature 2', 'Feature 3']}
            />
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <PricingTier
              name="Big"
              price="15"
              description="Big price."
              features={['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

Pricing.args = {
  subtitle: 'Free & Open-Source',
  title: 'Support the project with an small donation',
  description: 'Protected by Stripe & Github Payments.',
}
