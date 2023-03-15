import React , {Suspense,lazy}from "react";

const Cat = lazy(() => import('../../components/Cat'))


const GeneralApp = () => {

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <h1>General App</h1>
      <Cat />
      </Suspense>
    </>
  );
};

export default GeneralApp;
