// import './index.stylesheet.css';
import './index.scss';
import profileImage from '../../assets/images/home/profileImage.png';

export const Home = () => {
  return (
    <section className="hero-section">
      <div className="circle circle-large"></div>
      <div className="circle circle-small"></div>

      <div className="text-content">
        <p className="role">UI/UX Design and QA Tester</p>
        <h1 className="name">FIKRI ZAKKA</h1>
      </div>

      <div className="image-content">
        <img
          src={profileImage}
          alt="Fikri Zakka Profile"
          className="profile-pic"
        />
      </div>

      <div className="quote-content">
        <p className="quote-mark">“</p>
        <p className="summary-text">
          I&apos;m a dedicated and results-driven UI/UX designer and tester with
          a Bachelor's degree in Information Systems from Universitas
          Pembangunan Nasional Veteran Jakarta.
        </p>
      </div>
    </section>
  );
};
