import React from 'react';
import { motion } from 'framer-motion';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import "./Farm.css";

const Farm = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle">
                            <motion.h1
                                initial={{ y: "2rem", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 2,
                                    type: "spring"
                                }}
                            >
                                Farmers and Consumers
                            </motion.h1>
                        </div>
                        <div className="flexColStart hero-des">
                            <span className="secondaryText">Provide information on the best crops to grow in different regions, seasons, and soil types.</span>
                            <span className="secondaryText">Provide resources on identifying and managing common pests and diseases that affect crops.</span>
                        </div>
                        <div className="flexCenter search-bar">
                            <HiLocationMarker color="var(--blue)" size={25} />
                            <input type="text" />
                            <button className='button'>Search</button>
                        </div>
                        <div className="flexCenter stats">
                            <div className="flexColCenter stat">
                                <span>
                                    <CountUp start={8000} end={9000} duration={4} />
                                    <span>+</span>
                                </span>
                                <span className="secondaryText">Pestcide</span>
                            </div>
                            <div className="flexColCenter stat">
                                <span>
                                    <CountUp start={1950} end={2000} duration={4} />
                                    <span>+</span>
                                </span>
                                <span className='secondaryText'>Happy Customers</span>
                            </div>
                            <div className="flexColCenter stat">
                                <span>
                                    <CountUp start={0} end={21} duration={4} />
                                    <span>+</span>
                                </span>
                                <span className='secondaryText'>Award Winning</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className="flexCenter hero-right">
                    <motion.div
                        initial={{ x: "7rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "spring",
                        }}
                        className="image-container"
                    >
                        <img src='./A.png' alt='' />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Farm;
