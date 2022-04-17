import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-800 flex flex-col items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 w-full items-start">
        <div className="flex flex-col items-center justify-center mb-4 sm:m-0">
          <h4 className="font-semibold text-xl pb-3 ">Tutorial app</h4>
          <Link href="/">
            <a>
              <img src="/logos/logo.png" alt="Tutorial app" width="90" />
            </a>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center mb-4 sm:m-0">
          <h4 className="font-semibold text-xl pb-3">Sections</h4>
          <div className="flex flex-col items-center">
            <Link href="/sections/education">
              <a className="mb-2 hover:text-white">Education</a>
            </Link>
            <Link href="/sections/entertainment">
              <a className="mb-2 hover:text-white">Entertainment</a>
            </Link>
            <Link href="/sections/home">
              <a className="mb-2 hover:text-white">Home</a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-3 sm:m-0">
          <h4 className="font-semibold text-xl pb-3">Social</h4>
          <div className="flex">
            <a
              href="https://www.instagram.com/isaijesus23/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center hover:text-white mx-3"
            >
              <span className="fab fa-instagram text-2xl"></span>
              <p>Instagram</p>
            </a>
            <a
              href="https://twitter.com/isaijesus02"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center hover:text-white mx-3"
            >
              <span className="fab fa-twitter text-2xl"></span>
              <p>Twitter</p>
            </a>
            <a
              href="https://github.com/isaijesus"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center hover:text-white mx-3"
            >
              <span className="fab fa-github text-2xl"></span>
              <p>Github</p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="font-bold pt-4">Tutorial App By Isai Jesus</p>
      </div>
    </footer>
  );
}