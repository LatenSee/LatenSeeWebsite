import Image from 'next/image';
import latensee from '@/images/logos/latensee.png';

export function Logo() {
  return (
    <div className="logo-container flex justify-start items-center">
      <Image src={latensee} alt="LatenSee logo" width={75} height={75}/>
      <h2 className="font-bold">
        LatenSee
      </h2>
    </div>
  )
}
