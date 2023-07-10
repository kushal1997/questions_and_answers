import React, { useState } from 'react'
import { useTitle } from '../../components/hooks/useTitle';

export const RaectAdvanceConcepts = () => {
  useTitle('React Advance Concepts');
  //  Question one
  const [activeWindbox1, setActiveWindbox1] = useState(false);
  const [arrow1, setArrow1] = useState(false);

  const onClick = () => {
    setActiveWindbox1(!activeWindbox1);
    setArrow1(!arrow1);
  }
  //  Question two
  const [activeWindbox2, setActiveWindbox2] = useState(false);
  const [arrow2, setArrow2] = useState(false);

  const onClick2 = () => {
    setActiveWindbox2(!activeWindbox2);
    setArrow2(!arrow2);
  }
  return (
    <div className=" mt-11 p-1  sm:ml-64 rounded-md">
      <div className="p-4 ml-10 bg-white dark:bg-[#030321]">

        <main class="p-5 bg-light-blue">
          <h1 class=" text-3xl font-semibold text-gray-800 lg:text-4xl dark:text-white">
            Advance Concepts
          </h1>
          {/* Question one  */}
          <div className="mt-8 space-y-8 lg:mt-12">
            <div className="p-8 bg-gray-100 rounded-lg border-2 dark:bg-gray-800">
              <div className="w-full">

                <h1 className=" text-start font-semibold text-gray-700 dark:text-white">
                  Q1 . How i can play for my appoinment ?
                </h1>
                <button onClick={onClick} className='flex items-center justify-between w-full'>
                  <p className='mt-6 mr-5 text-sm text-gray-500 dark:text-gray-300 indent-12 text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos officia assumenda ea
                    reiciendis error cupiditate autem, eius atque quo laboriosam soluta quis eveniet labore
                    voluptatem sit, ipsa, aliquam amet!
                  </p>
                  <div className={arrow1 ? 'rotate-180' : 'rotate-0'}>
                    <span className="  text-sm " id="arrow">
                      <img width="60" height="60" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                    </span>
                  </div>
                </button>
              </div>

              <div className={activeWindbox1 ? 'show' : 'hidden'}>
                <div className='flex flex-col items-center'>
                  <p className="mt-6 text-sm text-gray-500 dark:text-gray-300 text-justify indent-12">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                    eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                    laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                    illo ducimus?
                  </p>
                  <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                  <p className="mt-6 text-sm text-gray-500 dark:text-gray-300 text-justify indent-12">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                    eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                    laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                    illo ducimus?
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Question two  */}

          <div className="mt-8 space-y-8 lg:mt-12">
            <div className="p-8 bg-gray-100 rounded-lg border-2 dark:bg-gray-800">
              <div className="w-full">

                <h1 className=" text-start font-semibold text-gray-700 dark:text-white">
                  Q2 . How i can play for my appoinment ?
                </h1>
                <button onClick={onClick2} className='flex items-center justify-between w-full'>
                  <p className='mt-6 mr-5 text-sm text-gray-500 dark:text-gray-300 indent-12 text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos officia assumenda ea
                    reiciendis error cupiditate autem, eius atque quo laboriosam soluta quis eveniet labore
                    voluptatem sit, ipsa, aliquam amet!
                  </p>
                  <div className={arrow2 ? 'rotate-180' : 'rotate-0'}>
                    <span className="  text-sm " id="arrow">
                      <img width="60" height="60" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                    </span>
                  </div>
                </button>
              </div>

              <div className={activeWindbox2 ? 'show' : 'hidden'}>
                <div className='flex flex-col items-center'>
                  <p className="mt-6 text-sm text-gray-500 dark:text-gray-300 text-justify indent-12">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                    eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                    laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                    illo ducimus?
                  </p>
                  <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                  <p className="mt-6 text-sm text-gray-500 dark:text-gray-300 text-justify indent-12">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                    eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                    laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                    illo ducimus?
                  </p>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}
