import React from "react";
import "./femaleroutine.css";
// import { Link } from "react-router-dom";
// import Footer from "../../pages/Homepage/footer/Footer";
// import Nav from "../../pages/Homepage/nav/Nav";
import BenchPress from "../../assets/benchpressspot.jpg";
import Footer1 from "../Footer1/Footer1";
import { AiFillYoutube } from "react-icons/ai";
import { PiArticleFill } from "react-icons/pi";
import Nav2 from "../../pages/FemaleRoutine/Nav2/Nav2";

const FemaleRoutine = () => {
    return (
        <div>
            <div className="FemaleRoutine-background">
                <div className="nav1-bar">
                    <Nav2 />
                    <div className="text3-overlay">
                        <link rel="stylesheet" href="styles.css" />
                        <link
                            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
                            rel="stylesheet"
                        />
                        <header>
                            <div className="FemaleRoutine-h1">
                                <h1>Legs, Glutes, Arms</h1>
                            </div>

                            <p>
                                A women's workout targeting legs, glutes, and arms focuses on
                                strengthening and toning the lower body and upper body muscles.
                                It typically includes a combination of compound exercises and
                                isolation movements to engage multiple muscle groups
                                effectively.
                            </p>
                        </header>

                        <div className="workouts-container">
                            <div className="workouts-list">
                                {/* ----------------------LEGS WORKOUT SECTION---------------------- */}
                                <section id="Legs">
                                    <h2>Legs Workouts</h2>
                                    <ul>
                                        <li>
                                            <img
                                                src="https://fitbytania.com/wp-content/uploads/2018/01/08781301-Barbell-Full-squat-with-rack_Thighs_720.gif"
                                                alt="Workout 1"
                                            />

                                            <div>
                                                <h3>Workout 1</h3>
                                                <h4>Barbell Squat</h4>
                                                <div className="description">
                                                    <p>
                                                        The Squat holds a prominent place as one of the most
                                                        renowned exercises for overall leg development and
                                                        significant hypertrophy. Its efficacy lies in the
                                                        array of foot positions available, enabling targeted
                                                        focus on various leg muscles, including the glutes,
                                                        quads, or both. Embraced by bodybuilders, Squats
                                                        allow lifting heavy weights, setting personal
                                                        records, and accomplishing fitness goals,
                                                        encompassing top sets and repetition sets. To
                                                        maximize results, aim for 1 rep for personal
                                                        records, 4 to 6 reps for top sets, and 8 to 12 reps
                                                        for repetition sets.
                                                    </p>
                                                </div>
                                                <div className="video-buttons">
                                                    <a href="https://www.realsimple.com/health/fitness-exercise/workouts/squat-form">
                                                        <PiArticleFill />
                                                    </a>
                                                    <a href="https://www.youtube.com/shorts/MLoZuAkIyZI">
                                                        <AiFillYoutube />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <img
                                                src="https://newlife.com.cy/wp-content/uploads/2018/12/22141301-Barbell-Deadlift-female_Hips_720-720x600.gif"
                                                alt="Workout 2"
                                            />
                                            <div>
                                                <h3>Workout 2</h3>
                                                <h4>Deadlift</h4>
                                                <div className="description">
                                                    <p>
                                                        The Deadlift is a renowned exercise widely
                                                        acknowledged for its exceptional leg-strengthening
                                                        benefits. While not primarily designed for
                                                        hypertrophy or muscle mass building, it shares the
                                                        limelight with Squats in numerous competitions and
                                                        record-setting endeavors, lauded for its remarkable
                                                        efficacy in fostering strength. Utilizing the
                                                        Deadlift, individuals can achieve personal records,
                                                        engage in top sets with 4 to 6 repetitions, and
                                                        perform repetition sets with 8 to 12 repetitions
                                                        spanning 4 to 6 sets.
                                                    </p>
                                                </div>
                                                <div className="video-buttons">
                                                    <a href="https://www.youtube.com/shorts/0cXAp6WhSj4">
                                                        <PiArticleFill />
                                                    </a>
                                                    <a href="https://www.youtube.com/shorts/vfKwjT5-86k">
                                                        <AiFillYoutube />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <img
                                                src="https://fitnessprogramer.com/wp-content/uploads/2021/05/Dumbbell-Bulgarian-Split-Squat.gif"
                                                alt="Workout 1"
                                            />
                                            <div>
                                                <h3>Workout 3</h3>
                                                <h4>Bulgarian Split Squat</h4>
                                                <div className="description">
                                                    <p>
                                                        This exercise is primarily aimed at targeting the
                                                        quadriceps and emphasizes hypertrophy over strength
                                                        training. It can be performed by carrying two
                                                        dumbbells on each side or utilizing a barbell to add
                                                        additional weight. For optimal results, aim for a
                                                        rep range of 8 to 12 repetitions per leg, completing
                                                        3 to 4 sets.
                                                    </p>
                                                </div>
                                                <div className="video-buttons">
                                                    <a href="https://www.youtube.com/shorts/MRmeUet5VUw">
                                                        <PiArticleFill />
                                                    </a>
                                                    <a href="https://www.youtube.com/shorts/uODWo4YqbT8">
                                                        <AiFillYoutube />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <img
                                                src="https://www.inspireusafoundation.org/wp-content/uploads/2022/10/leg-press.gif"
                                                alt="Workout 1"
                                            />
                                            <div>
                                                <h3>Workout 4</h3>
                                                <h4>Leg Press</h4>
                                                <div className="description">
                                                    <p>
                                                        The Leg Press exercise bears similarities to Squats;
                                                        however, it involves a supine position where the
                                                        user pushes the weight upward. This exercise is
                                                        highly effective for hypertrophy, allowing precise
                                                        control over each repetition and the establishment
                                                        of a safety range tailored to individual needs.
                                                        Caution should be exercised to avoid fully extending
                                                        the legs during the push, as this may lead to
                                                        potential harm or injury. Additionally, lifting the
                                                        buttocks off the seat should be avoided to prevent
                                                        back injury. To maintain proper form, utilize the
                                                        handles on both sides and keep the buttocks firmly
                                                        attached to the seat. Exercise discretion when
                                                        selecting weights. For optimal results, aim for a
                                                        rep range of 8 to 20 repetitions across 3 to 6 sets.
                                                        Note that different foot positions will target
                                                        different leg muscle groups.
                                                    </p>
                                                </div>
                                                <div className="video-buttons">
                                                    <a href="https://www.youtube.com/shorts/0cXAp6WhSj4">
                                                        <PiArticleFill />
                                                    </a>
                                                    <a href="https://www.youtube.com/shorts/RjmYBmMBmOM">
                                                        <AiFillYoutube />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <img
                                                src="https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Hip-Abduction.gif"
                                                alt="Workout 1"
                                            />
                                            <div>
                                                <h3>Workout 5</h3>
                                                <h4>Cable Leg Extension</h4>
                                                <div className="description">
                                                    <p>
                                                        The Cable Leg Extension is a widely favored exercise
                                                        among women, specifically designed to engage the
                                                        glutes and hips effectively. The key focus of this
                                                        exercise is to engage the muscles deliberately,
                                                        inducing a noticeable tension and burn throughout
                                                        each repetition while maintaining a full range of
                                                        motion.
                                                    </p>
                                                </div>
                                                <div className="video-buttons">
                                                    <a href="https://www.youtube.com/shorts/0cXAp6WhSj4">
                                                        <PiArticleFill />
                                                    </a>
                                                    <a href="https://www.youtube.com/shorts/YuRjWvGaBGI">
                                                        <AiFillYoutube />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <img
                                                src="https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hip-Thrust.gif"
                                                alt="Workout 1"
                                            />
                                            <div>
                                                <h3>Workout 6</h3>
                                                <h4>Hip Thrust</h4>
                                                <div className="description">
                                                    <p>
                                                        The Hip Thrust exercise is a highly effective and
                                                        popular movement for women, targeting the glutes and
                                                        surrounding hip muscles. To perform this exercise,
                                                        sit with your upper back against a bench or elevated
                                                        surface and place a barbell or resistance band
                                                        across your hips. With feet flat on the ground and
                                                        knees bent, lift your hips upward until your body
                                                        forms a straight line from your shoulders to your
                                                        knees. Squeeze your glutes at the top and then lower
                                                        your hips back down in a controlled manner. This
                                                        exercise helps strengthen and tone the glute
                                                        muscles, contributing to improved lower body
                                                        strength, stability, and aesthetics. It is a
                                                        valuable addition to any women's workout routine
                                                        aiming to enhance overall lower body strength and
                                                        achieve firmer, shapelier glutes. As with any
                                                        exercise, focus on proper form and start with a
                                                        comfortable weight or resistance level, gradually
                                                        increasing intensity as your strength and confidence
                                                        grow. The ideal Rep range would be 8 to 12 reps for
                                                        4 to 6 sets.
                                                    </p>
                                                </div>
                                                <div className="video-buttons">
                                                    <a href="https://www.verywellfit.com/how-to-do-a-hip-thrust-techniques-benefits-variations-5076783">
                                                        <PiArticleFill />
                                                    </a>
                                                    <a href="https://www.youtube.com/shorts/hm_UVD6SUeA">
                                                        <AiFillYoutube />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                {/* ---------------------------------ARMS WORKOUTS--------------------------------- */}

                                <section id="Arms">
                                    <h2>Arms Workouts</h2>
                                    <ul>
                                        <li>
                                            <img
                                                src="https://www.aesthetics-blog.com/wp-content/uploads/2022/05/31031301-Lever-Preacher-Curl-plate-loaded-female_Upper-Arms_720.gif"
                                                alt="Workout 1"
                                            />

                                            <div>
                                                <h3>Workout 1</h3>
                                                <h4>Biceps Machine Curl</h4>
                                                <div className="description">
                                                    <p>
                                                        This exercise stands among the finest for isolating
                                                        the biceps. Be certain to execute each repetition
                                                        with utmost control, ensuring a full range of motion
                                                        from the top position to the bottom. The ideal rep
                                                        range would be from 8 to 12 for 3 to 4 sets.
                                                    </p>
                                                </div>
                                                <div className="video-buttons">
                                                    <a href="https://www.youtube.com/shorts/0cXAp6WhSj4">
                                                        <PiArticleFill />
                                                    </a>
                                                    <a href="https://www.youtube.com/shorts/dnJ1vNlhzHY">
                                                        <AiFillYoutube />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <img
                                                src="https://liftingfaq.com/wp-content/uploads/2022/03/cable-tricep-pushdown.gif"
                                                alt="Workout 2"
                                            />
                                            <div>
                                                <h3>Workout 2</h3>
                                                <h4>Triceps Pushdown</h4>
                                                <div className="description">
                                                    <p>
                                                        This exercise targets the Triceps area on the arms.
                                                        Make sure to feel the burn on the tension as you are
                                                        doing it for reps. Be sure to go for full range of
                                                        motion and making every reps count. The ideal rep
                                                        range would be from 8 to 12 reps for 3 to 4 sets.
                                                    </p>
                                                </div>
                                                <div className="video-buttons">
                                                    <a href="https://www.youtube.com/shorts/0cXAp6WhSj4">
                                                        <PiArticleFill />
                                                    </a>
                                                    <a href="https://www.youtube.com/shorts/WjLJ7zIppXQ">
                                                        <AiFillYoutube />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Footer-bg">
                    <Footer1 />
                </div>
            </div>
        </div>
    );
};

export default FemaleRoutine;
