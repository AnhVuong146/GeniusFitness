import React from "react";
import "./maleroutine.css";
// import { Link } from "react-router-dom";
// import Footer from "../../pages/Homepage/footer/Footer";
// import Nav from "../../pages/Homepage/nav/Nav";
import BenchPress from "../../assets/benchpressspot.jpg";
import Footer1 from "../Footer1/Footer1";
import { AiFillYoutube } from "react-icons/ai";
import { PiArticleFill } from "react-icons/pi";
import Nav1 from "../../pages/MaleRoutine/Nav1/Nav1";

const MaleRoutine = () => {
    return (
        <div>
            <div className="MaleRoutine-background">
                <div className="nav1-bar">
                    <Nav1 />
                    <div className="text3-overlay">
                        <link rel="stylesheet" href="styles.css" />
                        <link
                            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
                            rel="stylesheet"
                        />
                        <header>
                            <div className="MaleRoutine-h1">
                                <h1>PUSH PULL LEGS SPLIT</h1>
                            </div>

                            <p>
                                The Push, Pull, Legs split is widely acclaimed and frequently
                                utilized by bodybuilders for its remarkable effectiveness. This
                                training split is highly effective as it enables targeting each
                                muscle group twice per week, promoting rapid growth and
                                strengthening throughout the entire body. This split requires 4 to 6
                                days of training per week.
                            </p>
                        </header>

                        <div className="workouts-container">
                            <div className="workouts-list">
                                {/* ----------------------PULL WORKOUT SECTION---------------------- */}
                                <section id="Push">
                                    <h2>Push Workouts</h2>
                                    <ul>
                                        <li>
                                            <img
                                                src="https://www.inspireusafoundation.org/wp-content/uploads/2022/04/barbell-bench-press.gif"
                                                alt="Workout 1"
                                            />

                                            <div>
                                                <h3>Workout 1: Option 1</h3>
                                                <h4>Barbell Bench Press</h4>
                                                <div className="description">
                                                    <p>
                                                        This exercise is a highly effective exercise
                                                        renowned for the overall chest-targeting area. This
                                                        staple of strength training is favored for its
                                                        capacity to handle substantial weights, enabling the
                                                        pursuit of personal records and individual fitness
                                                        goals. When performing this exercise there are three
                                                        types of sets that you can choose from: PR(Personal
                                                        Record) 1 rep max, Top Set meaning a set of 4 to 5
                                                        reps with heavy weight, and lastly Repping Set which
                                                        is a set where you do 8 to 12 reps with moderate
                                                        weight. Try performing this exercise for 3 to 5
                                                        sets. NOTE: completing both options is good. 
                                                    </p>
                                                </div>
                                                <div className="video-buttons">
                                                    <a href="https://www.verywellfit.com/how-to-do-the-bench-press-exercise-3498278">
                                                        <PiArticleFill />
                                                    </a>
                                                    <a href="https://www.youtube.com/shorts/0cXAp6WhSj4">
                                                        <AiFillYoutube />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <img
                                                src="https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Press.gif"
                                                alt="Workout 2"
                                            />
                                            <div>
                                                <h3>Workout 1: option 2</h3>
                                                <h4>Dumbell Bench Press</h4>
                                                <div className="description">
                                                    <p>
                                                        This exercise is renowned for its highly effective
                                                        targeting of the overall chest area. When performed
                                                        with dumbbells, it emphasizes hypertrophy, making it
                                                        an ideal choice for muscle growth rather than
                                                        primarily focusing on strength training. Since this
                                                        exercise is so effective for hypertrophy, performing
                                                        from 8 to 10 reps is the ideal rep range for 3 or 4
                                                        sets. NOTE: completing both options is good. 
                                                    </p>
                                                </div>
                                                <div className="video-buttons">
                                                    <a href="https://barbend.com/dumbbell-bench-press/">
                                                        <PiArticleFill />
                                                    </a>
                                                    <a href="https://www.youtube.com/shorts/dKkiGIM0Ff0">
                                                        <AiFillYoutube />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <img
                                                src="https://newlife.com.cy/wp-content/uploads/2019/11/00471301-Barbell-Incline-Bench-Press_Chest_360.gif"
                                                alt="Workout 1"
                                            />
                                            <div>
                                                <h3>Workout 2: Option 1</h3>
                                                <h4>Barbell Incline Bench Press</h4>
                                                <div className="description">
                                                    <p>
                                                        This exercise effectively enhances the appearance of
                                                        the chest, lending a substantial and pronounced
                                                        shape even beneath clothing. Primarily focusing on
                                                        the upper chest with a slight emphasis on the front
                                                        part of the shoulder, this workout encourages
                                                        controlled weight handling and encourages the
                                                        utilization of a full range of motion for optimal
                                                        results. The same concept goes for both flat barbell
                                                        bench press and barbell incline bench press as
                                                        barbell focuses more on strength training over
                                                        hypertrophy. When performing this exercise there are
                                                        three types of sets that you can choose from:
                                                        PR(Personal Record) 1 rep max, Top Set meaning a set
                                                        of 4 to 5 reps with heavy weight, and lastly Repping
                                                        Set which is a set where you do 8 to 12 reps with
                                                        moderate weight. Try performing this exercise for 3
                                                        to 5 sets.
                                                    </p>
                                                </div>
                                                <div className="video-buttons">
                                                    <a href="https://barbend.com/incline-barbell-bench-press/">
                                                        <PiArticleFill />
                                                    </a>
                                                    <a href="https://www.youtube.com/shorts/MRmeUet5VUw">
                                                        <AiFillYoutube />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <img
                                                src="https://www.inspireusafoundation.org/wp-content/uploads/2022/09/dumbbell-incline-chest-press.gif"
                                                alt="Workout 1"
                                            />
                                            <div>
                                                <h3>Workout 2: Option 2</h3>
                                                <h4>Dumbell Incline Bench Press</h4>
                                                <div className="description">
                                                    <p>
                                                        This exercise effectively enhances the appearance of
                                                        the chest, lending a substantial and pronounced
                                                        shape even beneath clothing. Primarily focusing on
                                                        the upper chest with a slight emphasis on the front
                                                        part of the shoulder, this workout encourages
                                                        controlled weight handling and encourages the
                                                        utilization of a full range of motion for optimal
                                                        results. The same concept goes for both flat dumbell
                                                        bench press and dumbell incline bench press as
                                                        dumbell focuses more on hypertrophy. Since this
                                                        exercise is so effective for hypertrophy, performing
                                                        from 8 to 10 reps is the ideal rep range for 3 or 4
                                                        sets. over strengh training.
                                                    </p>
                                                </div>
                                                <div className="video-buttons">
                                                    <a href="https://www.verywellfit.com/how-to-do-incline-dumbbell-press-4588212">
                                                        <PiArticleFill />
                                                    </a>
                                                    <a href="https://www.youtube.com/shorts/abUlkiDaSCo">
                                                        <AiFillYoutube />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <img
                                                src="https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif"
                                                alt="Workout 1"
                                            />
                                            <div>
                                                <h3>Workout 3</h3>
                                                <h4>Dumbell Shoulder Press</h4>
                                                <div className="description">
                                                    <p>
                                                        Given the shoulder's three distinct parts, the back,
                                                        middle, and front. This exercise hones in on the
                                                        front shoulder region. It stands as an exceptional
                                                        choice for both shoulder strength and front shoulder
                                                        mass targeting. When executing this exercise,
                                                        prioritize weight control and execute a full range
                                                        of motion for optimal outcomes. The ideal rep range
                                                        for this exercise is from 6 to 10 for 3 to 4 sets
                                                        depending on your weight.
                                                    </p>
                                                </div>
                                                <div className="video-buttons">
                                                    <a href="https://www.youtube.com/shorts/0cXAp6WhSj4">
                                                        <PiArticleFill />
                                                    </a>
                                                    <a href="https://www.youtube.com/shorts/dyv6g4xBFGU">
                                                        <AiFillYoutube />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <img
                                                src="https://homeworkouts.org/wp-content/uploads/anim-dumbbell-lateral-raise.gif"
                                                alt="Workout 1"
                                            />
                                            <div>
                                                <h3>Workout 4</h3>
                                                <h4>Lateral Raise</h4>
                                                <div className="description">
                                                    <p>
                                                        This exercise effectively engages the middle part of
                                                        the shoulder. During execution, it is essential to
                                                        choose a weight that enables complete control
                                                        throughout the repetition, avoiding any reliance on
                                                        leg or arm momentum to swing the weight. Emphasize
                                                        steady, controlled reps, and refrain from raising
                                                        the weight excessively above your ear level. For
                                                        optimal results, aim for a rep range of 12 to
                                                        failure for 2 to 4 sets.
                                                    </p>
                                                </div>
                                                <div className="video-buttons">
                                                    <a href="https://www.youtube.com/shorts/0cXAp6WhSj4">
                                                        <PiArticleFill />
                                                    </a>
                                                    <a href="https://www.youtube.com/shorts/G-piLwLu0d4">
                                                        <AiFillYoutube />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                {/* ----------------------PULL WORKOUT SECTION---------------------- */}

                                <section id="Pull">
                                    <h2>Pull Workouts</h2>
                                    <ul>
                                        <li>
                                            <img
                                                src="https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bent-Over-Row.gif"
                                                alt="Workout 1"
                                            />

                                            <div>
                                                <h3>Workout 1</h3>
                                                <h4>Barbell Bent Over Row</h4>
                                                <div className="description">
                                                    <p>
                                                        This exercise primarily targets the entire back
                                                        region, making it one of the most effective
                                                        exercises for strengthening back muscles. To
                                                        maximize its benefits, avoid using momentum to swing
                                                        the weight excessively. Performing this exercise
                                                        with underhand would also work and targets the back
                                                        differently. For optimal results, aim for a
                                                        controlled rep range of 8 to 12 repetitions,
                                                        completing 3 to 4 sets.
                                                    </p>
                                                </div>
                                                <div className="video-buttons">
                                                    <a href="https://www.youtube.com/shorts/0cXAp6WhSj4">
                                                        <PiArticleFill />
                                                    </a>
                                                    <a href="https://www.youtube.com/shorts/Nqh7q3zDCoQ">
                                                        <AiFillYoutube />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <img
                                                src="https://fitnessprogramer.com/wp-content/uploads/2021/06/close-grip-cable-row.gif"
                                                alt="Workout 2"
                                            />
                                            <div>
                                                <h3>Workout 2</h3>
                                                <h4>Cable Row</h4>
                                                <div className="description">
                                                    <p>
                                                        This exercise predominantly targets the entire lat
                                                        muscle, offering excellent benefits. To optimize its
                                                        effectiveness, focus on performing each repetition
                                                        steadily and with full control. Imagine the motion
                                                        of pulling a string to start a lawnmower. This
                                                        exercise could be performed with either both or
                                                        single arm row. For ideal results, aim for a rep
                                                        range of 8 to 12 repetitions, completing 2 to 4
                                                        sets.
                                                    </p>
                                                </div>
                                                <div className="video-buttons">
                                                    <a href="https://www.youtube.com/shorts/0cXAp6WhSj4">
                                                        <PiArticleFill />
                                                    </a>
                                                    <a href="https://www.youtube.com/shorts/PUn0V_ukuUo">
                                                        <AiFillYoutube />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <img
                                                src="https://www.inspireusafoundation.org/wp-content/uploads/2022/11/pull-up.gif"
                                                alt="Workout 1"
                                            />
                                            <div>
                                                <h3>Workout 3</h3>
                                                <h4>Pull Ups</h4>
                                                <div className="description">
                                                    <p>
                                                        Pull-ups are widely recognized and widely practiced
                                                        in military, army, and marines training due to their
                                                        exceptional effectiveness in developing a
                                                        substantial back, enhancing body control, and
                                                        fostering back strength. This exercise
                                                        comprehensively targets the entire back, and when
                                                        performed with an underhand grip, it further engages
                                                        the biceps. For optimal results, be sure to go above
                                                        your chin level and strive for a rep range of 8
                                                        repetitions to failure, completing 2 to 4 sets.
                                                        However, it is worth noting that some individuals
                                                        may overuse this exercise as a primary component of
                                                        their pull/back day workouts.
                                                    </p>
                                                </div>
                                                <div className="video-buttons">
                                                    <a href="https://www.youtube.com/shorts/MRmeUet5VUw">
                                                        <PiArticleFill />
                                                    </a>
                                                    <a href="https://www.youtube.com/shorts/IZMKe61144w">
                                                        <AiFillYoutube />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <img
                                                src="https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif"
                                                alt="Workout 1"
                                            />
                                            <div>
                                                <h3>Workout 4</h3>
                                                <h4>Dumbell Row</h4>
                                                <div className="description">
                                                    <p>
                                                        The Dumbbell Row is a targeted exercise that
                                                        primarily engages the lat muscles. Similar to the
                                                        cable row, it involves using dumbbells instead. To
                                                        ensure optimal performance, concentrate on
                                                        controlling the weight and directing the pull with
                                                        your lats rather than relying on your biceps. Some
                                                        individuals may experience bicep soreness due to
                                                        improper elbow adjustments. For further guidance and
                                                        details, please refer to the instructional video
                                                        below. For ideal results, aim for a rep range of 8
                                                        to 12 repetitions across 3 to 4 sets.
                                                    </p>
                                                </div>
                                                <div className="video-buttons">
                                                    <a href="https://www.youtube.com/shorts/0cXAp6WhSj4">
                                                        <PiArticleFill />
                                                    </a>
                                                    <a href="https://www.youtube.com/shorts/KaCcBqhiXtc">
                                                        <AiFillYoutube />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                {/* ----------------------LEGS WORKOUT SECTION---------------------- */}
                                <section id="Legs">
                                    <h2>Legs Workouts</h2>
                                    <ul>
                                        <li>
                                            <img
                                                src="https://www.inspireusafoundation.org/wp-content/uploads/2022/03/barbell-full-squat.gif"
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
                                                src="https://www.inspireusafoundation.org/wp-content/uploads/2023/01/barbell-deadlift-front-view.gif"
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
                                                src="https://www.inspireusafoundation.org/wp-content/uploads/2022/03/bulgarian-split-spuat.gif"
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
                                                src="https://fitnessprogramer.com/wp-content/uploads/2015/11/Leg-Press.gif"
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
                                                src="https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif"
                                                alt="Workout 1"
                                            />
                                            <div>
                                                <h3>Workout 5</h3>
                                                <h4>Leg Extension</h4>
                                                <div className="description">
                                                    <p>
                                                        The Leg Extension is a focused quad-targeted
                                                        exercise exclusively intended for hypertrophy.
                                                        Bodybuilders frequently incorporate this exercise to
                                                        enhance quad size and accelerate quad growth. The
                                                        primary objective of this exercise is to intensely
                                                        engage the quads, aiming for a minimum of 10
                                                        repetitions until reaching muscle failure, and
                                                        completing 2 to 4 sets. The intensity of the burn
                                                        experienced during the exercise signifies its
                                                        effectiveness in achieving desired outcomes.
                                                    </p>
                                                </div>
                                                <div className="video-buttons">
                                                    <a href="https://www.youtube.com/shorts/0cXAp6WhSj4">
                                                        <PiArticleFill />
                                                    </a>
                                                    <a href="https://www.youtube.com/shorts/D1Zn0mBw4DE">
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

export default MaleRoutine;
