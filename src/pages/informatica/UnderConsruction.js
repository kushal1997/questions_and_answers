import Image from "../../assets/images/under_maintenance.png"
import { useTitle } from "../../components/hooks/useTitle";

export const UnderConsruction = () => {
    useTitle(`Page Under Development`);
  return (
    <main>
          <section className="flex flex-col justify-center px-2 m-36">
              <div className="flex flex-col items-center my-4 mx-6  ">
              <p className=" text-emerald-200 font-bold text-4xl underline-offset-1 justify-items-center ">Please Go Back</p>
                  <div className="max-w-lg">
                      <img className="" src={Image} alt="Page Under Development" />
                  </div>
              </div>
          </section>
      </main>
  )
}
