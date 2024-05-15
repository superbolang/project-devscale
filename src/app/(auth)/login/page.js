import AuthComponent from "@/components/auth/AuthComponent";

export default async function Login() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <AuthComponent isLogin={true}/>

                <div className="text-center lg:text-left invisible lg:visible">
                    <img src="/Hero-image.png" className="max-w-[300px] rounded-lg" />
                </div>
            </div>
        </div>
    );
}