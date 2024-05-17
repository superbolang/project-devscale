export default function DashboardUser() {
    return (
        <div className="my-8">
            <div className="text-sm breadcrumbs ml-3 mb-3">
                <ul>
                    <li><a href="/dashboard">Dashboard</a></li> 
                    <li><a>User List</a></li> 
                </ul>
            </div>
            <div className="overflow-x-auto h-screen sticky">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                        <tr>
                            <th></th>
                            <td>Image</td>
                            <td>Name</td> 
                            <td>Email</td> 
                            <td>Role</td> 
                            <td>Action</td> 
                            <th></th> 
                        </tr>
                    </thead> 
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                              <div className="avatar">
                                  <div className="w-24 mask mask-squircle">
                                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                  </div>
                              </div>
                            </td>
                            <td>Cy Ganderton</td> 
                            <td>Email</td> 
                            <td>Role</td> 
                            <td className="flex flex-row gap-2"> 
                                <a className="btn btn-primary">Show</a>
                                <a className="btn btn-primary">Edit</a>
                                <a className="btn btn-secondary">Delete</a>
                            </td> 
                        </tr>
                    </tbody> 
                    <tfoot>
                        <tr>
                            <th></th>
                            <td>Image</td>
                            <td>Name</td> 
                            <td>Email</td> 
                            <td>Role</td> 
                            <td>Action</td> 
                            <th></th> 
                        </tr>
                    </tfoot>
                </table>
            </div>  
        </div>
    )
}