export default function AuthComponent({isLogin}) {
    return (
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-2xl font-bold text-center mt-5">{isLogin ? "Login" : "Register"} now!</h1>
            <form className="card-body">
                {isLogin ? undefined : (
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                )}
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">{isLogin ? "Login" : "Register" }</button>
                </div>
            </form>
        </div>
    );
}