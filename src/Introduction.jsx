import Footer from "./Footer";
import Header from "./Header";

export default function Introduction() {
    return (
        <>
            <Header />
            <main>
                <h2>ITIS 3135 Introduction</h2>
                <img src="./public/Norway_hike_NJH.jpg" alt="NJH hike in Norway" />
                <p>Noah J Harden at Tromsø's Tromsdalstinden Mountain Peak</p>
                <ul>
                    <li><strong>Personal Background:</strong> Hello everyone, My name is Noah J Harden!
                        I’m doing a dual major in Computer Science (cybersecurity) and German language.
                        I grew up in both Charlotte, NC and Germany but for the last 10 years I
                        have considered Charlotte my home. I love trading playing card games such as
                        Magic: the Gathering and Flesh and Blood.</li>
                    <li><strong>Professional Background:</strong> Currently a TA for ITSC 1212 and 1213.
                        I’ve had an internship at the Physics Department at University of Bonn, Germany.
                        Previously worked with ‘Playing for Others’ a Charlotte based nonprofit.</li>
                    <li><strong>Academic Background:</strong> I am a full time student at UNCC majoring in both Cybersecurity and German Language.
                        I have full certifications from the German government for speaking the language abroad such as the DSD II and the C2 Certificate.
                        I have been a teacher for a german saturday school and I am currently an IA for ITSC 1213 under Dr. Adam Whaley.
                    </li>
                    <li>
                        <strong>Laptop & Working Environment: </strong>
                        <ul>
                            <li>Laptop: Lenovo Legion 7i, Windows 11</li>
                            <li>Working Environment: Student Union or apartment</li>
                        </ul>
                    </li>
                    <li><strong>Courses: </strong><br />
                        <ul>
                            <li><strong>ITSC 3146</strong> - Intro Oper Syst & Networking: This class is key in understanding my concentration, which is Cybersecurity.</li>
                            <li><strong>ITSC 2175</strong> -  Logic and Algorithms: Math class necessary for understanding computer science concepts</li>
                            <li><strong>ITIS 3135</strong> -  Front-End Web Application Development: I took this class as something to be compatible with a backend class I’m taking.</li>
                            <li><strong>STAT 2122</strong> -  Intro to Prob & Stat: Another math class necessary for understanding computer science concepts.</li>
                            <li><strong>ITSC 3160</strong> - Database Design and Implementation: A backend class needed for the cybersecurity concentration.</li>
                        </ul>
                    </li>
                </ul>
                <p>“Are you so busy fighting you cannot see your own ship has set sail?” <br />- Uncle Iroh</p>
            </main>
            <Footer />
        </>
    );
}