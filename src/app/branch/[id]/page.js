import { BranchDetail } from "@/components/BranchDetail"
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';

export default async function DetailBranch ({params}) {
    const cookieStore = cookies();

    // 1. Cek apakah ada  token di cookies
    const token = cookieStore.get('token');

    let decodeData = undefined;
    if (token != undefined) {
        jwt.verify(token.value, 'thisissecretkey');

        decodeData = jwt.decode(token.value);
    }
  
    const req = await fetch(process.env.NEXT_PUBLIC_BASE_API_URL + '/api/v1/branch/' + params.id , {
        method: 'GET',
    }, { cache: 'no-store' })

    const {data} = await req.json()

    return (
        <div className="m-8">
            <div className="text-sm breadcrumbs ml-3 mb-3">
                <ul>
                    <li><a href="/#home">Home</a></li> 
                    <li><a href="/branch">Branch</a></li> 
                    <li><a>{data.branchName}</a></li> 
                </ul>
            </div>
            <BranchDetail branch={data} isLogin={decodeData?.name != undefined} />
        </div>        
    )
}