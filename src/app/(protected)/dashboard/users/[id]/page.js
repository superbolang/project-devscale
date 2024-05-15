export default function UserDetail() {
    return (
        <div className="flex flex-col">
            <div className="basis-1 card card-side bg-base-100 shadow-xl ">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" className="w-[300px]"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Name</h2>
                    <p>Email</p>
                </div>
            </div>
            
            <div className="divider basis-1">Order</div>
            <div className="basis-1">
                <div className="overflow-x-auto h-screen sticky">
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <thead>
                            <tr>
                                <th></th>
                                <td>Pet Type</td>
                                <td>Pet Image</td>
                                <td>Pet Name</td> 
                                <td>Pet Owner</td>
                                <td>Package</td> 
                                <td>Check In</td> 
                                <td>Check Out</td>
                                <td>Special Treatment</td>
                                <td>Review</td>
                                <td>Status</td>
                                <td>Action</td> 
                                <th></th> 
                            </tr>
                        </thead> 
                        <tbody>
                            <tr>
                                <th>1</th> 
                                <td>Pet Type</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 mask mask-squircle">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                </td>
                                <td>Pet Name</td> 
                                <td>Pet Owner</td>
                                <td>Package</td> 
                                <td>Check In</td> 
                                <td>Check Out</td>
                                <td>Special Treatment</td>
                                <td>Review</td> 
                                <td>
                                    <select className="select select-bordered w-full max-w-xs">
                                        <option disabled selected>Order Status</option>
                                        <option>On Process</option>
                                        <option>On Going</option>
                                        <option>Complete</option>
                                        <option>Cancel</option>
                                    </select>
                                </td> 
                                <td>
                                    <a className="btn btn-primary">Edit</a>
                                    <a className="btn btn-secondary">Delete</a>
                                </td> 
                            </tr>
                        </tbody> 
                        <tfoot>
                        <tr>
                            <th></th>
                            <td>Pet Type</td>
                            <td>Pet Image</td>
                            <td>Pet Name</td> 
                            <td>Pet Owner</td>
                            <td>Package</td> 
                            <td>Check In</td> 
                            <td>Check Out</td>
                            <td>Special Treatment</td>
                            <td>Review</td>
                            <td>Status</td>
                            <td>Action</td> 
                            <th></th> 
                        </tr>
                        </tfoot>
                    </table>
                </div>  
            </div>
        </div>
    )
}