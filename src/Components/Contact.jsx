import { Typewriter } from 'react-simple-typewriter';
import doodle from '../assets/doodle.svg';

const Contact = () => {
	const handleType = (count) => {
		// access word count number
		console.log(count);
	  };
	
	  const handleDone = () => {
		console.log(`Done after 5 loops!`);
	  };
    return (
        <div className=" min-h-screen">
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  dark:text-gray-800">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
		<h1 style={{ paddingTop: '2rem', margin: 'auto 0', fontWeight: 'bold', textAlign: 'left', fontSize: '3rem' }}>
		Let's{' '}
              <span style={{ color: '#2f7dfc', fontWeight: 'bold' }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                   words={['talk!', 'talk!', 'talk!', 'talk!', 'talk!']}
                  loop={5}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={handleDone}
                  onType={handleType}
                />
              </span>
            </h1>
			
			<div className="">Want to discuss with us? Feel free to contact.</div>
		</div>
		<img src={doodle} alt="" className="p-6 h-52 md:h-64" />
	</div>
	<form noValidate="" className="space-y-6">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#2f7dfc] text-white">Send Message</button>
	</form>
</div>
        </div>
    );
};

export default Contact;