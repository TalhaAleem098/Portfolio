import Header from '@/components/Header';
import ResumeClient from '@/components/ResumeClient';
import Footer from '@/components/Footer';

// Enable ISR for the resume page
export const revalidate = 7200; // Revalidate every 2 hours

export const metadata = {
  title: 'Resume - Aleem Talha',
  description: 'Professional resume of Aleem Talha - Full Stack Developer specializing in MERN Stack, Next.js, and Django.',
};

const ResumePage = () => {
  return (
    <>
      <Header />
      <ResumeClient />
      <Footer />
    </>
  );
};

export default ResumePage;
