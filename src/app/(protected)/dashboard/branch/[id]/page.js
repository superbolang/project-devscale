import { BranchDetail } from "@/components/BranchDetail"

export default function DetailBranch () {
    const data = {
        name: "aaaaa"
    }

    return (
        <div className="m-8">
            <div className="text-sm breadcrumbs ml-3 mb-3">
                <ul>
                    <li><a href="/#home">Home</a></li> 
                    <li><a href="/branch">Branch</a></li> 
                    <li><a>{data.name}</a></li> 
                </ul>
            </div>
            <BranchDetail branch={data}/>
        </div>        
    )
}