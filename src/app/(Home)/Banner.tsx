import React from 'react'

function Banner() {
  return (
    <div className="relative h-screen  bg-blue-900 bg-[url('/main-page-frame.svg')] bg-center bg-cover bg-no-repeat text-white">
    <div className="absolute inset-0 bg-[#0046E5]/10" />
    <div className="container relative mx-auto px-4 py-16">
      <h1 className=" text-3xl text-center lg:text-left lg:text-5xl font-bold my-5">Welcome to Global Salaah</h1>
      
      <div className="max-w-3xl">
        <h2 className="mb-4 lg:text-2xl text-xl text-center lg:text-left font-semibold">Hadith of the Day</h2>
        <p className="lg:text-lg text-sm lg:text-left text-center leading-relaxed">
        Abu Hurairah (May Allah be pleased with him) reported: The Messenger of Allah (ﷺ) said, "Whoever removes a worldly grief from a believer, Allah will remove one of the griefs of the Day of Resurrection from him. Whoever alleviates the need of a needy person, Allah will alleviate his needs in this world and the Hereafter. Whoever shields (or hides the misdeeds of) a Muslim, Allah will shield him in this world and the Hereafter. Allah will aid a servant (of His) so long as the servant aids his brother.
        </p>
        <p className="mt-4 text-sm opacity-75">[Sahih Muslim 2699]</p>
      </div>
    </div>
  </div>
  )
}

export default Banner