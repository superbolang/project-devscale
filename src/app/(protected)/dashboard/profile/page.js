export default function Profile() {
  return (
    <div>
      <div className="text-sm breadcrumbs ml-2">
  <ul>
    <li><a>Dashboard</a></li> 
    <li><a>Profile</a></li> 
  </ul>
</div>
<form className="card-body min-w-sm grid place-content-center">
<div className="avatar">
  <div className="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
  <div className="form-control">
      <label className="label">
          <span className="label-text">Name</span>
      </label>
      <input type="text" placeholder="name" className="input input-bordered" required />
  </div>

<div className="form-control">
  <label className="label">
      <span className="label-text">Email</span>
  </label>
  <input type="email" placeholder="email" className="input input-bordered" disabled/>
</div>
<div className="form-control">
  <label className="label">
      <span className="label-text">New Password</span>
  </label>
  <input type="password" placeholder="password" className="input input-bordered" required />
</div>
  <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Pick your picture</span>
  </div>
  <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
  <div className="label">
  </div>
</label>
<div className="form-control mt-6">
  <button className="btn btn-primary">Update</button>
</div>
</form>
    </div>


  )
}

  
