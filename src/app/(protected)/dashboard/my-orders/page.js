export default function MyOrder() {
    return (
        <div className="m-3">
            <div className="text-sm breadcrumbs">
            <ul>
                <li><a>Dashboard</a></li> 
                <li><a>My Order</a></li> 
            </ul>
            </div>

            <h1 className="ml-3 text-lg ">My Order</h1>
            <div className="card card-side bg-base-100 shadow-xl mt-3">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                <div className="card-body">
                    <ul>
                        <li>Id : 1</li>
                        <li>Pet Name : </li>
                        <li>Pet Type : </li>
                        <li>Package : </li>
                        <li>Check In : </li>
                        <li>Check Out : </li>
                        <li>
                            Status : 
                            <div className="badge badge-neutral ml-1">Cancel</div>
                            <div className="badge badge-primary ml-1">On Going</div>
                            <div className="badge badge-secondary ml-1">On Procces</div>
                            <div className="badge badge-accent ml-1">Complete</div>
                        </li>
                        <li>Special Treatment : </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}