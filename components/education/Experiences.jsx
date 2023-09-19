function Experience({ title, date, place }) {
  return (
    <p className="text-lg font-semibold text-white">
      <span className="text-xl font-bold text-primary-200">{date}</span> {title}
      <br />
      <span className="text-lg font-normal text-white opacity-80">{place}</span>
    </p>
  )
}

function Experiences() {
  return (
    <div className="flex flex-col gap-6">
      <Experience
        title="Développeur web"
        date="2023-2024"
        place="Marquardt, Rietheim, Allemagne (remote)"
      />
      <Experience title="Stage ingénieur" date="2022-2022" place="Marquardt, Rietheim, Allemagne" />
      <Experience title="École d'ingénieur" date="2021-2024" place="ESEO, Angers, France" />
      <Experience title="Classe préparatoire" date="2019-2021" place="ESEO, Angers, France" />
    </div>
  )
}

export default Experiences
