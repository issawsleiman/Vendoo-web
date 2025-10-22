import VendooRoundedLink from "../../components/widgets/VendooRoundedLink";
import PageHeader from "../../components/common/SectionHeadingText";
import VendooLabel from "../../components/widgets/VendooLabel";
import VendooInput from "../../components/widgets/VendooInput";
import { useTheme } from "../../context/ThemeContext";
import { TextColorDark, TextColorWhite } from "../../utils/constants/colors";

export default function ContactPage() {
  // getting current theme
  const currenTheme = useTheme();
  return (
    <section className="py-14 px-5">
      <PageHeader
        title="Get in Touch"
        description="  Have a question or need help? Our team is here to assist you with
          anything related to your Vendoo experience."
      />

      <div className="max-w-3xl mx-auto rounded-2xl shadow-md p-5">
        <form className="space-y-6">
          <div>
            <VendooLabel text="Name" htmlFor={""} />
            <VendooInput
              id={""}
              value={""}
              name={""}
              type={""}
              hintText="Name"
            />
            <VendooLabel text="Email" htmlFor={""} />
            <VendooInput
              id={""}
              value={""}
              name={""}
              type={"email"}
              hintText="you@example.com"
            />
          </div>

          <div>
            <VendooLabel text="Message" htmlFor={""} />
            <textarea
              rows={3}
              placeholder="Write your message..."
              style={{
                color: `${currenTheme.isDark ? TextColorDark : TextColorWhite}`,
              }}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
          </div>

          <VendooRoundedLink
            className="flex flex-row justify-center"
            text="Send Message"
          />
        </form>

        <div className="mt-10 text-center text-gray-600">
          <p>
            Email us directly at{" "}
            <a
              href="mailto:support@vendoo.com"
              className="text-primary font-medium"
            >
              support@vendoo.com
            </a>
          </p>
          <p className="mt-2">
            Or call us at <span className="font-medium">+961 71330986</span>
          </p>
        </div>
      </div>
    </section>
  );
}
