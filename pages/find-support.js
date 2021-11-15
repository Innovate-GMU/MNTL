import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

// accessible at .../find-support/
export default function findsupport() {
  return (
    <>
      <IndexNavbar fixed />

      <section className="header relative m-24 pt-48 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-10 sm:pt-0">
              <h2 className="font-semibold text-6xl text-blueGray-600 pt-20 pl-5">
                Find Support
              </h2>
              <p className="pl-5 pt-6 ">
                Click on the cards below to explore each topic.
              </p>
            </div>

          </div>
          {/* CONTAINER FOR EACH CARD */}
          <div className="container p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

            {/* CARD 1 */}
            <a href="/find-support/physical">
              <div className="rounded overflow-hidden shadow-2xl">
                {/* IMAGE */}
                <img className="inset-0 h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80"
                  style={{ height: "200px", width: "500px" }}
                />
                {/* CONTENT */}
                <div className="px-6 py-4">
                  <h5 className="text-2xl font-bold leading-normal mt-0 mb-2 text-blueGray-800">
                    Physical Wellness
                  </h5>
                  <p className="text-gray-700 text-base">
                    Learn more here.
                  </p>
                </div>
              </div>
            </a> {/* END CARD 1 */}

            {/* CARD 1 */}
            <a href="/find-support/social">
              <div className="rounded overflow-hidden shadow-2xl">
                {/* IMAGE */}
                <img className="inset-0 h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80"
                  style={{ height: "200px", width: "500px" }}
                />
                {/* CONTENT */}
                <div className="px-6 py-4">
                  <h5 className="text-2xl font-bold leading-normal mt-0 mb-2 text-blueGray-800">
                    Social Wellness
                  </h5>
                  <p className="text-gray-700 text-base">
                    Learn more here.
                  </p>
                </div>
              </div>
            </a> {/* END CARD 1 */}

            {/* CARD 1 */}
            <a href="/find-support/emotional">
              <div className="rounded overflow-hidden shadow-2xl">
                {/* IMAGE */}
                <img className="inset-0 h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80"
                  style={{ height: "200px", width: "500px" }}
                />
                {/* CONTENT */}
                <div className="px-6 py-4">
                  <h5 className="text-2xl font-bold leading-normal mt-0 mb-2 text-blueGray-800">
                    Emotional Wellness
                  </h5>
                  <p className="text-gray-700 text-base">
                    Learn more here.
                  </p>
                </div>
              </div>
            </a> {/* END CARD 1 */}

            {/* CARD 1 */}
            <a href="/find-support/academic">
              <div className="rounded overflow-hidden shadow-2xl">
                {/* IMAGE */}
                <img className="inset-0 h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80"
                  style={{ height: "200px", width: "500px" }}
                />
                {/* CONTENT */}
                <div className="px-6 py-4">
                  <h5 className="text-2xl font-bold leading-normal mt-0 mb-2 text-blueGray-800">
                    Academic Wellness
                  </h5>
                  <p className="text-gray-700 text-base">
                    Learn more here.
                  </p>
                </div>
              </div>
            </a> {/* END CARD 1 */}

            {/* CARD 1 */}
            <a href="/find-support/career">
              <div className="rounded overflow-hidden shadow-2xl">
                {/* IMAGE */}
                <img className="inset-0 h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80"
                  style={{ height: "200px", width: "500px" }}
                />
                {/* CONTENT */}
                <div className="px-6 py-4">
                  <h5 className="text-2xl font-bold leading-normal mt-0 mb-2 text-blueGray-800">
                    Career Wellness
                  </h5>
                  <p className="text-gray-700 text-base">
                    Learn more here.
                  </p>
                </div>
              </div>
            </a> {/* END CARD 1 */}

          </div> {/* END CONTAINER FOR CARDS */}
        </div>
      </section>

      <div className="pb-64"></div>
      <Footer />
    </>
  );
}