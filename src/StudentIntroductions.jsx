export default function StudentIntroduction({ studentData, displayName, displayMascot, displayImage }) {
    return (
        <article>
            <h3>
                {
                    displayName &&
                    `${studentData.name.first} ${" "}
                    ${studentData.name.middleInitial ? studentData.name.middleInitial + ". " : ""} ${" "}
                    ${studentData.name.preferred ? '"' + studentData.name.preferred + '" ' : ""} ${" "}
                    ${studentData.name.last} ${" "}`
                }

                {displayName && displayMascot && studentData.divider} {" "}
                {displayMascot && studentData.mascot}
            </h3>
            {
                displayImage ? (
                    <figure>
                        <img src={"https://dvonb.xyz" + studentData.media.src} width="300px" />
                    </figure>
                ) : ""
            }
            <p>{studentData.personalStatement} </p>
            < ul >
                <li><strong>Personal Background: </strong>{studentData.backgrounds.personal}</li >
                <li><strong>Professional Background: </strong>{studentData.backgrounds.professional}</li >
                <li><strong>Academic Background: </strong>{studentData.backgrounds.academic}</li >
                <li><strong>Subject Background: </strong>{studentData.backgrounds.subject}</li >
                <li>
                    <strong>Courses: </strong>
                    <ol>
                        {
                            studentData.courses.map((course, index) =>
                                <li key={index} >
                                    <strong>{course.dept} {course.num} - {course.name} </strong> : {course.reason}
                                </li>
                            )
                        }
                    </ol>
                </li>
                <li>
                    <strong>Additional Information: </strong> {studentData.funFact}
                </li>
            </ul>
            <em> {studentData.quote.text} </em>
            <p> - {studentData.quote.author} </p>
            <a href={studentData.links.charlotte} > CLT WEB </a> {" "} {studentData.divider} {" "}
            <a href={studentData.links.github} > GitHub </a> {" "} {studentData.divider} {" "}
            <a href={studentData.links.githubio} > GitHub io </a>{" "} {studentData.divider} {" "}
            <a href={studentData.links.itis3135} > itis 3135 </a>{" "} {studentData.divider} {" "}
            <a href={studentData.links.freecodecamp} > Free Code Camp </a>{" "} {studentData.divider} {" "}
            <a href={studentData.links.codecademy} > Code Acadamy </a>{" "} {studentData.divider} {" "}
            <a href={studentData.links.linkedin} > Linked In </a>
            <hr />
        </article>
    )
}
{/*<p>{JSON.stringify(IntroductionstudentData)}</p> */}