import Image from 'next/image'

function LogoList() {
  return (
    <div className="flex flex-col gap-14">
      <div className="flex gap-10">
        <Image src="/assets/logos/html.svg" height={100} width={120} />
        <Image src="/assets/logos/css.svg" height={100} width={120} />
        <Image src="/assets/logos/javascript.svg" height={100} width={120} />
        <Image src="/assets/logos/react.svg" height={100} width={120} />
      </div>
      <div className="flex gap-10">
        <Image src="/assets/logos/svelte.svg" height={100} width={120} />
        <Image src="/assets/logos/java.svg" height={100} width={120} />
        <Image src="/assets/logos/nextjs.svg" height={100} width={120} />
        <Image src="/assets/logos/spring.svg" height={100} width={120} />
      </div>
    </div>
  )
}

export default LogoList
