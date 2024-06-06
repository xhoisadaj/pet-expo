import React from 'react';

function Modal({ data, apiPath, setIsOpen }) {
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="fixed inset-0 z-50 flex  items-center justify-center overflow-y-auto overflow-x-hidden outline-none backdrop-blur-sm focus:outline-none">
        <div className="relative w-full max-w-3xl rounded-lg bg-emerald-800 p-10 text-lime-100">
          <button
            onClick={handleClose}
            className="absolute right-2 top-2 px-3 pb-2 text-2xl font-extrabold opacity-50 hover:rounded-full hover:bg-emerald-600 hover:opacity-100"
          >
            x
          </button>
          {apiPath === 'birds' && <BirdModal data={data} />}
          {apiPath === 'cats' && <CatModal data={data} />}
          {apiPath === 'dogs' && <DogModal data={data} />}
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-60"></div>
    </>
  );
}

function BirdModal({ data }) {
  return (
    <div className=" text-left text-xl">
      <h1 className="mb-3 text-center text-3xl font-semibold uppercase tracking-widest">
        {data.name}
      </h1>
      <p className="mb-3 font-medium italic">"{data.description}"</p>

      <p className="font-thin">
        <span className="font-medium">Species: </span>
        {data.species}
      </p>

      <p className="font-thin">
        <span className="font-medium">Family: </span>
        {data.family}
      </p>

      <p className="font-thin">
        <span className="font-medium">Habitat: </span>
        {data.habitat}
      </p>
      <p className="font-thin">
        <span className="font-medium">Diet: </span>
        {data.diet}
      </p>
      <p className="space-x-20 text-center text-2xl font-semibold opacity-50">
        <span>{data.weight_kg} kg</span>
        <span>{data.wingspan_cm} cm</span>
      </p>
    </div>
  );
}

function CatModal({ data }) {
  return (
    <div className=" text-left text-xl">
      <h1 className=" mb-3 text-center text-3xl font-semibold uppercase tracking-widest">
        {data.name}
      </h1>
      <p className="mb-3 font-medium italic">"{data.description}"</p>
      <p className="font-thin">
        <span className="font-medium">Temperament: </span>
        {data.temperament}
      </p>
    </div>
  );
}

function DogModal({ data }) {
  return (
    <div className=" text-left text-xl">
      <h1 className=" mb-3 text-center text-3xl font-semibold uppercase tracking-widest">
        {data.name}
      </h1>
      <p className="mb-3 font-medium italic">"{data.description}"</p>
      <p className="font-thin">
        <span className="font-medium">Lifespan: </span>
        {data.lifespan}
      </p>
      <p className="font-thin">
        <span className="font-medium">Breed group: </span>
        {data.breed_group}
      </p>

      <p className="font-thin">
        <span className="font-medium">Size: </span>
        {data.size}
      </p>
      <p className="font-thin">
        <span className="font-medium">Colors: </span>
        {data.colors.join(', ')}
      </p>
      <p className="font-thin">
        <span className="font-medium">Temperament: </span>
        {data.temperament}
      </p>
    </div>
  );
}
export default Modal;
