export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
    <div className="bg-white rounded-2xl shadow-lg flex w-full max-w-4xl overflow-visible p-6">

    <div className="relative w-1/2 min-h-[520px] bg-gradient-to-br from-gray-50 to-gray-300
                    rounded-3xl shadow-inner border border-gray-300/50 overflow-visible">
      <img 
        src="/animada1.webp" 
        alt="Humpty" 
        className="absolute left-1/2 -translate-x-1/2 bottom-[-16px] 
                   w-[350px] h-auto drop-shadow-xl"
          />
        </div>

        <div className="w-1/2 p-12 flex flex-col justify-between">

          <div className="text-right text-sm mb-6">
            <span className="text-gray-400">Don't have an account?</span>
            <a href="" className="ml-2 text-black font-semibold">Sign up</a>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-black">Sign in</h2>
            
            <p className="text-sm text-gray-600 mb-4">Sign in with Open account</p>
            <div className="flex space-x-3 mb-6">
              <button className="flex-1 py-2 border rounded-lg flex items-center justify-center space-x-2 bg-gray-100 hover:bg-white">
                <img src="/google.webp" className="w-6 h-6" alt="Google" />
                <span className="text-sm text-black font-semibold">Google</span>
              </button>
              <button className="flex-1 py-2 border rounded-lg flex items-center justify-center space-x-2 bg-gray-100 hover:bg-white">
                <img src="/apple.webp" className="w-6 h-6" alt="Apple" />
                <span className="text-sm text-black font-semibold">Apple ID</span>
              </button>
            </div>

            <p className="text-gray-500 text-center mb-4 font-semibold text-sm">
              Or continue with email address
            </p>
          </div> 
          <div className="space-y-3">
            <button className="w-full py-2 border rounded-lg flex items-center justify-start space-x-3 bg-gray-100 hover:bg-white px-3">
              <img src="/gmail.webp" alt="Email" className="w-8 h-8 object-cover"/>
              <span className="text-sm text-black font-semibold">tam@ul8.net</span>
            </button>
            <button className="w-full py-2 border rounded-lg flex items-center justify-start space-x-3 bg-gray-100 hover:bg-white px-3">
              <img src="/seguridad.webp" alt="Password" className="w-8 h-8 object-cover"/>
              <span className="text-sm text-black font-semibold">*********</span>
            </button>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700"
            >
              Start trading
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
