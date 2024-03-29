export const API_URL = "https://api.timbu.com/";
export const APP_URL = "https://timbu.com/";
export const DEMO_REQUEST_ML_ID = "hi";
export const BUSINESS_TYPES = [
   { text: "Retail", value: "Retail" },
   { text: "Education", value: "Education" },
   { text: "Hospitality", value: "Hospitality" },
   { text: "Online Travel", value: "Online Travel" },
   { text: "Freelance", value: "Freelance" },
   { text: "Other", value: "Other" },
];
export const DEMO_REQUEST_MAILING_LIST_ID = "hi";
export const TIMBU_ORG_ID = "hi";

export const users = [
   {
      username: "Adepoju Joshua",
      name: "Joshua Adepoju",
      email: "Adepojujoshua19998@gmail.com",
      role: "None",
      userId: 12,
      twoFAStatus: "Not Allowed",
      lastLogin: "February 16, 2024 3:12 pm",
   },
   {
      username: "admin",
      name: "admin admin",
      email: "admin@techpression.com",
      role: "Administrator",
      userId: 0,
      twoFAStatus: "Inactive",
      lastLogin: "February 19, 2024 9:37 pm",
   },
   {
      username: "Felicia Akindurodoye",
      name: "Felicia Akindurodoye",
      email: "Feliciaakindurodoye@gmail.com",
      role: "Author",
      userId: 14,
      twoFAStatus: "Not Allowed",
      lastLogin: "February 19, 2024 9:09 pm",
   },
   {
      username: "Hauwa",
      name: "Hauwa Ali Abdul",
      email: "hauwa.aliabdul@gmail.com",
      role: "Author",
      userId: 21,
      twoFAStatus: "Not Allowed",
      lastLogin: "January 29, 2024 2:19 pm",
   },
   {
      username: "Ibukunoluwa",
      name: "Ibukunoluwa Josephine Bankole",
      email: "ibukunoluwabankole@gmail.com",
      role: "Author",
      userId: 16,
      twoFAStatus: "Not Allowed",
      lastLogin: "February 7, 2024 3:21 pm",
   },
   {
      username: "Marketing",
      name: "—Unknown",
      email: "marketing@techpression.com",
      role: "Administrator, HR Manager",
      userId: 26,
      twoFAStatus: "Inactive",
      lastLogin: "-",
   },
   {
      username: "Modupeoluwa Olalere",
      name: "Modupeoluwa Olalere",
      email: "modupeolalere@gmail.com",
      role: "Author",
      userId: 20,
      twoFAStatus: "Not Allowed",
      lastLogin: "February 10, 2024 12:45 pm",
   },
   {
      username: "News@Techpression",
      name: "—Unknown",
      email: "news@techpression.com",
      role: "Customer",
      userId: 31,
      twoFAStatus: "Not Allowed",
      lastLogin: "January 30, 2024 9:26 pm",
   },
   {
      username: "Okunloye Abiodun Segun",
      name: "Okunloye Abiodun Segun",
      email: "Okunloyeabbey@gmail.com",
      role: "Administrator, HR Manager",
      userId: 10,
      twoFAStatus: "Inactive",
      lastLogin: "February 19, 2024 10:26 pm",
   },
   {
      username: "Olanrewaju Adeniyi",
      name: "Olanrewaju Adeniyi",
      email: "alexis9ja@gmail.com",
      role: "Author",
      userId: 32,
      twoFAStatus: "Not Allowed",
      lastLogin: "February 12, 2024 3:12 pm",
   },
   {
      username: "Olumofe Temitayo",
      name: "—Unknown",
      email: "Temitayoolumofe@gmail.com",
      role: "Author",
      userId: 28,
      twoFAStatus: "Not Allowed",
      lastLogin: "-",
   },
   {
      username: "pelumiapantaku",
      name: "Pelumi Apantaku",
      email: "pelumiapantaku@gmail.com",
      role: "Administrator, HR Manager",
      userId: 2,
      twoFAStatus: "Inactive",
      lastLogin: "-",
   },
   {
      username: "Staff Writer",
      name: "Staff Writer",
      email: "techpression21@gmail.com",
      role: "Author",
      userId: 11,
      twoFAStatus: "Not Allowed",
      lastLogin: "-",
   },
   {
      username: "Victory",
      name: "Daisi Victory",
      email: "daisivictory@gmail.com",
      role: "None",
      userId: 6,
      twoFAStatus: "Not Allowed",
      lastLogin: "January 24, 2024 7:20 pm",
   },
   {
      username: "wp_update-1705692378",
      name: "—Unknown",
      email: "",
      role: "Administrator",
      userId: 30,
      twoFAStatus: "Inactive",
      lastLogin: "-",
   },
   {
      username: "Yemi Olakitan",
      name: "Yemi Olakitan",
      email: "yemisage@gmail.com",
      role: "Administrator, HR Manager",
      userId: 0,
      twoFAStatus: "Inactive",
      lastLogin: "-",
   },
];

export const findAuthorName = (authorId: number) => {
   return users.find((user) => user.userId === authorId)?.name || "Staff Writer";
};
