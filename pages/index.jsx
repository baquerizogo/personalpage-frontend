import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import Layout from "@/layouts/Layout";

const index = () => {
	return (
		<Layout>
			<div className="grid-layout max-w-384 mx-auto">
				<Hero/>
				<Skills/>
			</div>
		</Layout>
	);
}
 
export default index;
