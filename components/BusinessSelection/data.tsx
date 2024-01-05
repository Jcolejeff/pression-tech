interface DataEntry {
	name: string;
	details: string;
	image: string;
	bgColor: string;
	description?: string;
}

interface BusinessData {
	name: string;
	data: DataEntry[];
}
const EducationData: DataEntry[] = [
	{
		name: "Customers",

		details: "Manage customers effectively and enhance customer retention",
		image: "/images/tools/customers/new-customer.jpg",
		bgColor: "bg-gray-500",
	},

	{
		name: "Receipts",
		details:
			"Close more deals with our invoice management and send receipts when paid.",
		image: "/images/tools/receipts/issue-receipt.png",
		bgColor: "bg-gray-500",
	},
	{
		name: "Sales",
		details: "Record transactions made daily seamlessly",
		image: "/images/tools/reports/generate-report.jpg",
		bgColor: "bg-gray-500",
		description:
			"Effortlessly issue receipts anytime, anywhere. Simplify your record-keeping and enhance customer satisfaction with our user-friendly receipt issuance solution.",
	},
	{
		name: "Invoices",
		details: "Create invoices for your sales and send them out to clients.",
		image: "/images/tools/receipts/receipts-one.png",

		bgColor: "bg-gray-500",
	},
	{
		name: "Payments",
		details: "Track all Payments and know when you are paid.",
		image: "/images/tools/receipts/confirm-sale.png",
		bgColor: "bg-gray-500",
	},
];

const HospitalityData: DataEntry[] = [
	{
		name: "Payments",
		details: "Track all Payments and know when you are paid.",
		image: "/images/tools/receipts/confirm-sale.png",
		bgColor: "bg-gray-500",
	},
	{
		name: "Receipts",
		details:
			"Close more deals with our invoice management and send receipts when paid.",
		image: "/images/tools/receipts/issue-receipt.png",
		bgColor: "bg-gray-500",
	},
	{
		name: "Invoices",
		details: "Create invoices for your sales and send them out to clients.",
		image: "/images/tools/receipts/receipts-one.png",
		bgColor: "bg-gray-500",
	},
	{
		name: "Customers",

		details: "Manage customers effectively and enhance customer retention",
		image: "/images/tools/customers/new-customer.jpg",
		bgColor: "bg-gray-500",
	},
	{
		name: "Sales",
		details: "Record transactions made daily seamlessly",
		image: "/images/tools/reports/generate-report.jpg",
		bgColor: "bg-gray-500",
		description:
			"Effortlessly issue receipts anytime, anywhere. Simplify your record-keeping and enhance customer satisfaction with our user-friendly receipt issuance solution.",
	},
];

const FreelanceData: DataEntry[] = [
	{
		name: "Sales",
		details: "Record transactions made daily seamlessly",
		image: "/images/tools/reports/generate-report.jpg",
		bgColor: "bg-gray-500",
		description:
			"Effortlessly issue receipts anytime, anywhere. Simplify your record-keeping and enhance customer satisfaction with our user-friendly receipt issuance solution.",
	},
	{
		name: "Invoices",
		details: "Create invoices for your sales and send them out to clients.",
		image: "/images/tools/receipts/receipts-one.png",
		bgColor: "bg-gray-500",
	},
	{
		name: "Customers",

		details: "Manage customers effectively and enhance customer retention",
		image: "/images/tools/customers/new-customer.jpg",
		bgColor: "bg-gray-500",
	},
	{
		name: "Payments",
		details: "Track all Payments and know when you are paid.",
		image: "/images/tools/receipts/confirm-sale.png",
		bgColor: "bg-gray-500",
	},
	{
		name: "Receipts",
		details:
			"Close more deals with our invoice management and send receipts when paid.",
		image: "/images/tools/receipts/issue-receipt.png",
		bgColor: "bg-gray-500",
	},
];

const OnlineTravelData: DataEntry[] = [
	{
		name: "Receipts",
		details:
			"Close more deals with our invoice management and send receipts when paid.",
		image: "/images/tools/receipts/issue-receipt.png",
		bgColor: "bg-gray-500",
	},
	{
		name: "Invoices",
		details: "Create invoices for your sales and send them out to clients.",
		image: "/images/tools/receipts/receipts-one.png",
		bgColor: "bg-gray-500",
	},
	{
		name: "Customers",

		details: "Manage customers effectively and enhance customer retention",
		image: "/images/tools/customers/new-customer.jpg",
		bgColor: "bg-gray-500",
	},
	{
		name: "Sales",
		details: "Record transactions made daily seamlessly",
		image: "/images/tools/reports/generate-report.jpg",
		bgColor: "bg-gray-500",
		description:
			"Effortlessly issue receipts anytime, anywhere. Simplify your record-keeping and enhance customer satisfaction with our user-friendly receipt issuance solution.",
	},
	{
		name: "Payments",
		details: "Track all Payments and know when you are paid.",
		image: "/images/tools/receipts/confirm-sale.png",
		bgColor: "bg-gray-500",
	},
];

const RetailStoreData: DataEntry[] = [
	{
		name: "Invoices",
		details: "Create invoices for your sales and send them out to clients.",
		image: "/images/tools/receipts/receipts-one.png",
		bgColor: "bg-gray-500",
	},
	{
		name: "Payments",
		details: "Track all Payments and know when you are paid.",
		image: "/images/tools/receipts/confirm-sale.png",
		bgColor: "bg-gray-500",
	},
	{
		name: "Customers",

		details: "Manage customers effectively and enhance customer retention",
		image: "/images/tools/customers/new-customer.jpg",
		bgColor: "bg-gray-500",
	},
	{
		name: "Sales",
		details: "Record transactions made daily seamlessly",
		image: "/images/tools/reports/generate-report.jpg",
		bgColor: "bg-gray-500",
		description:
			"Effortlessly issue receipts anytime, anywhere. Simplify your record-keeping and enhance customer satisfaction with our user-friendly receipt issuance solution.",
	},
	{
		name: "Receipts",
		details:
			"Close more deals with our invoice management and send receipts when paid.",
		image: "/images/tools/receipts/issue-receipt.png",
		bgColor: "bg-gray-500",
	},
];

const allBusinessData: BusinessData[] = [
	{ name: "Retail Store", data: RetailStoreData },
	{ name: "Freelance", data: FreelanceData },
	{ name: "Online Travel", data: OnlineTravelData },
	{ name: "Education", data: EducationData },
	{ name: "Hospitality", data: HospitalityData },
];

export default allBusinessData;
