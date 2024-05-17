import { ModalBranch } from "@/components/branch/ModalBranch"
import getConfig from "next/config"

const { serverRuntimeConfig } = getConfig();

export default function DashboardBranch() {
    const branch = {}


  return (
      <div className="my-8">
          <div className="text-sm breadcrumbs ml-3 mb-3">
              <ul>
                  <li><a href="/dashboard">Dashboard</a></li> 
                  <li><a>Branch List</a></li> 
              </ul>
          </div>
          <div>
            <label htmlFor="add-branch" className="btn mb-3">Add Branch</label>
            <ModalBranch modalId={"add-branch"} config={serverRuntimeConfig} />
          </div>
          <div className="overflow-x-auto h-screen sticky">
              <table className="table table-xs table-pin-rows table-pin-cols">
                  <thead>
                      <tr>
                          <th></th>
                          <td>Branch Name</td>  
                          <td>City</td> 
                          <td>Address</td> 
                          <td>Branch Image</td> 
                          <td>Action</td> 
                          <th></th> 
                      </tr>
                  </thead> 
                  <tbody>
                      <tr>
                          <th>1</th> 
                          <td>Cy Ganderton</td> 
                          <td>Quality Control Specialist</td> 
                          <td>Quality Control Specialist</td> 
                          <td>
                              <div className="avatar">
                                  <div className="w-24 mask mask-squircle">
                                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                  </div>
                              </div>
                          </td>
                          <td className="flex flex-row gap-2">
                              <a href={"/branch/branch-slug"} className="btn btn-primary">Show</a>
                              <label htmlFor="edit-branch" className="btn">Edit</label>
                              <ModalBranch modalId={"edit-branch"} branch={branch} isEdit={true} config={serverRuntimeConfig} />
                              <a className="btn btn-secondary">Delete</a>
                          </td> 
                      </tr>
                  </tbody> 
                  <tfoot>
                  <tr>
                      <th></th>
                      <td>Branch Name</td>  
                      <td>City</td> 
                      <td>Address</td> 
                      <td>Branch Image</td> 
                      <td>Action</td> 
                      <th></th> 
                  </tr>
                  </tfoot>
              </table>
          </div>  
      </div>
  )
}