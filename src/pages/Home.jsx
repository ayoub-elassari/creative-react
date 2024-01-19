import React from 'react';

import Header from '../partials/Header';
import Hero from '../partials/Hero';
import Inspiration from '../partials/Inspiration';
import Carousel from '../partials/Carousel';
import Creatives from '../partials/Creatives';
import Pricing from '../partials/Pricing';
import Testimonials from '../partials/Testimonials';
import Faqs from '../partials/Faqs';
import Blog from '../partials/Blog';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <Hero />
        <Inspiration />
        <Carousel />
        <Creatives />
        <Pricing />
        <Testimonials />
        <Faqs />
        <Blog />
        <Cta />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;