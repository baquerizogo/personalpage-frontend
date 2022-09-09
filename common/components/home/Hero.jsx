const Hero = () => {
    return (
        <>
            <div className="col-span-full md:col-span-5 lg:col-start-2 lg:col-end-9">
                <span className="block text-4xl my-4">💻☕</span>
                <h1 className="text-2xl xl:text-4xl font-bold text-secondary-600">Hi, I'm José Baquerizo! 👋</h1>
                <h2 className="text-2xl xl:text-4xl">An Ecuadorian Web developer and UI/UX Designer based in Salinas at <span className="font-bold whitespace-nowrap">he-llo</span>.</h2>
                <p className="my-4 text-lg">I run web projects with entrepeneurs and companies providing high-level skills and excellent engineering processes always focusing on the end user's experience making it beautiful and memorable. </p>
            </div>
            <div className="col-span-full md:col-span-3 lg:col-start-9 lg:col-end-12 flex items-center justify-center md:justify-end">
                <img src="/images/profile.png" alt="Jose Baquerizo Picture" className="w-2/3 rounded-[5rem] lg:rounded-[4rem] xl:rounded-[5rem]"/>
            </div>
        </>
    );
}
 
export default Hero;