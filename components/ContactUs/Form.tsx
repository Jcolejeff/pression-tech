import { Button } from "components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "lib/utils";
import { ChevronDown, ChevronRightIcon } from "lucide-react";

import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormMessage,
   FormLabel,
   FormDescription,
} from "components/ui/form";
import { Input } from "components/ui/input";
import { Textarea } from "components/ui/textarea";
import { toast } from "components/ui/use-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState, useEffect } from "react";
import useUserLocation from "lib/hooks/useUserLocation";

import { API_URL, APP_URL, BUSINESS_TYPES } from "lib/constants";
import $http from "lib/http";
import ProcessError from "lib/error";

import Spinner from "components/ui/spinner";

interface Iprops {
   title?: string;
   subTitle?: string;
   breadcrumb?: string;
   businessType?: string;
   closeForm?: () => void;
}

const FormSchema = z.object({
   email: z
      .string()
      .min(2, {
         message: "Please enter a valid email.",
      })
      .email(),

   phone_number: z.string().min(2, {
      message: "Please enter a valid Number.",
   }),

   first_name: z.string({
      required_error: "Name is required.",
   }),
   last_name: z.string({
      required_error: "Name is required.",
   }),

   phone_country_code: z.string(),
   currency_code: z.string(),
   description: z
      .string()
      .min(10, {
         message: "Message must be at least 10 characters.",
      })
      .max(160, {
         message: "Message must not be longer than 16 characters.",
      }),
});

function ContactUsForm({ businessType, title, subTitle, breadcrumb }: Iprops) {
   const [phoneCountry, setPhoneCountry] = useState("");
   const [formIsLoading, setFormIsLoading] = useState(false);
   const [success, setSuccess] = useState(false);
   const [message, setMessage] = useState({ text: "", isError: false });

   const { location } = useUserLocation();

   const [phoneData, setPhoneData] = useState({
      phoneNumber: "",
      countryCode: "",
   });
   const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
   });

   async function onSubmit(data: z.infer<typeof FormSchema>) {
      setFormIsLoading(true);

      const subscriberPayload = {
         email: data?.email,
         phone: data?.phone_number,
         phone_country_code: data?.phone_country_code,
      };

      try {
         //    const { data } = await $http.post(`${API_URL}/subscribers`, subscriberPayload);
         setSuccess(true);
         console.log(data);

         setMessage({ text: "Message Sent Successfully", isError: false });
         //    form.reset();
      } catch (error) {
         setMessage({ text: ProcessError(error), isError: true });
      }
      setFormIsLoading(false);
   }

   const handleOnPhoneChange = (phone: any, countryData: any) => {
      setPhoneData((prev) => ({
         ...prev,
         phoneNumber: phone?.slice(countryData?.dialCode?.length),
         countryCode: countryData.dialCode,
      }));

      form.setValue("phone_number", phone);
      form.setValue("phone_country_code", `+${countryData?.dialCode}`);
      setPhoneCountry(countryData?.iso2);
   };

   useEffect(() => {
      form.setValue("phone_number", location?.country_calling_code!);
      form.setValue("currency_code", location?.currency);
   }, [location?.country_calling_code, location?.currency]);

   return (
      <div className=" relative flex  w-full    flex-col gap-4 rounded-[15px]">
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-4">
               <section className=" grid grid-cols-1 gap-6 md:grid-cols-[1fr_1fr]  ">
                  <FormField
                     control={form.control}
                     name="first_name"
                     render={({ field }) => (
                        <FormItem>
                           <div className="relative">
                              <label className="mb-4 block   rounded-full text-base ">
                                 First Name
                              </label>
                              <FormControl>
                                 <Input
                                    className="bg-white  py-8 text-lg transition-all duration-200 ease-in-out  placeholder:text-lg  placeholder:text-gray-300 focus-within:placeholder:text-secondary-2 focus:bg-[#DBF1FF] "
                                    placeholder="Jane"
                                    {...field}
                                 />
                              </FormControl>
                           </div>
                           <FormMessage className="mt-1 text-base" />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="last_name"
                     render={({ field }) => (
                        <FormItem>
                           <div className="relative">
                              <label className="mb-4 block rounded-full text-base ">
                                 Last Name
                              </label>
                              <FormControl>
                                 <Input
                                    className="bg-white py-8 text-lg transition-all duration-200 ease-in-out  placeholder:text-lg  placeholder:text-gray-300 focus-within:placeholder:text-secondary-2 focus:bg-[#DBF1FF] "
                                    placeholder="Doe"
                                    {...field}
                                 />
                              </FormControl>
                           </div>
                           <FormMessage className="mt-1 text-base" />
                        </FormItem>
                     )}
                  />
               </section>

               <section className=" grid grid-cols-1 gap-6 md:grid-cols-[1fr_1fr]  ">
                  <FormField
                     control={form.control}
                     name="email"
                     render={({ field }) => (
                        <FormItem>
                           <div className="relative">
                              <label className="mb-4 block  rounded-full text-base ">Email</label>
                              <FormControl>
                                 <Input
                                    className="bg-white  py-8 text-lg transition-all duration-200 ease-in-out  placeholder:text-lg  placeholder:text-gray-300 focus-within:placeholder:text-secondary-2 focus:bg-[#DBF1FF]"
                                    {...field}
                                    placeholder="youremail@gmail.com"
                                 />
                              </FormControl>
                           </div>
                           <FormMessage className="mt-1 text-base" />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="phone_number"
                     render={({ field }) => (
                        <FormItem>
                           <div className="relative">
                              <label className="mb-4 block   rounded-full text-base ">
                                 Phone Number
                              </label>
                              <FormControl>
                                 <PhoneInput
                                    containerClass="phone-container"
                                    inputClass="py-8 bg-white text-lg focus-within:placeholder:text-secondary-2  placeholder:text-gray-300 placeholder:text-lg  focus:border-0  transition-all duration-200 ease-in-out"
                                    placeholder="phone number"
                                    buttonClass="bg-[#DBF1FF] "
                                    inputStyle={{
                                       border: "1px solid #e4e2e2",
                                       width: "100%",
                                    }}
                                    onChange={(phone, country) =>
                                       handleOnPhoneChange(phone, country)
                                    }
                                    autoFormat={true}
                                    inputProps={{
                                       name: "phone",
                                       required: true,
                                    }}
                                    buttonStyle={{
                                       background: "white",
                                       paddingInline: "0.1rem",
                                       border: "1px solid #e4e2e2",
                                       borderRight: "none",
                                    }}
                                    dropdownStyle={{ height: "300px", maxHeight: "300px" }}
                                    dropdownClass="bg-white shadow-1"
                                    searchStyle={{
                                       width: "80%",
                                       border: "1px solid #e4e2e2",
                                       borderLeft: "none",
                                       borderRight: "none",
                                       borderTop: "none",
                                       borderBottom: "none",
                                       paddingBlock: "0.6rem",
                                       marginBottom: "0.1rem",
                                    }}
                                    value={field.value}
                                    country={phoneCountry || location.country_code}
                                    enableSearch={true}
                                    disableSearchIcon={true}
                                 />
                              </FormControl>
                              <FormMessage className="mt-1 text-base" />
                           </div>
                        </FormItem>
                     )}
                  />
               </section>

               <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                     <FormItem>
                        <label className="mb-4 block rounded-full text-base ">
                           Optional Message
                        </label>
                        <FormControl>
                           <Textarea
                              rows={8}
                              className="mb-[2.5rem] resize-none bg-white px-[0.5rem] py-4 text-xl text-secondary-2 placeholder:text-lg placeholder:text-gray-300  placeholder:text-secondary-2/[0.38] focus-within:border-0 focus-within:placeholder:text-secondary-2    "
                              {...field}
                              placeholder="Write here..."
                           />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />
               <div className=" mt-4 ">
                  <button
                     disabled={formIsLoading}
                     type="submit"
                     className="group flex w-fit items-center justify-center gap-2 rounded-[6px] bg-primary-4 px-6 py-4 transition-all duration-200 ease-in-out hover:opacity-90"
                  >
                     <span className="font-[500] leading-[1.5rem] tracking-[0.02875rem] text-white disabled:cursor-not-allowed disabled:opacity-50">
                        {formIsLoading ? <Spinner /> : "Send Message"}
                     </span>
                  </button>

                  <span
                     className={`${
                        message.isError ? "text-red-500" : "text-green-700"
                     } mt-4 block  text-[16px] transition-opacity duration-200 ease-in-out`}
                  >
                     {message.text}
                  </span>
               </div>
            </form>
         </Form>
      </div>
   );
}

export default ContactUsForm;
