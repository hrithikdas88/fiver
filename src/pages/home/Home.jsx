import React from 'react'
import './home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/Slide/Slide'
import CatCard from '../../components/catCard/CatCard'
import { cards, projects } from '../../data';
import ProjectCard from '../../components/projectCard/ProjectCard'



const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card=>(
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The best part? Everything.</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Stick to your budget
            </div>
            <p>
            Find the right service for every price point. No hourly rates, just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get quality work done quickly

            </div>
            <p>
            Hand your project over to a talented freelancer in minutes, get long-lasting results.


            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Count on 24/7 support

            </div>
            <p>
            Our round-the-clock support team is available to help anytime, anywhere.


            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Pay when you're happy

            </div>
            <p>
            Upfront quotes mean no surprises. Payments only get released when you approve.


            </p>
          </div>
          <div className="item">
            <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" controls></video>
          </div>
        </div>
      </div>

     {/* 2nd feature */}

     <div className="features dark">
        <div className="container">
          <div className="item">
          <h1>
              Fiverr <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Liverr Business</button>
          </div>
          <div className="item">
          <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />

          </div>
        </div>

        
      </div>
      

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map(card=>(
          <ProjectCard key={card.id} item={card}/>
        ))}
      </Slide>
    </div>
  )
}

export default Home