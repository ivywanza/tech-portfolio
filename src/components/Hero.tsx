export default function Hero(){
  return(
    <div className="flex justify-between p-10 mx-auto">
    
    <div className="flex flex-col justify-between">
      <h1 className="text-5xl font-bold ">Welcome To My Personal Portfolio Website </h1>
      <h2 className="text-4xl">Ivy Maundu</h2>
      <p>Economics & Statistics | Software Development | Business Analyst</p>
      <button className="justify-self-start bg-orange-600 w-1/2 py-3 text-2xl text-white font-semibold font-serif rounded-2xl">View Recent Projects</button>
    </div>
    <div>
      <img 
      src="/src/assets/hero.jpg" 
      alt="Reliable quality of output"
      className="w-72 md:w-96 rounded-2xl object-cover"
      />
    </div>
    
    </div>
  )
}