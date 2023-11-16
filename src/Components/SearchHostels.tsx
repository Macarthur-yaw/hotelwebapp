import vectorImg from '../assets/Vector.svg'
const SearchHostels = () => {
    return (
      <div className='mt-20'>
        <div className='bg-[#E9F3FF] py-8 rounded-xl shadow-sm p-4 w-[85%] mx-auto flex flex-col gap-8'>
          <span className='text-center flex flex-col gap-2'>
            <h1 className='text-3xl font-semibold'>
              Book a room
            </h1>
            <h2 className='text-[#5E5E5E] text-sm font-semibold text-center'>
              Discover the perfect space for you!
            </h2>
          </span>
  
          <section className='flex flex-row items-end justify-around'>
            <span className='flex flex-col gap-2'>
              <h1 className='font-semibold'>Date</h1>
              <input type='calendar' className='w-full p-2 rounded-md border-2 border-gray-300' />
            </span>
  
            <span className='flex flex-col gap-2'>
              <h1 className='font-semibold'>Persons</h1>
              <div className='flex flex-row border-2 bg-white border-white rounded-md w-full p-2 gap-4'>
                <div className='flex flex-row items-center gap-4'>
                  <div className='flex flex-row gap-2'>
                    <img src={vectorImg} alt='Adults Icon' className='w-[18%]' />
                    Adults
                  </div>
                  <div>
                    <select className='border-2 border-gray-300 rounded-md p-1'>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
  
                <div className='flex flex-row items-center gap-4'>
                  <div className='flex flex-row gap-2'>
                    <img src={vectorImg} alt='Children Icon' className='w-[18%]' />
                    Children
                  </div>
                  <div>
                    <select className='border-2 border-gray-300 rounded-md p-1'>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
              </div>
            </span>
  
            <button className='p-2 font-semibold bg-blue-400 rounded-md text-white w-[14%]'>
              BOOK NOW
            </button>
          </section>
        </div>
      </div>
    );
  };
  
  export default SearchHostels;
  