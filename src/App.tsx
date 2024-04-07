// @ts-nocheck
import { useState } from 'react';
import FeatureItem from './components/Modal/FeatureItem';
import logo from './assets/logo.png';
import Card from './assets/icons.svg';
import Tire1 from './assets/tire1.png';
import Tire2 from './assets/tire2.png';
import Tire3 from './assets/tire3.png';
import Sevice1 from './assets/service1.png';
import Sevice2 from './assets/service2.png';
import Sevice3 from './assets/service3.png';
import IconSevice1 from './assets/iconSevice1.svg';
import IconSevice2 from './assets/iconSevice2.svg';
import IconSevice3 from './assets/iconSevice3.svg';
import BackSevice1 from './assets/car1.png';
import BackSevice2 from './assets/car2.png';
import Read1 from './assets/read1.webp';
import Read2 from './assets/read2.webp';
import Read3 from './assets/read3.webp';
import Read4 from './assets/read4.webp';
import Read5 from './assets/read5.webp';
import Read6 from './assets/read6.webp';
import FooterIcon1 from './assets/footer/footer1.svg'
import FooterIcon2 from './assets/footer/footer2.svg'
// import FooterIcon3 from './assets/footer/footer3.svg'
import FooterIcon4 from './assets/footer/footer4.svg'
import FooterIcon5 from './assets/footer/footer5.svg'
// import FooterIcon6 from './assets/footer/footer6.svg'
import './App.css'
import './reset.css'
import Carousel from './components/Carousel/Carousel';
import MobileNav from './components/Nav/mobileNav';
import { sendMessage } from './services/api/sendMessage';


interface TireCardProps {
  title: string;
  image: string;
 }

 const MyContent = () => (
  <div className='modal__container'>
    <p>inding the tire size for your vehicle is a straightforward process. Here's a step-by-step guide:</p>
    <p><span>1. Check the sidewall of your current tires:</span> The tire size is typically printed on the sidewall of each tire. Look for a series of numbers and letters that indicate the tire size.</p>
    <p><span>2. Look for the tire size format</span>: The tire size is usually expressed in a format like this: P215/65R15. Here's what each part of the size represents:</p>
    <li><span>P:</span> This indicates the tire is for a passenger vehicle. It might be replaced with "LT" for light truck tires.</li>
    <li><span>215:</span> This number represents the tire's width in millimeters from sidewall to sidewall height is 65% of the tire's width.</li>
    <li><span>R</span>: This letter indicates the tire's construction type, usually "R" for radial.</li>
    <li><span>15</span>: This number is the diameter of the wheel in inches.</li>
    <p><span>3. Check the owner's manual:</span> If you can't find the tire size on the sidewall or if you want to confirm, consult your vehicle's owner's manual. It typically contains information about the recommended tire size for your specific vehicle model.</p>
    <p><span>4. Check the door jamb sticker:</span> Sometimes, the tire size is also listed on a sticker located on the driver's side door jamb. This sticker usually provides information about the recommended tire size, tire pressure, and other specifications for your vehicle.</p>
    <p><span>5. Use online resources:</span> If you still can't find the tire size or if you're unsure, you can use online resources such as tire manufacturer websites or tire size calculators. These tools often allow you to input your vehicle's make, model, and year to find the recommended tire size.</p>
  </div>
);

const MyContent2 = () => (
  <div className='modal__container'>
    <p>inding the tire size for your vehicle is a straightforward process. Here's a step-by-step guide:</p>
    <p><span>1. Tread Depth:</span> Tires have built-in tread wear indicators (usually bars) that become visible as the tire wears down. The minimum legal tread depth is often 2/32 of an inch. However, for safety reasons, it's recommended to replace tires before they reach this point. Most experts suggest replacing tires when the tread depth reaches 4/32 of an inch or less, especially for wet weather traction.</p>
    <p><span>2. Tread Wear Patterns:</span> Uneven wear patterns such as cupping, scalloping, or excessive wear on one side can indicate alignment or suspension issues. If you notice these patterns, it's best to have your tires inspected by a professional.</p>
    <p><span>3. Age of the Tires:</span> Tires degrade over time, even if they have plenty of tread left. The rubber compounds can dry out and become brittle, leading to reduced traction and increased risk of blowouts. As a general guideline, tires should be replaced every 6-10 years, regardless of tread depth, depending on factors such as climate and storage conditions.</p>
    <p><span>4. Visible Damage:</span> Inspect your tires regularly for any signs of damage such as cuts, cracks, bulges, or punctures. These can compromise the structural integrity of the tire and increase the risk of a blowout. If you notice any damage, it's best to replace the tire immediately.</p>
    <p><span>5. Driving Conditions:</span> If you frequently drive in harsh conditions such as extreme heat, cold, or rough terrain, your tires may wear out more quickly. In such cases, you may need to replace them sooner than the standard guidelines suggest.</p>
    <p><span>6. Manufacturer Recommendations:</span> Check your vehicle owner's manual or consult the tire manufacturer's recommendations for specific guidelines on when to replace your tires. They may provide additional insights based on your vehicle and tire specifications.</p>
  </div>
);

const MyContent3 = () => (
  <div className='modal__container'>
    <p>Determining how many tires you need depends on your vehicle's configuration and the condition of your existing tires. Here are some general guidelines:</p>
    <p><span>1. Vehicle Type:</span> Most passenger vehicles have four tires - one for each wheel. However, some vehicles, like motorcycles or bicycles, may have fewer. Larger vehicles like trucks, SUVs, or vans typically have four or more tires, often including a spare.</p>
    <p><span>2. Tire Condition:</span> If you're replacing tires due to wear, damage, or age, you'll need to replace the affected tires. In most cases, it's recommended to replace tires in pairs (both front or both rear) or all four at once for optimal performance and safety. Mixing tires with different levels of wear can affect handling and stability.</p>
    <p><span>3. Spare Tire:</span> If your vehicle comes with a spare tire, it's important to consider its condition as well. Spare tires often have limited use and may need replacement if they're old, damaged, or have been used previously. If you're replacing one or more tires, it's a good idea to inspect the spare tire and replace it if necessary.</p>
    <p><span>4. Special Cases:</span> Some vehicles have unique configurations that require a specific number of tires. For example, some sports cars have staggered tire sizes, with larger tires in the rear than in the front. In such cases, you'll need to replace tires according to the vehicle's specifications.</p>
    <p><span>5. Tire Rotation:</span> Regular tire rotation can help ensure even wear across all tires. If you've been rotating your tires regularly, you may only need to replace a subset of them. Consult your vehicle's owner's manual or a qualified mechanic for guidance on tire rotation patterns and intervals.</p>
    <p><span>6. Consult a Professional:</span> If you're unsure about how many tires you need or the condition of your tires, it's best to consult a professional mechanic or tire specialist. They can inspect your tires, assess their condition, and recommend the appropriate course of action.</p>
  </div>
);

const MyContent4 = () => (
  <div className='modal__container'>
    <p>Choosing the right tires for your vehicle is essential for safety, performance, and comfort. Here are several factors to pay attention to when selecting tires:</p>
    <p><span>1. Tire Size:</span> The tire size is typically printed on the sidewall of each tire. Look for a series of numbers and letters that indicate the tire size.</p>
    <li><span>All-season tires</span> Suitable for a wide range of weather conditions and road surfaces</li>
    <li><span>Summer tires:</span> Designed for optimal performance in dry and wet conditions, but not recommended for snow or ice.</li>
    <li><span>Winter tires:</span> Provide superior traction in snow, ice, and cold temperatures.</li>
    <li><span>Performance tires:</span> Offer enhanced handling, cornering, and braking capabilities, ideal for sports cars and enthusiastic driving.</li>
    <li><span>Off-road tires:</span> Designed for use on rough terrain, providing traction and durability for off-road adventures.</li>
    <p><span>2. Budget:</span> Consider your budget and choose tires that offer the best balance of performance, durability, and value within your price range.</p>
    <p><span>3. Tread Life:</span> Look for tires with a tread compound and pattern designed for durability and longevity. Tread life warranties provided by manufacturers can give you an idea of the expected lifespan of the tires</p>
    <p><span>4. Reviews and Ratings:</span> Research tire brands and models online, read reviews from other drivers, and check independent tire ratings from organizations like Consumer Reports or Tire Rack to help inform your decision.</p>
  </div>
);

const MyContent5 = () => (
  <div className='modal__container'>
    <p>Maintaining proper tire pressure is essential for safety, fuel efficiency, and tire longevity. Here are some guidelines for when to check and adjust tire pressure:</p>
    <p><span>1. Monthly:</span> It's a good habit to check your tire pressure at least once a month, even if your tires appear to be properly inflated. Fluctuations in temperature and normal air seepage can cause tire pressure to drop over time.</p>
    <p><span>2. Seasonally:</span> Tire pressure can fluctuate with changes in temperature, so it's especially important to check it at the beginning of each season. As temperatures drop in colder months, tire pressure tends to decrease, while it can increase during warmer months. Adjust tire pressure accordingly to ensure optimal performance.</p>
    <p><span>3. Before Long Trips:</span> Before embarking on a long journey, check your tire pressure to ensure they're properly inflated. This is particularly important for highway driving, as underinflated tires can lead to reduced fuel efficiency and increased risk of tire failure.</p>
    <p><span>4. After Significant Changes:</span> If you've recently replaced or rotated your tires, had tire repairs, or experienced a significant change in weather conditions, it's a good idea to check your tire pressure to ensure it's within the recommended range.</p>
    <p><span>5. Abnormal Handling or Wear:</span> If you notice your vehicle pulling to one side, uneven tire wear, or if you experience a sudden loss of tire pressure, check your tire pressure immediately. These could be signs of underinflation, overinflation, or other issues that need to be addressed promptly.</p>
    <p><span>6. TPMS Warning Light Activation:</span> Many modern vehicles are equipped with a Tire Pressure Monitoring System (TPMS) that alerts you when tire pressure is significantly low. If the TPMS warning light illuminates on your dashboard, check your tire pressure as soon as possible and inflate them to the recommended level.</p>
  </div>
);

const MyContent6 = () => (
  <div className='modal__container'>
    <p>Proper tire storage is essential for preserving tire quality and performance, especially if you're storing them for an extended period. Here are some tips for storing tires:</p>
    <p><span>1. Clean the Tires:</span> Before storing your tires, ensure they are clean and free of dirt, debris, and brake dust. Use mild soap and water to clean them, and allow them to dry completely before storage.</p>
    <p><span>2. Inspect for Damage:</span> Check the tires for any signs of damage, such as cuts, punctures, bulges, or uneven wear. If you notice any issues, have them inspected by a professional before storing them.</p>
    <p><span>3. Store in a Cool, Dry Place:</span> Choose a cool, dry, and well-ventilated storage area away from direct sunlight, heat sources, and moisture. Excessive heat and moisture can accelerate tire degradation.</p>
    <p><span>4. Stacking:</span> If you need to stack tires, stack them horizontally, with the heaviest tires at the bottom. Avoid stacking tires too high, as this can lead to deformation and damage.</p>
    <p><span>5. Regularly Check Tire Pressure:</span> Periodically check the tire pressure during storage, ideally every month. Inflate the tires to the recommended pressure if necessary, as tires can lose pressure over time.</p>
    <p><span>6. Rotate Tires:</span> If storing tires for an extended period, rotate them every 6-12 months to prevent flat spotting and ensure even wear.</p>
    <p><span>6. Avoid Ozone and Electrical Devices:</span> Store tires away from sources of ozone, such as electric motors, generators, and transformers. Ozone can cause rubber to deteriorate over time.</p>
  </div>
);


function App() {

  const articles = [
    { title: 'How to find a tire size?', imgSrc: Read1, ContentComponent: MyContent },
    { title: 'When to replace your tires?', imgSrc: Read2, ContentComponent: MyContent2 },
    { title: 'How do I know how many tires I need?', imgSrc: Read3, ContentComponent: MyContent3 },
    { title: 'What to pay attention when choosing tires?', imgSrc: Read4, ContentComponent: MyContent4 },
    { title: 'When should I pressure my tires?', imgSrc: Read5, ContentComponent: MyContent5 },
    { title: 'Tire storage tips', imgSrc: Read6, ContentComponent: MyContent6 },

  ];

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
     setIsHovered(true);
  };
 
  const handleMouseLeave = () => {
     setIsHovered(false);
  };

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const tireCards: TireCardProps[] = [
     { title: 'Truck', image: Tire1 },
     { title: 'Summer', image: Tire2 },
     { title: 'All-Season', image: Tire3 },
  ];

  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formattedMessage = `<b>Tires: </b>\n
      <b>Email: </b>${email}\n`;

    sendMessage(formattedMessage).then((res) => {
      if (res.ok) {
        setEmail('');
        setIsSubmitted(true);
      }
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };


  return (
    <>
    <div className="background__one">
    <header className='header'>
        <div className="container">
          <div className="navbar">
            <div className='navbar__position'>
              <img src={logo} alt="" />
              <a href="#" className="nav__item">About</a>
              <a href="#" className="nav__item">Contact</a>
              <a href="#" className="nav__item nav__btn__one">Shop Tires</a>
            </div>
            <div className='navbar__position'>
              <a href="#" className="nav__item red">Stores</a>
              <a href="#" className="nav__item nav__btn__two">
                <img src={Card} alt="" />
                Card
                </a>
            </div>
          </div>
        
          <div className='mobileNav'>
          <img src={logo} alt="" />
        <MobileNav />
        </div>
        </div>
      </header>

<section className="title__header">
  <div className="container">
  <h1>Welcome to LEONTIRES</h1>
  <p>Your premier destination for high-quality tires that ensure safety, performance, and durability on every road.We offer a comprehensive range of tires to suit diverse needs and preferences: from all-season tires engineered for versatility and longevity to specialized tires designed for specific terrain and weather conditions, we've got you covered. Our range includes tires for different types of vehicles, so every driver will find the perfect option for their vehicle.</p>
  </div>
</section>

<section className="tires__slider">
  <div className="container">
    <h1>Featured Tires Catalog</h1>
    <div className="tires__carousel">
      {tireCards.map((card, index) => (
        <div
          key={index}
          className={`tire__card ${index === activeIndex ? 'active' : 'noActive'}`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <h2>{card.title}</h2>
          <img src={card.image} alt={card.title} />
        </div>
      ))}
    </div>
    <div className="tires__carousel_2">
    <Carousel>
      {tireCards.map((card, index) => (
        <div
          key={index}
          className={`tire__card ${'noActive'}`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <h2>{card.title}</h2>
          <img src={card.image} alt={card.title} />
        </div>
      ))}
      </Carousel>
    </div>
  </div>
</section>
<section className="table">
  <div className="container">
    <h1 className='tab__h'>Focus on the good times, we’ll handle the rest</h1>
    <div className="table__container">
    <Carousel>
      <div className="table__card">
        <h1>Passenger cares</h1>
        <div className="table__card__container">
          <div className="table__item">
          <div className='left'>
            <p>Tire size 15”, 16”</p>
            </div>
            <div className='right'>
            <p>$100 reg. tires</p>
            <p>$120 run-flat tires</p>
            </div>
          </div>
          <div className="table__item">
          <div className='left'>
            <p>Tire size 17”, 18”,</p>
            <p>19”</p>
            </div>
              <div className='right'>
            <p>$120 reg. tires</p>
            <p>$140 run-flat tires</p>
              </div>
          </div>
          <div className="table__item">
          <div className='left'>
            <p>Tire size 20”</p>
            <p>& up”</p>
            </div>
            <div className='right'>
            <p>$140 reg. tires</p>
            <p>$160 run-flat tires</p>
            </div>
          </div>
          <div className="table__item">
          <div className='left'>
            <p>Wheel balance</p>
            <p>(1 tire)</p>
            </div>
            <div className='right'>
            <p>$10</p>
            </div>
          </div>
          <div className="table__item">
          <div className='left'>
            <p>Wheel rotation </p>
            <p>(4 tire)</p>
            </div>
            <div className='right'>
            <p>$40</p>
            </div>
          </div>
          <div className="table__item">
          <div className='left'>
          <p>Tire disposal fee</p>
          </div>
          <div className='right'>
            <p>$5</p>
            </div>
          </div>
        </div>
      </div>
      <div className="table__card">
        <h1>Vans & Suv’s</h1>
        <div className="table__card__container">
          <div className="table__item">
          <div className='left'>
            <p>Tire size 15”, 16”</p>
            <p>19”, 20*</p>
            </div>
            <div className='right'>
            <p>$140 reg. tires</p>
            <p>$160 run-flat tires</p>
            </div>
          </div>
          <div className="table__item">
          <div className='left'>
            <p>Tire size 20”</p>
            <p>& up”</p>
            </div>
            <div className='right'>
            <p>$160 reg. tires</p>
            <p>$180 run-flat tires</p>
            </div>
          </div>
          <div className="table__item">
          <div className='left'>
            <p>Wheel balance</p>
            <p>(1 tire)</p>
            </div>
            <div className='right'>
            <p>$15</p>
            </div>
          </div>
          <div className="table__item">
          <div className='left'>
            <p>Wheel rotation </p>
            <p>(4 tire)</p>
            </div>
            <div className='right'>
            <p>$60</p>
            </div>
          </div>
          <div className="table__item">
          <div className='left'>
          <p>Tire disposal fee</p>
          </div>
          <div className='right'>
            <p>$7</p>
            </div>
          </div>
        </div>
      </div>
      <div className="table__card">
        <h1>Trucks</h1>
        <div className="table__card__container">
          <div className="table__item">
          <div className='left'>
            <p>Any tire size</p>
            </div>
            <div className='right'>
            <p>$160 & up</p>
            <p>$120 run-flat tires</p>
            </div>
          </div>
          <div className="table__item">
          <div className='left'>
            <p>Tire size 20”</p>
            <p>& up”</p>
            </div>
            <div className='right'>
            <p>$140 reg. tires</p>
            <p>$160 run-flat tires</p>
            </div>
          </div>
          <div className="table__item">
          <div className='left'>
            <p>Wheel balance</p>
            <p>(1 tire)</p>
            </div>
            <div className='right'>
            <p>$20</p>
            </div>
          </div>
          <div className="table__item">
          <div className='left'>
            <p>Wheel rotation </p>
            <p>(4 tire)</p>
            </div>
            <div className='right'>
            <p>$60</p>
            </div>
          </div>
          <div className="table__item">
          <div className='left'>
          <p>Tire disposal fee</p>
          </div>
          <div className='right'>
            <p>$7</p>
            </div>
          </div>
        </div>
      </div>
      <div className="table__card">
        <h1>Additional services</h1>
        <div className="table__card__container">
          <div className="table__item">
          <div className='left'>
            <p>Wheel lug </p>
            <p>nut removal</p>
            </div>
            <div className='right'>
            <p>$10 per tire</p>
            <p>$120 run-flat tires</p>
            </div>
          </div>
          <div className="table__item">
          <div className='left'>
            <p>Tire repair</p>
            </div>
              <div className='right'>
            <p>$10 & up</p>
              </div>
          </div>
          <div className="table__item">
          <div className='left'>
            <p>TPMS sensor </p>
            <p>change</p>
            </div>
            <div className='right'>
            <p>$10 TPMS sensor</p>
            <p>$40 TPMS sensor</p>
            </div>
          </div>
          <div className="table__item">
          <div className='left'>
            <p>Aftermarket </p>
            <p>wheels mounts</p>
            </div>
            <div className='right'>
            <p>$25 per tire</p>
            </div>
          </div>
          <div className="table__item">
          <div className='left'>
            <p>Valve change</p>
            </div>
            <div className='right'>
            <p>$10 per value</p>
            </div>
          </div>
          <div className="table__item">
          <div className='left'>
          <p>Air leak check</p>
          </div>
          <div className='right'>
            <p>$15 per tire</p>
            </div>
          </div>
        </div>
      </div>
      </Carousel>
    </div>
  </div>
</section>
</div>
<section className="services">
      <div className="container">
        <h1 className='serv__h'>Services</h1>
        <p className='serv__p'>
          We dedicated to providing top-notch service and approaches each tire replacement job with meticulous attention to detail and a commitment our customer satisfaction. With years of hands-on experience, we has honed 
          our skills to perfection, ensuring precision and efficiency in every task they undertake
        </p>
        <div className="service__cards">
          <div className="service__card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={IconSevice1} alt="Service" className="icon" />
            <img src={Sevice1} alt="Service" className={isHovered ? 'show' : 'hide'} />
            <h1 className={isHovered ? 'hide' : 'show'}>Service</h1>
            <p className={isHovered ? 'hide' : 'show'}>Tire change includes mounting and balancing</p>
          </div>
          <div className="service__card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={IconSevice2} alt="Own delivery" className="icon" />
            <img src={Sevice2} alt="Own delivery" className={isHovered ? 'show' : 'hide'} />
            <h1 className={isHovered ? 'hide' : 'show'}>Own delivery</h1>
            <p className={isHovered ? 'hide' : 'show'}>For your convenience, we will deliver your tires to any convenient place for you</p>
          </div>
          <div className="service__card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={IconSevice3} alt="Select Payment" className="icon" />
            <img src={Sevice3} alt="Select Payment" className={isHovered ? 'show big' : 'hide'} />
            <h1 className={isHovered ? 'hide' : 'show'}>Select Payment</h1>
            <p className={isHovered ? 'hide' : 'show'}>Choose a convenient payment method from the provided ones</p>
          </div>
        </div>
      </div>
      <div className='services__back'>
        <img className='BackSevice1' src={BackSevice1} alt="" />
        <img className='BackSevice2' src={BackSevice2} alt="" />
      </div>
    </section>

    <section className="feature">
      <div className="container">
        <h1 className='feature__h'>Feature Articles</h1>
        <div className="feature__container">
        {articles.map((article, index) => (
            <FeatureItem key={index} title={article.title} imgSrc={article.imgSrc} ContentComponent={article.ContentComponent} />
          ))}
        </div>
      </div>
    </section>

    <div className="background__two">
      <footer className='footer'>
        <div className="container">
      <form id='form' onSubmit={handleSubmit}>
        <h1>Sign up for offers & more</h1>
        <p>Subscribe to our newsletter and receive special offers at a bargain price!</p>
        <input className='form__input' required type="email" placeholder='EMAIL' value={email} onChange={(e) => setEmail(e.target.value)}/>
      </form>
      <div className='footer__icons'>
      <a href="tel:+18579192463"><img src={FooterIcon1} alt="FooterIcon1" /></a>
      <a href="https://maps.app.goo.gl/EgjVuWchtZXHGrGQ7?g_st=ic"><img className='f__i' src={FooterIcon2} alt="FooterIcon2" /></a>
          {/* <img src={FooterIcon3} alt="FooterIcon3" /> */}
          <a 
          href="https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2FLeontires%3Ffbclid%3DPAAaYWx-UZpaqRlwT3gMEga0PqbQf4A-0pxXue3SCs-ihEqkxyZWVmu3EcQoU_aem_AUTqW6GUUBTKOGC1cr6i6-o3cPpuSVL_yr6th07wgRJcLmm6k-a9BV2Q3KlpKovDvwE&e=AT167QTh1CB9MXqtk3WL7zCyadlSHmPbWn2t2dD607xy6-rsisaxwWRd4wd9oBuCm0AWjXagaHMdl4M2KXtd9XRA2IHHztztKZMyik0"
          ><img src={FooterIcon4} alt="FooterIcon4" /></a>
          {/* <img src={FooterIcon5} alt="FooterIcon5" /> */}
          {/* <img src={FooterIcon6} alt="FooterIcon6" /> */}
      </div>
      <div className='footer__links'>
        <a href="#">Terms & Conditions</a>
        <a href="#" className='footer__border'>Privacy Policy</a>
        <a href="#" className='footer__border'>your privacy choices</a>
        <a href="#" className='footer__border'>Accessibility</a>
        <a href="#" className='footer__border'>FAQs</a>
        <a href="#" >Contact Us</a>
      </div>
      <div className='offthegrid'>
      <a href="https://offthegridlab.com/">MADE BY OFFTHEGRID</a>
      </div>
      </div>
      </footer>
    </div>


    </>
  )
}

export default App
