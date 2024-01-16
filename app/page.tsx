import { CarCard, CustomFilter, SearchBar } from "@/components";
import Hero from "@/components/Hero";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars = await fetchCars();
  console.log(allCars);
  const isDataEmpty=!Array.isArray(allCars)|| allCars.length<1||!allCars

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold ">Car catalogue</h1>
          <p className="">Explore all cars</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {/*  */}
        {!isDataEmpty ? (
          <section className="">
            <div className="home__cars-wrapper">
              {allCars?.map((car) => <CarCard car={car} />)}
            </div>
          </section>
        ) : (
            <div className="home__error-container">
              <h1 className="text-xl">Oops, no result</h1>
              <p className="">{ allCars?.message}</p>
            </div>
        )}
      </div>
    </main>
  );
}
