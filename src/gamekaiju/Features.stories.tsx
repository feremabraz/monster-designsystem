import { Story } from '@ladle/react'

export const Features = () => {
  return (
    <section className="bg-white pt-12">
      <div className="container px-4 mx-auto">
        <h2 className="text-center text-xl font-extrabold mb-6">
          Works with every template. Not affiliated nor endorsed.
        </h2>
        <div className="flex flex-wrap -mx-4 -mb-8">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
              <img src="unity.svg" className="h-24" alt="" />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
              <img src="unreal.svg" className="h-24" alt="" />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
              <img src="godot.svg" className="h-24" alt="" />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
              <img src="gdevelop.svg" className="h-24" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Features.storyName = 'Gamekaiju / Features'

export const FeatureCard: Story<{
  image: string
}> = ({ image }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
      <div className="flex items-center justify-center h-44 p-6 md:px-12 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
        <img src={image} className="h-24" alt="" />
      </div>
    </div>
  )
}

FeatureCard.args = {
  image: 'gdevelop.svg',
}

FeatureCard.storyName = 'Gamekaiju / Feature Card'
