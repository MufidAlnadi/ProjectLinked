import RegisterModal from './components/modals/RegisterModal';
import './globals.css'
import { Inter } from 'next/font/google'
import ToasterProvider from './provider/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import Navbar from './components/navbar/Navbar';
import AuthProviders from './provider/AuthProvider';
import Footer from './components/Footer';
import PostModal from './components/modals/PostModal';
import ApplyJobModal from './components/modals/ApplyModle';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Projects Linked",
  description: "Projects Linked",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProviders>
          <Navbar />
          <main className="pt-4">
            <ToasterProvider />
            <RegisterModal />
            <LoginModal />
            <PostModal/>
            <ApplyJobModal/>
          {children}
          </main>
          <Footer/>
        </AuthProviders>
      </body>
    </html>
  );
}
