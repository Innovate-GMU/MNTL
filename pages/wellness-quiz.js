/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import WellnessForm from "components/Forms/WellnessAssessment/WellnessAssessmentForm.js";
import Head from "next/head";

export default function WellnessQuiz() {
  return (
    <>
      <Head>
        <title>Wellness Quiz</title>
      </Head>
      <IndexNavbar fixed />
      <div className="header relative pt-16 items-center flex ">
        <div className="container mx-auto justify-center flex">
          <div className="w-full px-4 my-4">
            {/* //FIXME: Formink */}

            <WellnessForm />


          </div>
        </div>
      </div>

      {/* Spacing for footer */}
      <div className="py-8" />


      <Footer />
    </>
  );
}
