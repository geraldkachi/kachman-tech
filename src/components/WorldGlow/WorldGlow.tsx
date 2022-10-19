import WorldVideo from "../../assets/video.mp4"

const WorldGlow = () => {
  return (
    <section className='w-full h-[120%] mt-14'>
      <video className="object-cover h-full w-full"
        src={WorldVideo}
        autoPlay

        loop
        muted
      />

      <div className="ho">
        <button className="bg-gradient-to-t from-[var(--primary-purple)] to-[var(--primary-blue)] py-3 px-7 rounded-3xl"></button>
      </div>

    </section>
  )
}

export default WorldGlow
