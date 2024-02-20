/* eslint-disable @next/next/no-img-element */
"use client";
import BlogCard from "components/Loaders/BlogCard";
import InlineLoader from "components/Loaders/InlineLoader";
import { formatDate } from "lib/utils";
import TextContentLoader from "components/Loaders/TextContentLoader";
import EmptyContentWrapper from "components/Loaders/EmptyContentWrapper";
import ContentLoader from "components/Loaders/ContentLoader";
import remarkGfm from "remark-gfm";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const SingleBlog = () => {
   const data = {
      data: {
         title: "Artificial intelligence taking over with astonishing image generator, gained more awareness in non-fungible token",
         content_author: {
            first_name: "John",
            last_name: "Doe",
            email: "",
         },
         date_created: "2022-04-18T00:00:00",
         photos: [
            {
               url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            },
         ],
         content: `<p><span style="font-weight: 400;"><a href="https://ng.linkedin.com/in/johngospel?trk=public_profile_browsemap" target="_blank" rel="noopener">John Gospel</a> is a crypto expert, </span><span style="font-weight: 400;">copywriter and social media manager for brands in Blockchain and Web3. He also has a track record of building online communities from zero to thousands in months while working as a Growth Marketing Strategist for Communities &amp; Start-ups. He </span><span style="font-weight: 400;">shares his insights on Nigeria&#8217;s path to responsible crypto adoption, advocating for thoughtful regulation to protect consumers while encouraging innovation in the burgeoning crypto space.</span></p>\n<div id="ez-toc-container" class="ez-toc-v2_0_62 counter-hierarchy ez-toc-counter ez-toc-grey ez-toc-container-direction">\n<div class="ez-toc-title-container">\n<p class="ez-toc-title " >Table of Contents</p>\n<span class="ez-toc-title-toggle"><a href="#" class="ez-toc-pull-right ez-toc-btn ez-toc-btn-xs ez-toc-btn-default ez-toc-toggle" aria-label="Toggle Table of Content"><span class="ez-toc-js-icon-con"><span class=""><span class="eztoc-hide" style="display:none;">Toggle</span><span class="ez-toc-icon-toggle-span"><svg style="fill: #999;color:#999" xmlns="http://www.w3.org/2000/svg" class="list-377408" width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path d="M6 6H4v2h2V6zm14 0H8v2h12V6zM4 11h2v2H4v-2zm16 0H8v2h12v-2zM4 16h2v2H4v-2zm16 0H8v2h12v-2z" fill="currentColor"></path></svg><svg style="fill: #999;color:#999" class="arrow-unsorted-368013" xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny"><path d="M18.2 9.3l-6.2-6.3-6.2 6.3c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7s-.1-.5-.3-.7zM5.8 14.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.5-.3.7s.1.5.3.7z"/></svg></span></span></span></a></span></div>\n<nav><ul class=\'ez-toc-list ez-toc-list-level-1 \' ><li class=\'ez-toc-page-1 ez-toc-heading-level-3\'><a class="ez-toc-link ez-toc-heading-1" href="https://techpression.com/crypto-adoption-and-regulation-will-promote-innovation-expert/#The_initial_crypto_ban_imposed_in_February_2021_by_former_President_Muhammadu_Buharis_administration_was_premised_on_concerns_about_illegal_practices_security_threats_and_other_issues_With_the_unbanning_of_crypto_by_the_new_administration_last_year_what_is_your_take_on_the_preparedness_of_President_Bola_Tinubus_government_to_address_the_concerns_that_caused_the_previous_ban_as_well_as_proper_taxation_policies" title="The initial crypto ban, imposed in February 2021 by former President Muhammadu Buhari’s administration, was premised on concerns about illegal practices, security threats and other issues. With the unbanning of crypto by the new administration last year, what is your take on the preparedness of President Bola Tinubu’s government to address the concerns that caused the previous ban, as well as proper taxation policies?">The initial crypto ban, imposed in February 2021 by former President Muhammadu Buhari’s administration, was premised on concerns about illegal practices, security threats and other issues. With the unbanning of crypto by the new administration last year, what is your take on the preparedness of President Bola Tinubu’s government to address the concerns that caused the previous ban, as well as proper taxation policies?</a></li><li class=\'ez-toc-page-1 ez-toc-heading-level-3\'><a class="ez-toc-link ez-toc-heading-2" href="https://techpression.com/crypto-adoption-and-regulation-will-promote-innovation-expert/#With_the_current_state_of_the_Nigerian_economy_the_increasing_naira_to_dollar_rate_and_the_ridiculous_fuel_price_skyrocketing_constantly_is_there_any_role_crypto_as_a_decentralised_asset_that_can_be_beneficial_to_salvaging_or_helping_to_stabilise_the_inflation_Or_would_it_worsen_the_situation" title="With the current state of the Nigerian economy, the increasing naira to dollar rate and the ridiculous fuel price skyrocketing constantly, is there any role crypto as a decentralised asset that can be beneficial to salvaging or helping to stabilise the inflation? Or would it worsen the situation?">With the current state of the Nigerian economy, the increasing naira to dollar rate and the ridiculous fuel price skyrocketing constantly, is there any role crypto as a decentralised asset that can be beneficial to salvaging or helping to stabilise the inflation? Or would it worsen the situation?</a></li><li class=\'ez-toc-page-1 ez-toc-heading-level-3\'><a class="ez-toc-link ez-toc-heading-3" href="https://techpression.com/crypto-adoption-and-regulation-will-promote-innovation-expert/#Myriad_crypto-trading_platforms_are_used_worldwide_Are_there_crypto_platforms_currently_explicitly_tailored_for_trading_in_Nigeria" title=" \nMyriad crypto-trading platforms are used worldwide. Are there crypto platforms currently explicitly tailored for trading in Nigeria?"> \nMyriad crypto-trading platforms are used worldwide. Are there crypto platforms currently explicitly tailored for trading in Nigeria?</a></li><li class=\'ez-toc-page-1 ez-toc-heading-level-3\'><a class="ez-toc-link ez-toc-heading-4" href="https://techpression.com/crypto-adoption-and-regulation-will-promote-innovation-expert/#With_the_unbanning_of_crypto_in_what_ways_can_Nigerians_cash_in_on_crypto" title="With the unbanning of crypto, in what ways can Nigerians cash in on crypto?">With the unbanning of crypto, in what ways can Nigerians cash in on crypto?</a></li><li class=\'ez-toc-page-1 ez-toc-heading-level-3\'><a class="ez-toc-link ez-toc-heading-5" href="https://techpression.com/crypto-adoption-and-regulation-will-promote-innovation-expert/#What_is_the_future_of_cryptocurrency_in_Nigeria_and_the_full_adoption_of_digital_money" title="What is the future of cryptocurrency in Nigeria and the full adoption of digital money?">What is the future of cryptocurrency in Nigeria and the full adoption of digital money?</a></li><li class=\'ez-toc-page-1 ez-toc-heading-level-3\'><a class="ez-toc-link ez-toc-heading-6" href="https://techpression.com/crypto-adoption-and-regulation-will-promote-innovation-expert/#What_projections_of_the_global_crypto_landscape_do_Nigeria_and_Africa_need_to_know_to_be_better_positioned_to_harness_the_opportunities_in_the_cryptocurrency_space" title="What projections of the global crypto landscape do Nigeria and Africa need to know to be better positioned to harness the opportunities in the cryptocurrency space?">What projections of the global crypto landscape do Nigeria and Africa need to know to be better positioned to harness the opportunities in the cryptocurrency space?</a></li></ul></nav></div>\n<h3><span class="ez-toc-section" id="The_initial_crypto_ban_imposed_in_February_2021_by_former_President_Muhammadu_Buharis_administration_was_premised_on_concerns_about_illegal_practices_security_threats_and_other_issues_With_the_unbanning_of_crypto_by_the_new_administration_last_year_what_is_your_take_on_the_preparedness_of_President_Bola_Tinubus_government_to_address_the_concerns_that_caused_the_previous_ban_as_well_as_proper_taxation_policies"></span><b>The initial crypto ban, imposed in February 2021 by former President Muhammadu Buhari’s administration, was premised on concerns about illegal practices, security threats and other issues. With the unbanning of crypto by the new administration last year, what is your take on the preparedness of President Bola Tinubu’s government to address the concerns that caused the previous ban, as well as proper taxation policies?</b><span class="ez-toc-section-end"></span></h3>\n<p><span style="font-weight: 400;">Nigeria banned cryptocurrencies over legitimate concerns, like fraud and money laundering, that even advanced crypto economies struggle to address. So, with the current unbanning, Nigeria can learn from their regulatory approaches.</span></p>\n<p><span style="font-weight: 400;">Empowering a government body to oversee crypto licensing compliance, consumer protection, and tax rules would allow innovation while safeguarding users. With clear mandates, the crypto exchange would meet EML laws, tax reporting requirements, consumer laws, and public literacy programs, and crypto could thrive responsibly in a country like Nigeria. </span></p>\n<p><span style="font-weight: 400;">However, I think the incumbent government has yet to implement all these. If they do this, it will help us get off to a good start and address the issues surrounding why the previous administration banned cryptocurrencies in Nigeria.</span></p>\n<p><strong>Read also: <a class="jetpack-instant-search__search-result-title-link" href="https://techpression.com/cbn-must-collaborate-with-stakeholders-to-govern-blockchain-technology/">CBN Must Collaborate with Stakeholders to Govern Blockchain Technology</a></strong></p>\n<h3><span class="ez-toc-section" id="With_the_current_state_of_the_Nigerian_economy_the_increasing_naira_to_dollar_rate_and_the_ridiculous_fuel_price_skyrocketing_constantly_is_there_any_role_crypto_as_a_decentralised_asset_that_can_be_beneficial_to_salvaging_or_helping_to_stabilise_the_inflation_Or_would_it_worsen_the_situation"></span><b>With the current state of the Nigerian economy, the increasing naira to dollar rate and the ridiculous fuel price skyrocketing constantly, is there any role crypto as a decentralised asset that can be beneficial to salvaging or helping to stabilise the inflation? Or would it worsen the situation?</b><span class="ez-toc-section-end"></span></h3>\n<p><span style="font-weight: 400;">Leadership is very crucial in how an economy turns out. Cryptocurrency has a lot of use cases that can benefit an economy, but those can only be used or channelled rightly if the leaders behind the economy are making the right decisions that favour such use cases. So, while crypto adoption in Nigeria would provide benefits like alternative currency, remittances and lending, risks are bound without proper regulation, as I cited earlier. Crypto cannot stabilise inflation or money supplies like central banks can. Tax exchanges, fraud volatility and low penetration limit crypto’s economic impact. </span></p>\n<p><span style="font-weight: 400;">How cryptocurrency can influence the economy is limited, but crypto can help address economic issues. Given regulatory gaps like price instability and limited use, it would be unrealistic to expect it to transform the economy. </span></p>\n<p><span style="font-weight: 400;">So, if you want to put it in a reasonable context, crypto regulation could promote innovation while managing risks, but crypto itself is not a silver bullet for broader economic challenges. Crypto cannot address issues such as the increasing dollar rates and how fuel prices and other commodities have skyrocketed. These are deep economic issues based on the kind of decisions Nigerian leaders have made over time. But when it comes to what cryptocurrency can do in such a context, it is to provide innovation; those innovations can only thrive with proper decisions by those within economic power. </span></p>\n<h3><span class="ez-toc-section" id="Myriad_crypto-trading_platforms_are_used_worldwide_Are_there_crypto_platforms_currently_explicitly_tailored_for_trading_in_Nigeria"></span><b><br />\n</b><b>Myriad crypto-trading platforms are used worldwide. Are there crypto platforms currently explicitly tailored for trading in Nigeria?</b><span class="ez-toc-section-end"></span></h3>\n<p><span style="font-weight: 400;">Yes, there are quite a few crypto platforms in Nigeria that trade that were founded by Nigerians. Platforms like Buy Coins, Cryptex, Bundle Africa, and Naija Krypto provide easy access for Nigerians to trade popular cryptocurrencies like Bitcoin against the Naira. So, they support local payment methods like bank transfer, offer local customer services, and focus on user education and friendly design to drive adoption.</span></p>\n<p><span style="font-weight: 400;">Nigerians have always been enthusiastic about the crypto space and have gone on to build very robust platforms that could help them trade crypto. The user interfaces of these platforms are good, and the educational aspects that are attached to these platforms are pretty helpful for Nigerians interested in learning to trade.</span></p>\n<p>&nbsp;</p>\n<h3><span class="ez-toc-section" id="With_the_unbanning_of_crypto_in_what_ways_can_Nigerians_cash_in_on_crypto"></span><b>With the unbanning of crypto, in what ways can Nigerians cash in on crypto?</b><span class="ez-toc-section-end"></span></h3>\n<p><span style="font-weight: 400;">Quite interestingly, even while the crypto ban was still in place, lots of Nigerians had been cashing in on crypto due to its peculiar uses. It was quite difficult for mainstream banks to stop some of their operations in that sense. </span></p>\n<p><span style="font-weight: 400;">For instance, one of the ways Nigerians can benefit from the wealth of cryptocurrencies is through airdrops. Someone can sleep a poor person tonight and wake up a millionaire or billionaire in the morning. How does this happen? There is a crypto phenomenon called airdrops, which is the listing of new crypto companies. These companies often would do free giveaways to people who help do one or two tasks that help the particular brands that release the cryptocurrencies. Hence, when users do these tasks, there is a potential for the companies to gift free airdrops in the form of tokens to these users. When these coins are listed, the lucky beneficiaries go home with huge amounts of money by performing some tasks.</span></p>\n<p><span style="font-weight: 400;">Another point is the creation of crypto-related jobs. The more cryptocurrency thrives, jobs related to the crypto space solving problems with cryptocurrencies will emerge, and as these jobs emerge, people who are skilled in that regard can take up these opportunities and go into full career roles with these companies. Then, people make a living just by working for crypto brands. That’s also a great way to earn. There is also the part of trading cryptocurrency, which is not financial advice, but people could trade cryptocurrencies and then make money. </span></p>\n<p><span style="font-weight: 400;">Aside from these, the government can be involved beyond Nigerians trading and benefiting from the wealth of cryptocurrency. That’s the part where the government can encourage blockchain startups to use crypto for transparent public services. Suppose those use cases are adequately integrated into the economy, like developing practices that will support the use of cryptocurrency in Nigeria or setting up revolutions and policies. In that case, it can create much more wealth and opportunities for Nigerians to benefit financially from cryptocurrency. An example is enabling the use of Bitcoin to buy commodities.</span></p>\n<p>&nbsp;</p>\n<h3><span class="ez-toc-section" id="What_is_the_future_of_cryptocurrency_in_Nigeria_and_the_full_adoption_of_digital_money"></span><b>What is the future of cryptocurrency in Nigeria and the full adoption of digital money?</b><span class="ez-toc-section-end"></span></h3>\n<p><span style="font-weight: 400;">While working for crypto brands, I noticed many are involved in cryptocurrency trading. Nigeria stands among the top 5 nations that are actively using cryptocurrency in the world of cryptocurrency. </span></p>\n<p><span style="font-weight: 400;">Hence, cryptos currently stand a strong chance of broader embrace in Nigeria. This is due to the country’s influence on the young population and tech-savvy citizens already using crypto in high volumes. This happens informally, but it shows that many Nigerians are in cryptocurrency. </span></p>\n<p><span style="font-weight: 400;">Supportive moves by regulators and cryptocurrency’s potential to drive economic growth also give Nigeria a higher chance of being among the leading countries in the crypto space. With faster, cheaper payments and other advantages over traditional finance, crypto solves real problems for Nigerians. So long as thoughtful regulations protect consumers while encouraging responsible innovation, young Nigerians ready to adopt crypto will likely drive mainstream integration into payments, remittance, investments, and financing in the coming years.</span></p>\n<p><span style="font-weight: 400;">Nigeria is poised to remain among the global leaders in crypto adoption going forward. We just need the government&#8217;s alignment because many young Nigerians and tech-savvy people have already seen the light. They are already making deliberate moves and driving cryptocurrency adoption in Nigeria.</span></p>\n<p><strong>Read also: <a href="https://techpression.com/blockchain-and-cryptocurrency-in-africa/">The Explosive Growth of Blockchain Funding and Cryptocurrency in Africa</a></strong></p>\n<h3><span class="ez-toc-section" id="What_projections_of_the_global_crypto_landscape_do_Nigeria_and_Africa_need_to_know_to_be_better_positioned_to_harness_the_opportunities_in_the_cryptocurrency_space"></span><b>What projections of the global crypto landscape do Nigeria and Africa need to know to be better positioned to harness the opportunities in the cryptocurrency space?</b><span class="ez-toc-section-end"></span></h3>\n<p><img fetchpriority="high" decoding="async" class="alignnone size-medium wp-image-24664" src="https://i0.wp.com/techpression.com/wp-content/uploads/2024/02/J.-GOSPEL.jpeg?resize=300%2C200&#038;ssl=1" alt="" width="300" height="200" srcset="https://i0.wp.com/techpression.com/wp-content/uploads/2024/02/J.-GOSPEL.jpeg?resize=300%2C200&amp;ssl=1 300w, https://i0.wp.com/techpression.com/wp-content/uploads/2024/02/J.-GOSPEL.jpeg?resize=768%2C511&amp;ssl=1 768w, https://i0.wp.com/techpression.com/wp-content/uploads/2024/02/J.-GOSPEL.jpeg?resize=600%2C399&amp;ssl=1 600w, https://i0.wp.com/techpression.com/wp-content/uploads/2024/02/J.-GOSPEL.jpeg?w=800&amp;ssl=1 800w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></p>\n<p><span style="font-weight: 400;">The crypto market size could grow 10X by 2026 as individuals and institutions embrace crypto, especially in emerging markets. These nations are poised to lead Africa’s crypto explosion, with internet and mobile access spreading across Nigeria, Ghana, Kenya, and South Africa. Also, decentralised finance presents a massive potential for financial inclusion of the unbanked. With major and even central banks investing in crypto innovations like stable coins and CBDC, Africa has opportunities across decentralised payments, lending, savings, and beyond.</span></p>\n<p><span style="font-weight: 400;">As the world sees crypto as the next wave of finance, thoughtful regulations and investments can now help Nigeria and Africa ride the momentum to drive economic growth and empower more people, as we can see from these projections. If you look at nations already setting up policies to embrace crypto, they are already positioning themselves in a way they can quickly gain traction and take centre stage. So it boils down to how African governments can make decisions with precise projections in mind for the continent to take maximum advantage of endless possibilities in cryptocurrency..</span></p>\n`,
      },
   };
   const similar = {
      items: [
         {
            id: 1,
            content_author: {
               first_name: "John",
               last_name: "Doe",
               email: "",
            },
            date_created: "2022-04-18T00:00:00",
            photos: [
               {
                  url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
               },
            ],
            content: `# Introduction
                        This is the introduction of the blog
                        ## Subtitle
                        This is the subtitle of the blog
                        ## Conclusion
                        This is the conclusion of the blog`,
         },
         {
            id: 2,
            content_author: {
               first_name: "John",
               last_name: "Doe",
               email: "",
            },
            date_created: "2022-04-18T00:00:00",
            photos: [
               {
                  url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
               },
            ],
            content: `# Introduction
                        This is the introduction of the blog
                        ## Subtitle
                        This is the subtitle of the blog
                        ## Conclusion
                        This is the conclusion of the blog`,
         },
         {
            id: 3,
            content_author: {
               first_name: "John",
               last_name: "Doe",
               email: "",
            },
            date_created: "2022-04-18T00:00:00",
            photos: [
               {
                  url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
               },
            ],
            content: `# Introduction
                        This is the introduction of the blog
                        ## Subtitle
                        This is the subtitle of the blog
                        ## Conclusion
                        This is the conclusion of the blog`,
         },
         {
            id: 4,
            content_author: {
               first_name: "John",
               last_name: "Doe",
               email: "",
            },
            date_created: "2022-04-18T00:00:00",
            photos: [
               {
                  url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
               },
            ],
            content: `# Introduction
                        This is the introduction of the blog
                        ## Subtitle
                        This is the subtitle of the blog
                        ## Conclusion
                        This is the conclusion of the blog`,
         },
      ],
   };

   return (
      <main className="container flex h-full w-full flex-col">
         <div className="min-h-[16.5rem] w-full bg-primary-19 px-container-base pb-[7.44rem] md:pb-[4.875rem] lg:px-container-lg">
            <div className="flex flex-col justify-between gap-[1.69rem] lg:flex-row">
               <div className="flex items-end gap-4">
                  <div className="h-[48px] w-[48px] overflow-hidden rounded-[50px]">
                     <img
                        alt="author dp"
                        // src={demoDp}
                        className="h-full w-full origin-center"
                     />
                  </div>
                  <div className="flex flex-col gap-1">
                     <h6 className="font-[600] leading-[21px] text-white">
                        {data?.data?.content_author?.first_name}{" "}
                        {data?.data?.content_author?.last_name}
                     </h6>
                     <p className="text-[14px] font-[300] leading-[21px] tracking-[0.15px] text-secondary-2">
                        {formatDate(`${data?.data?.date_created}`)}
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="relative flex flex-col px-container-base lg:px-container-lg ">
            <div className="relative -mt-[calc(264px-211px)] mb-[2.5rem] flex h-[35rem] w-full flex-col lg:px-[3.125rem]  ">
               <div className="h-full w-full overflow-hidden rounded-[16px]">
                  <img
                     alt="blog image"
                     src={`${data?.data?.photos?.[0]?.url}`}
                     className="!h-full w-full origin-center bg-cover"
                  />
               </div>
               <div className="relative right-0 top-0 mt-4 flex  gap-4 lg:absolute lg:mt-[calc(12.69rem-10px)] lg:flex-col  lg:gap-[2.56rem]">
                  <div className="group flex cursor-pointer flex-col items-center gap-2">
                     {/* <Icon
                        name="shareIcon"
                        svgProp={{
                           className:
                              "text-primary-9 group-hover:text-primary-1 transition-colors duration-300 ease-in-out",
                        }}
                     /> */}
                     <span className="hidden text-[12px] font-[300] leading-[21px] tracking-[0.15px] text-secondary-2 transition-colors duration-300 ease-in-out group-hover:text-primary-1 md:flex">
                        Share
                     </span>
                  </div>
                  <div className="group flex cursor-pointer flex-col items-center gap-2">
                     {/* <Icon
                        name="thumb"
                        svgProp={{
                           className:
                              "text-primary-9 group-hover:text-primary-1 transition-colors duration-300 ease-in-out",
                        }}
                     /> */}
                     <span className="hidden text-[12px] font-[300] leading-[21px] tracking-[0.15px] text-secondary-2 transition-colors duration-300 ease-in-out group-hover:text-primary-1 md:flex">
                        Like
                     </span>
                  </div>
               </div>
            </div>
            <div className="absolute"></div>
            <p className="py-[5rem] text-center text-[24px] font-[600] leading-[24px] tracking-[0.15px] text-primary-8">
               Thanks for Reading!
            </p>
            <div className="mb-[1.5rem] flex items-center justify-start gap-[0.57rem] text-primary-1">
               {/* <Icon name="gearIcon" /> */}
               <span className="leading-[28px] tracking-[0.15px]">Similar Articles</span>
            </div>
            <EmptyContentWrapper
               isEmpty={similar?.items?.length < 2}
               customMessage="No Similar Items at the moment"
            >
               <ContentLoader isLoading={false}>
                  <div className="mb-[6.94rem] grid grid-cols-1 gap-x-[1.5rem] gap-y-[2.5rem] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                     {similar?.items?.map((i, idx) => (
                        <div key={idx} className="h-full w-full">
                           <BlogCard
                              authorImg={`${i?.content_author}` || ""}
                              authorName={`${i?.content_author?.first_name} ${i?.content_author?.last_name}`}
                              authorRole={`${i?.content_author?.email}`}
                              blogImage={`${i?.photos?.[0]?.url}`}
                              category={`Production`}
                              date={`18 April, 2022`}
                              description={i?.date_created}
                              title={i?.date_created}
                              link={`/blogs/${i?.id}`}
                           />
                        </div>
                     ))}
                  </div>
               </ContentLoader>
            </EmptyContentWrapper>
         </div>
      </main>
   );
};

export default SingleBlog;
