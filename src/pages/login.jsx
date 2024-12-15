
const login = () => {
  return (
    <>
   <div className='flex justify-center item-center h-screen bg-indigo-400  '>
<div className='w-96 p-16 shadow-lg bg-white rounded-md '>

  <h1 className='text-3xl block text-center font-semibold'><i class="fa-solid fa-user"></i>LOGIN</h1>
  <hr className='mt-3'/>
  <div className='mt-3'>
    <label For="username" className='block text-base mb-2'>username</label>
    <input type="text"  id='username' className='border w-full text-base px-2 py-1 focud:outline-none focus:ring-0 focus:border-gray-600'placeholder='enter username'/>
  </div>
  <div className='mt-3'>
    <label For="password" className='block text-base mb-2'>password</label>
    <input type="password"  id='username' className='border w-full text-base px-2 py-1 focud:outline-none focus:ring-0 focus:border-gray-600'placeholder='enter password'/>
  </div>
  <div className='mt-3 flex justify-between item-center'>

    <div>
      <input type="checkbox"  />
      <label >Remember me</label>
    </div>
    <div>
      <a href="#">Forgot password?</a>
    </div>
  </div>
  <div className='mt-5'>
    <button type='submit' className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounde-md hover:bg-transparent hover:text-indigo-700 font-semobold '>LOGIN</button>

  </div>


</div>
   </div>
   </>
  );
};

export default login;