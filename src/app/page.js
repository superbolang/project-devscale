import { FormUpload } from '@/components/formUpload';
import Image from 'next/image';

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/v1/files', {
    cache: 'no-store',
  });
  const { data } = await res.json();
  const publicUrl = 'https://pub-b4d8bce428ce4efaaa2645805a673293.r2.dev/devscale/petapp';
  console.log(data);
  return (
    <div>
      <FormUpload />
      <div>
        {data.map((item) => {
          return (
            <div key={item.key}>
              <Image src={`${publicUrl}/${item.id}/${item.key}`} width={100} height={100} alt='' />
              <div>{item.key}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
