import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from "react";

export default function Introductions() {
    const [IntroductionstudentData, setIntroductionstudentData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
            else {
                throw new Error(response.status);
            }
        })
        .then((studentData) => setIntroductionstudentData(studentData))
        .catch((error) => setError(error.message));
    }, [])
    return (
        <>
        <Header />
        <main>
            <h2>Everybody's Introductions</h2>
            {/*<p>{JSON.stringify(IntroductionstudentData)}</p> */}
            {error == null ? "" : <p>Error Code: {error}</p>}

            {
                IntroductionstudentData.map((studentData, index) => 
                    <article key={index}>
                        <h3>
                            {studentData.name.first} {" "}
                            {studentData.name.middleInitial ? studentData.name.middleInitial + ". " : ""} {" "}
                            {studentData.name.preferred ? '"' + studentData.name.preferred + '" ' : ""} {" "}
                            {studentData.name.last} {" "}
                            {studentData.divider} {" "}
                            {studentData.mascot}
                        </h3>
                        <figure>
                            <img src={"https://dvonb.xyz" + studentData.media.src} width="300px" />
                        </figure>
                        <p>{studentData.personalStatement}</p>
                        <ul>
                            <li><strong>Personal Background: </strong>{studentData.backgrounds.personal}</li>
                            <li><strong>Professional Background: </strong>{studentData.backgrounds.professional}</li>
                            <li><strong>Academic Background: </strong>{studentData.backgrounds.academic}</li>
                            <li><strong>Subject Background: </strong>{studentData.backgrounds.subject}</li>
                            <li>
                                <strong>Courses:</strong>
                                <ol>
                                    {
                                        studentData.courses.map((course, index) => 
                                            <li key={index}>
                                                <strong>{course.dept} {course.num} - {course.name}</strong> : {course.reason}
                                            </li>
                                        )
                                    }
                                </ol>
                            </li>
                            <li>
                                <strong>Additional Information: </strong> {studentData.funFact}
                            </li>
                        </ul>
                        <em> {studentData.quote.text}</em>
                        <p>- {studentData.quote.author}</p>
                        <a href={studentData.links.charlotte}>CLT WEB</a> {" "} {studentData.divider} {" "}
                        <a href={studentData.links.github}>GitHub</a> {" "} {studentData.divider} {" "}
                        <a href={studentData.links.githubio}>GitHub io</a>{" "} {studentData.divider} {" "}
                        <a href={studentData.links.itis3135}>itis 3135</a>{" "} {studentData.divider} {" "}
                        <a href={studentData.links.freecodecamp}>Free Code Camp</a>{" "} {studentData.divider} {" "}
                        <a href={studentData.links.codecademy}>Code Acadamy</a>{" "} {studentData.divider} {" "}
                        <a href={studentData.links.linkedin}>Linked In</a>
                        <hr />
                    </article>
                )
            }
        </main>
        <Footer />
        </>
    );
}