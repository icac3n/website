import {StarterLayout} from "layout";

const callOfPapers = () => {

    return (
        <div className={"prose mx-4"}>
            <h1 className={"heading"}>Call of Papers</h1>
            <p>Authors are solicited to contribute to the conference by submitting articles that illustrate research
                results- projects, surveying works and industrial experiences that describe significant advances in
                computing, communication control and Networking. Topics of interest for submission include, but are not
                limited to:</p>

            <ul>
                <li>Data Analytics, Data Science and Data Mining</li>
                <li>Machine Learning And Its Application</li>
                <li>Big Data Mining and Deep Learning</li>
                <li>Machine Learning &amp; Deep Learning in Image Processing</li>
                <li>Artificial Intelligence with Internet of Things</li>
                <li>Internet of Things (IOT) with Robotics and Automation</li>
                <li>Artificial Intelligence with Natural Language Processing and Fuzzy Logic</li>
                <li>Artificial Neural Networks and Convolution Neural Networks</li>
                <li>Signals and Systems, VLSI Design, Antennas &amp; Embedded Systems</li>
                <li>Computer Networks, Wireless Sensor Networks and Mobile Communication</li>
                <li>Network Security, Internet of Things (IoT) Security, Cloud Security and Cyber Security</li>
                <li>Parallel and Distributed Systems, Cloud Computing, Green Computing &amp; Block Chain Technology</li>
                <li>Computer Systems, Software Engineering &amp; Web Development</li>
                <li>Image / Video Processing &amp; Data Compression</li>
                <li>Control Systems &amp; Automation, IoT with Control Systems &amp; Information Systems</li>
                <li>Machine Learning &amp; Deep Learning with Cyber Security</li>
                <li>Researches and Innovations on COVID-19</li>
            </ul>
        </div>
    )

}

callOfPapers.pageLayout = StarterLayout;

export default callOfPapers;