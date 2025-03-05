'use client';

const AboutUsPage = () => {

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
                rel="stylesheet"
            />
                <div>
                    <h1 className="justify-self-center text-[#000000] text-[30px] font-[800]">About</h1>
                    <p className="ml-5 text-[#000000] text-[20px] font-[500]">Welcome to IntelliAgents, an AI-powered web app designed to make semester planning effortless for post-secondary students.
                        Our mission is to help you stay organized and stress-free by automatically extracting key dates from your syllabus and syncing them with your Google Calendar.
                        No more missed deadlines or last-minute scrambles—IntelliAgents keeps your academic life on track so you can focus on what really matters.</p>
                    <h1 className="justify-self-center text-[#000000] text-[30px] font-[800]">Our Team</h1>
                    <p className="ml-5 text-[#000000] text-[20px] font-[500]">IntelliAgents is a project developed as part of the MDIA470 course at UBC in collaboration with Emerging Media Labs.
                        Our team - Valery, Stuti, Iris, Rithika, Leon, Daffa, and Vivian - is passionate about harnessing technology to improve student success.
                        We understand the challenges of managing multiple courses, deadlines, and commitments, and we built IntelliAgents with one goal in mind: to help you plan smarter, not harder.Whether you’re juggling coursework, extracurriculars, or work commitments, IntelliAgents ensures you stay on top of your assignments and one step closer to your academic goals.
                        Try it out today and experience a stress-free way to manage your semester! </p>
                </div>
                </>
    );
};

export default AboutUsPage;
