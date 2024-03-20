import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function MainLogo() {
  return (
    <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
      <div className="mr-2">
        <Image src="/main-logo.png" alt="Main Logo" width={200} height={200} />
      </div>
    </div>
  );
}
