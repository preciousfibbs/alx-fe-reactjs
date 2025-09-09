import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

export default function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <Header />
      <MainContent />
      <UserProfile
        name="Alice"
        age={25}
        bio="Loves hiking and photography"
      />
      <Counter />
      <Footer />
    </div>
  );
}
