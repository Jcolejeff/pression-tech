import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "components/ui/tabs";
import Africa from "./Africa/Africa";
import NorthAmerica from "./NorthAmerica";
import SouthAmerica from "./SouthAmerica";
import Asia from "./Asia";
import Europe from "./Europe";
import Antarctica from "./Antarctica";
import Australia from "./Australia";

import { cn } from "lib/utils";
import { url } from "lib/utils";
const WhereOurMerchantsAre = () => {
	const [continents] = useState<string[]>([
		"africa",
		"north america",
		"south america",
		"asia",
		"europe",
		"antarctica",
		"australia",
	]);

	const [activeTab, setActiveTab] = useState<string>("africa");

	const switchTab = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<>
			<aside className="">
				<div className="flex flex-col  items-center gap-4 mb-[3.5rem] ">
					<h2 className="text-center text-[1.6rem] md:text-[2.3rem] font-black text-white">
						Where our Merchants are!
					</h2>
					<h3 className="text-white text-center md:max-w-[47%] xxl:max-w-[40%] opacity-[0.85]  text-base leading-7 tracking-normal ">
						Our Merchants are in many Countries across Continents of the world!
					</h3>
					<div className="w-12 h-[0.15rem] bg-primary-1 "></div>
				</div>
				<Tabs
					orientation="horizontal"
					defaultValue="africa"
					activationMode="manual"
					value={activeTab}
					className="relative  "
				>
					<img
						src={url("/svgs/arrow-left.svg")}
						alt="arrow"
						className="absolute md:hidden right-0 top-[1%]"
					/>
					<TabsList className=" bg-black justify-between pb-4  w-full overflow-scroll md:overflow-hidden">
						{continents.map((item, index) => (
							<TabsTrigger
								key={index}
								value={item}
								onClick={() => switchTab(item)}
								className={cn(
									` items-start  whitespace-nowrap  gap-1 rounded-lg  text-gray-500   px-12 py-4 transition-all duration-300 ease-in-out   `,
									` ${
										activeTab === item &&
										`border-b-0-[5px] border-primary-1 shadow-9 rounded-full  text-red-600`
									}`
								)}
							>
								<h3 className="text-[1.2rem] capitalize font-bold  text-inherit">
									{item}
								</h3>
							</TabsTrigger>
						))}
					</TabsList>
					<section className="">
						<TabsContent value={continents[0]}>
							<Africa />
						</TabsContent>
						<TabsContent value={continents[1]}>
							<NorthAmerica />
						</TabsContent>

						<TabsContent value={continents[2]}>
							<SouthAmerica />
						</TabsContent>
						<TabsContent value={continents[3]}>
							<Asia />
						</TabsContent>
						<TabsContent value={continents[4]}>
							<Europe />
						</TabsContent>
						<TabsContent value={continents[5]}>
							<Antarctica />
						</TabsContent>
						<TabsContent value={continents[6]}>
							<Australia />
						</TabsContent>
					</section>
				</Tabs>
			</aside>
		</>
	);
};

export default WhereOurMerchantsAre;
