import { Link } from "@remix-run/react";

const AboutPage = () => {

  return (
    <div className=" divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          About
        </h1>
      </div>

      <div className="grid sm:grid-cols-1 md:gap-1 lg:grid-cols-1 pt-8">
        <section className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">About me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aut dolorum magni reprehenderit perferendis fugiat assumenda fugit illo ducimus dicta facere vero velit, quae ab nisi suscipit nam, animi iste?</p>
          <p>I also have a thing for mantaining and refactoring old legacy applications used everyday by a lot of people to get their things done.</p>
        </section>
        <section className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">About this site</h2>
          <p>This website is the fourth-<em>ish</em> iteration of my stubborness of doing something frontend related. It's powered by <Link to="https://remix.run/">Remix</Link> and kindly hosted on <Link to="https://vercel.com">Vercel</Link>. It's been coded half on a Mac and half on a old pimped Thinkpad T480s belonged to someone at Astra Zeneca.</p>
          <p><b>Disclaimer:</b> I did not steal it. Instead I just bought from a reseller on eBay for a summer project and upgraded like crazy.</p>
          <p>While coding on in I really feel pride it would have done something more useful like finding a vaccine for COVID-19 than running my software.</p>
          <p>Feel free to clone or fork it from <Link to="https://github.com" target="_blank">GitHub</Link>.</p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
