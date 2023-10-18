import React, { useEffect } from "react";
import "./amenities.css";
import "./amenData.js";
import id1 from "../../Images/amen-1.png";
import id2 from "../../Images/amen-2.png";
import id3 from "../../Images/amen-3.png";
import id4 from "../../Images/amen-4.png";
import id5 from "../../Images/amen-5.png";
import id6 from "../../Images/amen-6.png";
import id7 from "../../Images/amen-7.png";
import id8 from "../../Images/amen-8.png";
import id9 from "../../Images/amen-9.png";
import id10 from "../../Images/amen-10.png";
import id11 from "../../Images/amen-11.png";
import id12 from "../../Images/amen-12.png";
import id13 from "../../Images/amen-13.png";
import id14 from "../../Images/amen-14.png";
import id15 from "../../Images/amen-15.png";
import id16 from "../../Images/amen-16.png";
import id17 from "../../Images/amen-17.png";
import id18 from "../../Images/amen-18.png";
import id19 from "../../Images/amen-19.png";
import id20 from "../../Images/amen-20.png";
import id21 from "../../Images/amen-21.png";

export default function Main(){
    useEffect(() => {
        function scrollToHashSection() {
          const sectionId = window.location.hash.substring(1);
          const sectionElement = document.getElementById(sectionId);
    
          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" });
          }
        }
    
        scrollToHashSection();
        window.addEventListener("hashchange", scrollToHashSection);
    
        return () => {
          window.removeEventListener("hashchange", scrollToHashSection);
        };
        }, []);    

      return(
        <div className="main px-20">
            <h2 className="text-center text-6xl font-bold mb-[92px]">Infograph</h2>
            <section id="Càfe" className="sect">
            <div>
              <img src={id1} width="450px" alt="img" className="py-8" />
            </div>
            <div className="textwrite">
              <h1 className="texthead">Càfe</h1>
              <p>Our cafe is a charming and inviting space where you can take a break, meet with friends, or simply unwind in style.

              At our cafe, we serve a carefully curated selection of gourmet coffee, refreshing beverages, and delicious snacks. Whether you prefer a classic cappuccino or a soothing herbal tea, our skilled baristas are here to craft your perfect drink. The cafe also offers a delectable menu of pastries, sandwiches, and light bites, ensuring you stay energized and satisfied during your visit.

              Our cafe is not just about great food and drinks; it's a social hub within our club. It's a place to connect with fellow members, discuss club activities, or simply relax after a workout or game. With a cozy ambiance and comfortable seating, it's the ideal spot to have casual meetings or catch up on some work in a relaxed setting.

              We also host special events at the cafe, from themed parties to live music nights, making it a vibrant part of our club's social calendar. So, whether you're looking for a quick coffee fix, a cozy hangout, or a place to celebrate with friends, our cafe is here to make your club experience even more enjoyable. Come and savor the flavors of community and camaraderie at our exclusive club cafe.</p>
            </div>
            </section>

            <section id="Swimming Pool" className="sect">
            <div>
              <img src={id2} width="450px" alt="img" className="py-8" />
            </div>
            <div className="textwrite">
              <h1 className="texthead">Swimming Pool</h1>
              <p>Dive into a world of relaxation, fitness, and fun as you explore the myriad benefits that our swimming pool offers.

              Our pool is more than just a place to cool off during hot summer days; it's a hub of activity for members of all ages. Whether you're a serious swimmer looking to improve your strokes or someone who just wants to unwind in the water, our pool caters to your needs.

              For those seeking a fantastic workout, our swimming pool is the ideal place. Swimming is a full-body exercise that improves cardiovascular health, muscle strength, and flexibility. It's a low-impact activity, making it suitable for individuals of all fitness levels, including those recovering from injuries.

              Families love our pool for the endless hours of entertainment it provides. Kids can splash and play in the shallower areas, while adults can relax and socialize in the sun loungers or hot tub nearby.

              Our pool area is designed to be a tranquil oasis, with lush landscaping and comfortable seating, making it the perfect place to escape the daily grind and rejuvenate. So whether you're looking for exercise, leisure, or quality family time, our swimming pool is your go-to amenity. Come and make a splash at our club today!</p>
            </div>
            </section>

            <section id="Gym" className="sect">
            <div>
              <img src={id3} width="450px" alt="img" className="py-8" />
            </div>
            <div className="textwrite">
              <h1 className="texthead">Gym</h1>
              <p>Our gym is more than just a place to break a sweat; it's a dedicated space for you to transform your health and well-being.

              Our gym is equipped with a wide range of modern exercise machines and free weights, ensuring that you have all the tools you need to achieve your fitness goals. Whether you're a seasoned athlete or new to exercise, you'll find a welcoming environment that accommodates all fitness levels.

              Our certified trainers are here to provide guidance, support, and personalized workout plans to help you reach your objectives. We offer various fitness classes, from high-intensity interval training to yoga, allowing you to diversify your workouts and keep things interesting.

              In addition to the physical benefits, our gym fosters a sense of community. Connect with fellow members who share your fitness aspirations, and together, you can motivate one another to push your limits. Our clean, spacious, and well-ventilated facility ensures a comfortable workout experience.

              Your health and fitness are paramount to us, and our gym is here to facilitate your journey towards a healthier, stronger, and happier you. We invite you to explore our fitness center and embark on a transformative path to wellness. Your fitness goals are within reach at our club's gym.</p>
            </div>
            </section>

            <section id="Restaurant" className="sect">
            <div>
              <img src={id4} width="450px" alt="img" className="py-8" />
            </div>
            <div className="textwrite">
              <h1 className="texthead">Restaurant</h1>
              <p>As a cherished amenity, our restaurant offers a delightful dining experience within the comfort of our exclusive club environment.

              At our restaurant, we take pride in providing a diverse and delectable menu, featuring a range of culinary delights to tantalize your taste buds. From sumptuous appetizers to mouthwatering main courses and delectable desserts, our skilled chefs craft every dish with precision and a dash of creativity.

              The restaurant isn't just about food; it's a place to savor exceptional moments. Whether you're celebrating a special occasion with loved ones, enjoying a casual meal with friends, or simply seeking a peaceful dining experience, our restaurant is the perfect setting. Our attentive staff ensures that your dining experience is a memorable one, marked by exceptional service and attention to detail.

              In addition to our regular menu, we frequently host themed nights, special events, and promotions, making each visit a unique and exciting experience. So, whether you're a connoisseur of fine dining or simply seeking a convenient and welcoming place to enjoy a meal, our restaurant is the ideal spot to satisfy your cravings and create lasting memories. Come and indulge in the exquisite flavors and warm hospitality that our club restaurant has to offer.</p>
            </div>
            </section>

            <section id="Spa" className="sect">
            <div>
              <img src={id5} width="450px" alt="img" className="py-8" />
            </div>
            <div className="textwrite">
              <h1 className="texthead">Spa</h1>
              <p>A luxurious amenity at our club designed to provide you with a rejuvenating escape from the hustle and bustle of daily life. Our spa is your oasis of tranquility, offering a wide range of services and facilities to enhance your overall well-being.

              Indulge in a world of relaxation as you step into our serene spa environment. Our highly skilled and trained professionals are dedicated to providing you with an exceptional wellness experience. From massages and facials to body treatments and more, we offer a variety of spa services tailored to meet your unique needs.

              Our spa is equipped with state-of-the-art facilities, including saunas, steam rooms, and hot tubs, creating a perfect ambiance for unwinding and de-stressing. You can also take advantage of our fitness center to complement your spa experience, ensuring that you leave feeling refreshed, revitalized, and rejuvenated.

              Whether you're seeking a solo escape or planning a spa day with friends, our spa is the ideal destination. We believe in the power of self-care and well-being, and our spa is designed to be your sanctuary for relaxation, self-pampering, and rejuvenation.

              Experience the epitome of relaxation and wellness at our club's spa. We invite you to treat yourself to a spa day that will leave you feeling rejuvenated, refreshed, and ready to face the world anew.
              </p>
            </div>
            </section>

            <section id="Conference room" className="sect">
            <div>
              <img src={id6} width="450px" alt="img" className="py-8" />
            </div>
            <div className="textwrite">
              <h1 className="texthead">Conference room</h1>
              <p></p>
            </div>
            </section>

            <section id="Bowling alley" className="sect">
            <div>
              <img src={id7} width="450px" alt="img" className="py-8" />
            </div>
            <div className="textwrite">
              <h1 className="texthead">Bowling alley</h1>
              <p></p>
            </div>
            </section>

            <section id="Jacuzzi" className="sect">
            <div>
              <img src={id8} width="450px" alt="img" className="py-8" />
            </div>
            <div className="textwrite">
              <h1 className="texthead">Jacuzzi</h1>
              <p></p>
            </div>
            </section>

            <section id="Squash" className="sect">
            <div>
              <img src={id9} width="450px" alt="img" className="py-8" />
            </div>
            <div className="textwrite">
              <h1 className="texthead">Squash</h1>
              <p></p>
            </div>
            </section>

            <section id="Banquets" className="sect">
            <div>
              <img src={id10} width="450px" alt="img" className="py-8" />
            </div>
            <div className="textwrite">
              <h1 className="texthead">Banquets</h1>
              <p></p>
            </div>
            </section>

            <section id="Cricket ground" className="sect">
            <div>
              <img src={id11} width="450px" alt="img" className="py-8" />
            </div>
            <div className="textwrite">
              <h1 className="texthead">Cricket ground</h1>
              <p></p>
            </div>
            </section>

            <section id="Salon" className="sect">
            <div>
              <img src={id12} width="450px" alt="img" className="py-8" />
            </div>
            <div className="textwrite">
              <h1 className="texthead">Salon</h1>
              <p></p>
            </div>
            </section>

            <section id="Pool Table" className="sect">
            <div>
              <img src={id13} width="450px" alt="img" className="py-8" />
            </div>
            <div className="textwrite">
              <h1 className="texthead">Pool Table</h1>
              <p></p>
            </div>
            </section>

            <section id="Badminton Court" className="sect">
            <div>
              <img src={id14} width="450px" alt="img" className="py-8" />
            </div>
            <div className="textwrite">
              <h1 className="texthead">Badminton Court</h1>
              <p></p>
            </div>
            </section>

            <section id="Basketball Court" className="sect">
            <div>
              <img src={id15} width="450px" alt="img" className="py-8" />
            </div>
            <div  className="textwrite">
              <h1 className="texthead">Basketball Court</h1>
              <p></p>
            </div>
            </section>

            <section id="Arcade" className="sect">
            <div>
              <img src={id16} width="450px" alt="img" className="py-8" />
            </div>
            <div className="textwrite">
              <h1 className="texthead">Arcade</h1>
              <p></p>
            </div>
            </section>

            <section id="Bar" className="sect">
            <div>
              <img src={id17} width="450px" alt="img" className="py-8" />
            </div>
            <div className="textwrite">
              <h1 className="texthead">Bar</h1>
              <p></p>
            </div>
            </section>

            <section id="Sleeping Pods" className="sect">
            <div>
              <img src={id18} width="450px" alt="img" className="" />
            </div>
            <div className="textwrite">
              <h1 className="texthead">Sleeping Pods</h1>
              <p></p>
            </div>
            </section>

            <section id="Mini Theatre" className="sect">
            <div>
              <img src={id19} width="450px" alt="img" className="py-8" />
            </div>
            <div className="textwrite">
              <h1 className="texthead">Mini Theatre</h1>
              <p></p>
            </div>
            </section>

            <section id="Library" className="sect">
            <div>
              <img src={id20} width="450px" alt="img" className="py-8" />
            </div>
            <div className="textwrite">
              <h1 className="texthead">Library</h1>
              <p></p>
            </div>
            </section>

            <section id="Children's Play Area" className="sect">
            <div>
              <img src={id21} width="450px" alt="img" className="py-8" />
            </div>
            <div className="textwrite">
              <h1 className="texthead">Children's Play Area</h1>
              <p></p>
            </div>

            </section>
        </div>
      )
    }