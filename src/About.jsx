import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faFileLines,
  faStar,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

function About( { setIsOpen } ) {
  return (
    <div onClick={() => setIsOpen(false)} className="bg-containerBg text-textColor min-h-screen">
      <div className="min-h-screen">
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-textColor sm:text-5xl md:text-6xl">
                About Text Stylizer
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-textColor sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Empowering users with powerful text manipulation tools since
                2024. Welcome to Text Stylizer, your go-to destination for all
                things text-related! I am passionate about simplifying and
                enhancing your text editing and formatting experience. Whether
                you're a writer, student, developer, or just someone who loves
                working with words, my tools are designed to make your life
                easier. At Text Stylizer, I believe that text manipulation
                should be quick, efficient, and accessible to everyone. That's
                why I created a suite of user-friendly tools that allow you to
                perform a various text operations with just a few clicks. Thank
                you for choosing Text Stylizer. I am excited to be part of your
                journey and look forward to helping you make the most of your
                text! Happy editing! 😊
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-textColor">Our Mission</h2>
            <p className="mt-4 max-w-2xl text-xl text-textColor lg:mx-auto">
              We strive to provide simple yet powerful text manipulation tools
              that make your work easier and more efficient.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
                  <FontAwesomeIcon
                    icon={faFileLines}
                    className="h-8 w-8 text-blue-600"
                  />
                </div>
                <h3 className="mt-6 text-xl font-medium text-textColor">
                  Easy to Use
                </h3>
                <p className="mt-2 text-center text-textColor">
                  Simple and intuitive interface for all your text manipulation
                  needs
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="h-8 w-8 text-green-600"
                  />
                </div>
                <h3 className="mt-6 text-xl font-medium text-textColor">
                  Powerful Features
                </h3>
                <p className="mt-2 text-center text-textColor">
                  Advanced text manipulation tools at your fingertips
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="h-8 w-8 text-purple-600"
                  />
                </div>
                <h3 className="mt-6 text-xl font-medium text-textColor">
                  Community Driven
                </h3>
                <p className="mt-2 text-center text-textColor">
                  Built with feedback from our amazing user community
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">GitHub</span>
                <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8 text-center text-gray-400">
              <p>&copy; 2024 Text Stylizer. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default About;
