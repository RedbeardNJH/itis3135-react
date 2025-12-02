import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from "react";
import StudentIntroduction from "./StudentIntroductions.jsx";

export default function Introductions() {
    const [IntroductionstudentData, setIntroductionstudentData] = useState([]);
    const [error, setError] = useState(null);
    const [nameSearch, setNameSearch] = useState("");
    const [displayName, setDisplayName] = useState(true);
    const [displayMascot, setDisplayMascot] = useState(true);
    const [displayImage, setDisplayImage] = useState(true);
    const [showSlideShow, setShowSlideShow] = useState(false);
    const [indexOfSlideshow, setIndexOfSlideshow] = useState(0);
    useEffect(() => {
        fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error(response.status);
                }
            })
            .then((studentData) => setIntroductionstudentData(studentData))
            .catch((error) => setError(error.message));
    }, [])

    const filterIntroductionData = IntroductionstudentData.filter((data) => {
        if (nameSearch === "") return true;
        const fullStudentName = `${data.name.first} ${data.name.middleInitial}. "${data.name.preferred}" ${data.name.last}`;
        return fullStudentName.toLowerCase().includes(nameSearch.toLowerCase());
    })
    return (
        <>
            <Header />
            <main>
                <h2>Everybody's Introductions</h2>

                <label>
                    Search for Student:&nbsp;&nbsp;
                    <input type='text' onChange={(event) => setNameSearch(event.target.value)}></input>
                    &nbsp;&nbsp; Name Search: &nbsp;&nbsp; {nameSearch}
                </label>
                <section>
                    <label htmlFor="">
                        Show Name:
                        <input type="checkbox" checked={displayName} onClick={() => setDisplayName(!displayName)} />&nbsp;&nbsp;
                    </label>
                    <label htmlFor="">
                        Show Mascot:
                        <input type="checkbox" checked={displayMascot} onClick={() => setDisplayMascot(!displayMascot)} />&nbsp;&nbsp;
                    </label>
                    <label htmlFor="">
                        Show Image:
                        <input type="checkbox" checked={displayImage} onClick={() => setDisplayImage(!displayImage)} />&nbsp;&nbsp;
                    </label>
                    <br></br>
                    <button onClick={() => setShowSlideShow(!showSlideShow)}>
                        {showSlideShow ? "View All" : "View Slideshow"}
                    </button>
                </section>
                {error == null ? "" : <p>Error Code: {error}</p>}
                {
                    showSlideShow

                        ?

                        <>
                            <button onClick={() => indexOfSlideshow + 1 >= filterIntroductionData.length ? setIndexOfSlideshow(0) : setIndexOfSlideshow(indexOfSlideshow + 1)}>
                                Next
                            </button>
                            <button onClick={() => indexOfSlideshow - 1 < 0 ? setIndexOfSlideshow(filterIntroductionData.length - 1) : setIndexOfSlideshow(indexOfSlideshow - 1)}>
                                Previous
                            </button>
                            <StudentIntroduction studentData={filterIntroductionData[indexOfSlideshow]} displayImage={displayImage} displayName={displayName} displayMascot={displayMascot}></StudentIntroduction>
                        </>

                        :

                        filterIntroductionData.map((studentData, index) =>
                            <StudentIntroduction key={index} studentData={studentData} displayImage={displayImage} displayName={displayName} displayMascot={displayMascot}></StudentIntroduction>
                        )
                }
            </main>
            <Footer />
        </>
    );
}