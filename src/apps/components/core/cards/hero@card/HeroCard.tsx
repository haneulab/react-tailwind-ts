import { type ApplicationComponent } from "../../../../types/application.d"
import { SiGithub } from "react-icons/si"

const HeroCard: ApplicationComponent = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <section className="p-8 mx-auto w-full max-w-cutoff">
        <h3 className="text-center font-bold font-lato text-xl lg:text-2xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400">
          ReactJS, TailwindCSS, and TypeScript Template.
        </h3>
        <h4 className="text-center mb-4">
          With <strong className="text-blue-400">Webpack 5</strong> Integration
        </h4>
        <p className="text-center font-light text-neutral-600 font-nunito lg:text-lg mb-6">
          Enjoy this single page application template, and build something that
          changes the world!
        </p>
        <div className="flex justify-center mb-6">
          <a
            href="https://github.com/haneulab/react-tailwind-ts"
            className="font-poppins inline-flex items-center gap-x-2 justify-center w-max mx-auto px-8 py-3 rounded-md shadow bg-neutral-900 text-white text-lg transition-smooth hover:opacity-60"
          >
            <span>Go to repository</span>
            <SiGithub />
          </a>
        </div>
        <p className="text-center text-neutral-500 text-sm">
          Made with Love by{" "}
          <code className="transition-smooth hover:text-neutral-900 cursor-pointer">
            @haneulab
          </code>
        </p>
      </section>
    </div>
  )
}

export default HeroCard
