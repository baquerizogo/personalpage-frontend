import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import Layout from "@/layouts/Layout";

const index = () => {
	return (
		<Layout>
			<div className="grid-layout">
				<Hero/>
				<Skills/>
			</div>
		</Layout>
	);
}
 
export default index;
