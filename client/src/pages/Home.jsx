import Hero from '../components/home/Hero';
import Banner from '../components/home/Banner';
import Features from '../components/home/Features';
import Testimonial from '../components/home/Testimonial';
import CallToAction from '../components/home/CallToAction';
import Footer from '../components/home/Footer';




const Home = () => {
	
  return (
    <div className="font-sans">
		<style>{`
		@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

		* {
			font-family: 'Poppins', sans-serif;
		}

		@keyframes spin {
			to { transform: rotate(360deg); }
		}

		@keyframes pulse {
			0%, 100% { opacity: 1; }
			50% { opacity: .5; }
		}

		.animate-spin {
			animation: spin 1s linear infinite;
		}

		.animate-pulse {
			animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
		}

		.animate-in {
			animation: slideIn 0.3s ease-out;
		}

		@keyframes slideIn {
			from {
			transform: translateY(-20px);
			opacity: 0;
			}
			to {
			transform: translateY(0);
			opacity: 1;
			}
		}

		.slide-in-from-top-5 {
			animation: slideInFromTop 0.3s ease-out;
		}

		@keyframes slideInFromTop {
			from {
			transform: translateY(-20px);
			opacity: 0;
			}
			to {
			transform: translateY(0);
			opacity: 1;
			}
		}
		`}</style>

      <Banner />
		<Hero />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />
      <Login />
    </div>
	);
}

export default Home
